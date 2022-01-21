'reach 0.1';

const NFT_Params = Object({
  name: Bytes(32),
  symbol: Bytes(32),
  uri: Bytes(128)
});

// Unwrap bool
const unwbool = (m) => fromSome(m, false);

/*
 * For now, should work with NFTs with total supply of one,
 * because tokenApprovals require a (UInt => Address) mapping
 * and nested Maps aren't allowed for operator approvals
 */
export const main = Reach.App(() => {
  const Creator = Participant('Creator', {
    getParams: Fun([], NFT_Params)
  })

  const ERC721_User = API({
    // safeTransferFrom(from, to, tokenId)
    safeTransferFrom: Fun([Address, Address, UInt], Bool),

    // This won't work without overloads
    // safeTransferFrom(from, to, tokenId, data) 
    // safeTransferFrom: Fun([Address, Address, UInt, Bytes(32)], Bool),

    // transferFrom(from, to, tokenId)
    transferFrom: Fun([Address, Address, UInt], Bool),

    // approve(approved, tokenId)
    approve: Fun([Address, UInt], Bool),

    // setApprovalForAll(operator, approved)
    setApprovalForAll: Fun([Address, Bool], Bool)
  });

  const ERC721_Events = Events({
    // Transfer(from, to, tokenId)
    Transfer: [Address, Address, UInt],

    // Approval(owner, approved, tokenId)
    Approval: [Address, Address, UInt],

    // ApprovalForAll(owner, operator, approved)
    ApprovalForAll: [Address, Address, Bool],
  });

  const ERC721_Views = View({
    ownerOf: Fun([UInt], Address),
    balanceOf: Fun([Address], UInt),
    getApproved: Fun([UInt], Address),
    isApprovedForAll: Fun([Address, Address], Bool),
    tokenURI: Fun([UInt], Bytes(128)),
    name: Bytes(32),
    symbol: Bytes(32)
  });

  init();

  Creator.only(() => {
    const { name, symbol, uri } = declassify(interact.getParams());
  });
  Creator.publish(name, symbol,uri);
  commit();

  Creator.publish();
  ERC721_Views.name.set(name);
  ERC721_Views.symbol.set(symbol);
  ERC721_Views.tokenURI.set((id) => {
    return uri;
  })

  const operatorApprovals = new Map(Bool);

  const [owner, approved] = parallelReduce([Creator, Creator])
    .invariant(balance() == 0)
    .while(true)
    .define(() => {
      const checkOwnerOrApproved = (addr) =>
        addr === owner || addr === approved || unwbool(operatorApprovals[addr]);

      const checkRightToken = (tokenId) =>
        tokenId == 0;

      ERC721_Views.ownerOf.set((tokenId) => {
        assume(checkRightToken(tokenId));
        return owner;
      });

      ERC721_Views.balanceOf.set((addr) => {
        return addr === owner ? 1 : 0;
      });

      ERC721_Views.getApproved.set((tokenId) => {
        assume(checkRightToken(tokenId));
        return approved;
      });

      ERC721_Views.isApprovedForAll.set((addr, operator) => {
        return owner === addr && unwbool(operatorApprovals[operator]);
      })
    })
    .api(
      ERC721_User.safeTransferFrom,
      // Assumes
      ((sender, _, tokenId) => {
        assume(checkOwnerOrApproved(sender));
        assume(checkRightToken(tokenId));
      }),
      // Payments
      ((_, _, _) => 0),
      // Consensus
      ((sender, receiver, tokenId, respond) => {
        require(checkOwnerOrApproved(sender));
        require(checkRightToken(tokenId));
        respond(true);

        ERC721_Events.Transfer(sender, receiver, tokenId);
        return [receiver, receiver]; // Reset approval upon transfers
      })
    )
    .api(
      ERC721_User.transferFrom,
      // Assumes
      ((sender, _, tokenId) => {
        assume(checkOwnerOrApproved(sender));
        assume(checkRightToken(tokenId));
      }),
      // Payments
      ((_, _, _) => 0),
      // Consensus
      ((sender, receiver, tokenId, respond) => {
        require(checkOwnerOrApproved(sender));
        require(checkRightToken(tokenId));
        respond(true);

        ERC721_Events.Transfer(sender, receiver, tokenId);
        return [receiver, receiver]; // Reset approval upon transfers
      })
    )
    .api(
      ERC721_User.approve,
      // Assumes
      ((_, tokenId) => {
        assume(checkOwnerOrApproved(this));
        assume(checkRightToken(tokenId));
      }),
      // Payments
      ((_, _) => 0),
      // Consensus
      ((approvalAddress, tokenId, respond) => {
        require(checkOwnerOrApproved(this));
        require(checkRightToken(tokenId));
        respond(true);

        ERC721_Events.Approval(this, approvalAddress, tokenId);
        return [owner, approvalAddress];
      })
    )
    .api(
      ERC721_User.setApprovalForAll,
      // Assumes
      ((_, _) => {
        assume(checkOwnerOrApproved(this));
      }),
      // Payments
      ((_, _) => 0),
      // Consensus
      ((operator, isApproved, respond) => {
        require(checkOwnerOrApproved(this));
        respond(true);

        operatorApprovals[operator] = isApproved;

        ERC721_Events.ApprovalForAll(this, operator, isApproved);
        return [owner, approved];
      })
    )
    .timeout(relativeSecs(5), () => {
      Anybody.publish();
      return [owner, approved];
    });

  commit();
  exit();
});
