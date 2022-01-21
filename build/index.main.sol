// Automatically generated with Reach 0.1.8 (d5a45f78)
pragma abicoder v2;

pragma solidity ^0.8.9;
/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `recipient`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address recipient, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `sender` to `recipient` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}
/**
 * @dev Interface for the optional metadata functions from the ERC20 standard.
 *
 * _Available since v4.1._
 */
interface IERC20Metadata is IERC20 {
    /**
     * @dev Returns the name of the token.
     */
    function name() external view returns (string memory);

    /**
     * @dev Returns the symbol of the token.
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Returns the decimals places of the token.
     */
    function decimals() external view returns (uint8);
}
/*
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        this; // silence state mutability warning without generating bytecode - see https://github.com/ethereum/solidity/issues/2691
        return msg.data;
    }
}
/**
 * @dev Implementation of the {IERC20} interface.
 *
 * This implementation is agnostic to the way tokens are created. This means
 * that a supply mechanism has to be added in a derived contract using {_mint}.
 * For a generic mechanism see {ERC20PresetMinterPauser}.
 *
 * TIP: For a detailed writeup see our guide
 * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How
 * to implement supply mechanisms].
 *
 * We have followed general OpenZeppelin guidelines: functions revert instead
 * of returning `false` on failure. This behavior is nonetheless conventional
 * and does not conflict with the expectations of ERC20 applications.
 *
 * Additionally, an {Approval} event is emitted on calls to {transferFrom}.
 * This allows applications to reconstruct the allowance for all accounts just
 * by listening to said events. Other implementations of the EIP may not emit
 * these events, as it isn't required by the specification.
 *
 * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}
 * functions have been added to mitigate the well-known issues around setting
 * allowances. See {IERC20-approve}.
 */
contract ERC20 is Context, IERC20, IERC20Metadata {
    mapping (address => uint256) private _balances;

    mapping (address => mapping (address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;

    /**
     * @dev Sets the values for {name} and {symbol}.
     *
     * The defaut value of {decimals} is 18. To select a different value for
     * {decimals} you should overload it.
     *
     * All two of these values are immutable: they can only be set once during
     * construction.
     */
    constructor (string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    /**
     * @dev Returns the name of the token.
     */
    function name() public view virtual override returns (string memory) {
        return _name;
    }

    /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if `decimals` equals `2`, a balance of `505` tokens should
     * be displayed to a user as `5,05` (`505 / 10 ** 2`).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the value {ERC20} uses, unless this function is
     * overridden;
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */
    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }

    /**
     * @dev See {IERC20-transfer}.
     *
     * Requirements:
     *
     * - `recipient` cannot be the zero address.
     * - the caller must have a balance of at least `amount`.
     */
    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
        _transfer(_msgSender(), recipient, amount);
        return true;
    }

    /**
     * @dev See {IERC20-allowance}.
     */
    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    /**
     * @dev See {IERC20-approve}.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        _approve(_msgSender(), spender, amount);
        return true;
    }

    /**
     * @dev See {IERC20-transferFrom}.
     *
     * Emits an {Approval} event indicating the updated allowance. This is not
     * required by the EIP. See the note at the beginning of {ERC20}.
     *
     * Requirements:
     *
     * - `sender` and `recipient` cannot be the zero address.
     * - `sender` must have a balance of at least `amount`.
     * - the caller must have allowance for ``sender``'s tokens of at least
     * `amount`.
     */
    function transferFrom(address sender, address recipient, uint256 amount) public virtual override returns (bool) {
        _transfer(sender, recipient, amount);

        uint256 currentAllowance = _allowances[sender][_msgSender()];
        require(currentAllowance >= amount, "ERC20: transfer amount exceeds allowance");
        _approve(sender, _msgSender(), currentAllowance - amount);

        return true;
    }

    /**
     * @dev Moves tokens `amount` from `sender` to `recipient`.
     *
     * This is internal function is equivalent to {transfer}, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a {Transfer} event.
     *
     * Requirements:
     *
     * - `sender` cannot be the zero address.
     * - `recipient` cannot be the zero address.
     * - `sender` must have a balance of at least `amount`.
     */
    function _transfer(address sender, address recipient, uint256 amount) internal virtual {
        require(sender != address(0), "ERC20: transfer from the zero address");
        require(recipient != address(0), "ERC20: transfer to the zero address");


        uint256 senderBalance = _balances[sender];
        require(senderBalance >= amount, "ERC20: transfer amount exceeds balance");
        _balances[sender] = senderBalance - amount;
        _balances[recipient] += amount;

        emit Transfer(sender, recipient, amount);
    }

    /** @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a {Transfer} event with `from` set to the zero address.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     */
    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");


        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, reducing the
     * total supply.
     *
     * Emits a {Transfer} event with `to` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     * - `account` must have at least `amount` tokens.
     */
    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: burn from the zero address");


        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        _balances[account] = accountBalance - amount;
        _totalSupply -= amount;

        emit Transfer(account, address(0), amount);
    }

    /**
     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.
     *
     * This internal function is equivalent to `approve`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */
    function _approve(address owner, address spender, uint256 amount) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }
}
/*
  ReachToken essentially emulates Algorand Standard Assets on Ethereum, but doesn't include things like clawback or a separation of management and creator.
 */
contract ReachToken is ERC20 {
  address private _creator;
  string private _url;
  string private _metadata;
  uint8 private _decimals;

  constructor (
    string memory name_,
    string memory symbol_,
    string memory url_,
    string memory metadata_,
    uint256 supply_,
    uint256 decimals_
  ) ERC20(name_, symbol_) {
    _creator = _msgSender();
    _mint(_creator, supply_);
    _url = url_;
    _metadata = metadata_;
    _decimals = uint8(decimals_);
  }

  function url() public view returns (string memory) { return _url; }

  function metadata() public view returns (string memory) { return _metadata; }

  function decimals() public view override returns (uint8) { return _decimals; }

  function burn(uint256 amount) public virtual returns (bool) {
    require(_msgSender() == _creator, "must be creator");
    _burn(_creator, amount);
    return true;
  }

  function destroy() public virtual {
    require(_msgSender() == _creator, "must be creator");
    require(totalSupply() == 0, "must be no supply");
    selfdestruct(payable(_creator));
  }
}

// Generated code includes meaning of numbers
error ReachError(uint256 msg);

contract Stdlib {
  function safeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x + y) >= x, "add overflow"); }
  function safeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x - y) <= x, "sub wraparound"); }
  function safeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y == 0 || (z = x * y) / y == x, "mul overflow"); }

  function unsafeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x + y; } }
  function unsafeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x - y; } }
  function unsafeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x * y; } }

  function reachRequire(bool succ, uint256 errMsg) internal pure {
    if ( ! succ ) {
      revert ReachError(errMsg);
    }
  }

  function checkFunReturn(bool succ, bytes memory returnData, uint256 errMsg) internal pure returns (bytes memory) {
    if (succ) {
      return returnData;
    } else {
      if (returnData.length > 0) {
        assembly {
          let returnData_size := mload(returnData)
          revert(add(32, returnData), returnData_size)
        }
      } else {
        revert ReachError(errMsg);
      }
    }
  }

  function tokenAllowance(address payable token, address owner, address spender) internal returns (uint256 amt) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.allowance.selector, owner, spender));
    checkFunReturn(ok, ret, 0 /*'token.allowance'*/);
    amt = abi.decode(ret, (uint256));
  }

  function tokenTransferFrom(address payable token, address sender, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transferFrom.selector, sender, recipient, amt));
    checkFunReturn(ok, ret, 1 /*'token.transferFrom'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenTransfer(address payable token, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transfer.selector, recipient, amt));
    checkFunReturn(ok, ret, 2 /*'token.transfer'*/);
    res = abi.decode(ret, (bool));
  }
  function safeTokenTransfer(address payable token, address recipient, uint256 amt) internal {
    require(tokenTransfer(token, recipient, amt));
  }

  function reachTokenBurn(address payable token, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.burn.selector, amt));
    checkFunReturn(ok, ret, 3 /*'token.burn'*/);
    res = abi.decode(ret, (bool));
  }
  function safeReachTokenBurn(address payable token, uint256 amt) internal {
    require(reachTokenBurn(token, amt));
  }

  function reachTokenDestroy(address payable token) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.destroy.selector));
    checkFunReturn(ok, ret, 4 /*'token.destroy'*/);
    res = true;
  }
  function safeReachTokenDestroy(address payable token) internal {
    require(reachTokenDestroy(token));
  }

  function readPayAmt(address sender, address payable token) internal returns (uint256 amt) {
    amt = tokenAllowance(token, sender, address(this));
    require(checkPayAmt(sender, token, amt));
  }

  function checkPayAmt(address sender, address payable token, uint256 amt) internal returns (bool) {
    return tokenTransferFrom(token, sender, address(this), amt);
  }

  function tokenApprove(address payable token, address spender, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.approve.selector, spender, amt));
    checkFunReturn(ok, ret, 5 /*'token.approve'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenBalanceOf(address payable token, address owner) internal returns (uint256 res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0) }(abi.encodeWithSelector(IERC20.balanceOf.selector, owner));
    checkFunReturn(ok, ret, 6 /*'token.balanceOf'*/);
    res = abi.decode(ret, (uint256));
  }
}

enum _enum_T0 {None, Some}
struct T0 {
  _enum_T0 which;
  bool _None;
  bool _Some;
  }

struct T1 {
  bytes32 elem0;
  }
struct T2 {
  bytes32 elem0;
  bytes32 elem1;
  bytes32 elem2;
  bytes32 elem3;
  }
struct T3 {
  address payable v484;
  T1 v485;
  T1 v486;
  T2 v487;
  }
struct T4 {
  address payable v484;
  T1 v485;
  T1 v486;
  T2 v487;
  address payable v497;
  address payable v498;
  uint256 v527;
  }
struct T5 {
  T1 v485;
  T1 v486;
  T2 v487;
  }
struct T6 {
  uint256 time;
  T5 msg;
  }
struct T7 {
  address payable v497;
  address payable v498;
  uint256 v499;
  uint256 v502;
  }
struct T8 {
  T3 svs;
  T7 msg;
  }
struct T10 {
  uint256 time;
  bool msg;
  }
struct T11 {
  address payable elem0;
  uint256 elem1;
  }
struct T12 {
  address payable elem0;
  address payable elem1;
  uint256 elem2;
  }
struct T13 {
  address payable elem0;
  bool elem1;
  }
enum _enum_T14 {approve0_113, safeTransferFrom0_113, setApprovalForAll0_113, transferFrom0_113}
struct T14 {
  _enum_T14 which;
  T11 _approve0_113;
  T12 _safeTransferFrom0_113;
  T13 _setApprovalForAll0_113;
  T12 _transferFrom0_113;
  }

struct T15 {
  T14 v609;
  }
struct T16 {
  uint256 time;
  T15 msg;
  }


contract ReachContract is Stdlib {
  uint256 current_step;
  uint256 current_time;
    bytes current_svbs;
  uint256 creation_time;
  function _reachCreationTime() external view returns (uint256) { return creation_time; }
  function _reachCurrentTime() external view returns (uint256) { return current_time; }
  function _reachCurrentState() external view returns (uint256, bytes memory) { return (current_step, current_svbs); }
  mapping (address => T0) map0;
  function __reachMap0Ref(address addr)  internal view returns (T0 memory res) {
    if (map0[addr].which == _enum_T0.Some) {
      res = map0[addr];}
    else {
      res.which = _enum_T0.None;
      res._None = false;
      }}
  function _reachMap0Ref(address addr)  external view returns (T0 memory res) {
    res = __reachMap0Ref(addr);}
  
  
  
  function balanceOf(address v1665)  external view returns (uint256) {
    if (current_step == uint256(1)) {
      (T3 memory vvs) = abi.decode(current_svbs, (T3));
      reachRequire((false), uint256(7) /*'invalid view_i'*/);
      }
    if (current_step == uint256(4)) {
      (T4 memory vvs) = abi.decode(current_svbs, (T4));
      
      
      return ((v1665 == vvs.v498) ? uint256(1) : uint256(0));
      
      
      }
    reachRequire((false), uint256(7) /*'invalid view_i'*/);
    }
  
  
  
  function getApproved(uint256 v1667)  external view returns (address) {
    if (current_step == uint256(1)) {
      (T3 memory vvs) = abi.decode(current_svbs, (T3));
      reachRequire((false), uint256(8) /*'invalid view_i'*/);
      }
    if (current_step == uint256(4)) {
      (T4 memory vvs) = abi.decode(current_svbs, (T4));
      
      reachRequire(((v1667 == uint256(0))), uint256(9) /*'(./index.rsh:98:15:application,[at ./index.rsh:97:35:application call to [unknown function] (defined at: ./index.rsh:97:35:application)],Nothing)'*/);
      
      return vvs.v497;
      
      
      }
    reachRequire((false), uint256(8) /*'invalid view_i'*/);
    }
  
  
  
  function isApprovedForAll(address v1669, address v1670)  external view returns (bool) {
    if (current_step == uint256(1)) {
      (T3 memory vvs) = abi.decode(current_svbs, (T3));
      reachRequire((false), uint256(10) /*'invalid view_i'*/);
      }
    if (current_step == uint256(4)) {
      (T4 memory vvs) = abi.decode(current_svbs, (T4));
      
      
      return ((vvs.v498 == v1669) ? (((__reachMap0Ref(v1670)).which == _enum_T0.Some ? (__reachMap0Ref(v1670))._Some : false)) : false);
      
      
      }
    reachRequire((false), uint256(10) /*'invalid view_i'*/);
    }
  
  
  
  function name()  external view returns (T1 memory) {
    if (current_step == uint256(1)) {
      (T3 memory vvs) = abi.decode(current_svbs, (T3));
      reachRequire((false), uint256(11) /*'invalid view_i'*/);
      }
    if (current_step == uint256(4)) {
      (T4 memory vvs) = abi.decode(current_svbs, (T4));
      
      
      return vvs.v485;
      
      
      }
    reachRequire((false), uint256(11) /*'invalid view_i'*/);
    }
  
  
  
  function ownerOf(uint256 v1673)  external view returns (address) {
    if (current_step == uint256(1)) {
      (T3 memory vvs) = abi.decode(current_svbs, (T3));
      reachRequire((false), uint256(12) /*'invalid view_i'*/);
      }
    if (current_step == uint256(4)) {
      (T4 memory vvs) = abi.decode(current_svbs, (T4));
      
      reachRequire(((v1673 == uint256(0))), uint256(13) /*'(./index.rsh:89:15:application,[at ./index.rsh:88:31:application call to [unknown function] (defined at: ./index.rsh:88:31:application)],Nothing)'*/);
      
      return vvs.v498;
      
      
      }
    reachRequire((false), uint256(12) /*'invalid view_i'*/);
    }
  
  
  
  function symbol()  external view returns (T1 memory) {
    if (current_step == uint256(1)) {
      (T3 memory vvs) = abi.decode(current_svbs, (T3));
      reachRequire((false), uint256(14) /*'invalid view_i'*/);
      }
    if (current_step == uint256(4)) {
      (T4 memory vvs) = abi.decode(current_svbs, (T4));
      
      
      return vvs.v486;
      
      
      }
    reachRequire((false), uint256(14) /*'invalid view_i'*/);
    }
  
  
  
  function tokenURI(uint256 v1676)  external view returns (T2 memory) {
    if (current_step == uint256(1)) {
      (T3 memory vvs) = abi.decode(current_svbs, (T3));
      reachRequire((false), uint256(15) /*'invalid view_i'*/);
      }
    if (current_step == uint256(4)) {
      (T4 memory vvs) = abi.decode(current_svbs, (T4));
      
      
      return vvs.v487;
      
      
      }
    reachRequire((false), uint256(15) /*'invalid view_i'*/);
    }
  
  
  
  
  struct ApiRng {
    bool approve;
    bool safeTransferFrom;
    bool setApprovalForAll;
    bool transferFrom;
    }
  event Approval(address payable v0, address payable v1, uint256 v2);
  event ApprovalForAll(address payable v0, address payable v1, bool v2);
  event Transfer(address payable v0, address payable v1, uint256 v2);
  event _reach_oe_v641(bool v0);
  event _reach_oe_v747(bool v0);
  event _reach_oe_v851(bool v0);
  event _reach_oe_v957(bool v0);
  
  
  event _reach_e0(T6 _a);
  
  constructor(T6 memory _a) payable {
    current_step = 0x0;
    creation_time = uint256(block.number);
    
    
    emit _reach_e0(_a);
    reachRequire((msg.value == uint256(0)), uint256(16) /*'(./index.rsh:66:11:dot,[],"verify network token pay amount")'*/);
    T3 memory nsvs;
    nsvs.v484 = payable(msg.sender);
    nsvs.v485 = _a.msg.v485;
    nsvs.v486 = _a.msg.v486;
    nsvs.v487 = _a.msg.v487;
    current_step = uint256(1);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    
    
    }
  
  event _reach_e1(T10 _a);
  
  function _reach_m1(T10 calldata _a) external payable {
    ApiRng memory _r;
    _reach_m1(_a, _r);
    }
  function _reach_m1(T10 memory _a, ApiRng memory _apiRet)  internal  {
    reachRequire((current_step == uint256(1)), uint256(19) /*'state step check at ./index.rsh:69:11:dot'*/);
    reachRequire(((_a.time == uint256(0)) || (current_time == _a.time)), uint256(20) /*'state time check at ./index.rsh:69:11:dot'*/);
    current_step = 0x0;
    (T3 memory _svs) = abi.decode(current_svbs, (T3));
    
    
    emit _reach_e1(_a);
    reachRequire((msg.value == uint256(0)), uint256(17) /*'(./index.rsh:69:11:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v484 == payable(msg.sender))), uint256(18) /*'(./index.rsh:69:11:dot,[],Just "sender correct")'*/);
    T8 memory la;
    la.svs.v484 = _svs.v484;
    la.svs.v485 = _svs.v485;
    la.svs.v486 = _svs.v486;
    la.svs.v487 = _svs.v487;
    la.msg.v497 = _svs.v484;
    la.msg.v498 = _svs.v484;
    la.msg.v499 = uint256(block.number);
    la.msg.v502 = uint256(block.timestamp);
    l2(la);
    
    
    }
  
  struct _F2 {
    uint256 v527;
    }
  function l2(T8 memory _a)  internal {
    _F2 memory _f;
    
    _f.v527 = _a.msg.v502 + uint256(5);
    T4 memory nsvs;
    nsvs.v484 = _a.svs.v484;
    nsvs.v485 = _a.svs.v485;
    nsvs.v486 = _a.svs.v486;
    nsvs.v487 = _a.svs.v487;
    nsvs.v497 = _a.msg.v497;
    nsvs.v498 = _a.msg.v498;
    nsvs.v527 = _f.v527;
    current_step = uint256(4);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    
    
    }
  
  event _reach_e3(T16 _a);
  struct _F3 {
    T11 v612;
    T12 v700;
    T13 v788;
    T12 v876;
    }
  function _reach_m3(T16 calldata _a) external payable {
    ApiRng memory _r;
    _reach_m3(_a, _r);
    }
  function _reach_m3(T16 memory _a, ApiRng memory _apiRet)  internal  {
    reachRequire((current_step == uint256(4)), uint256(32) /*'state step check at ./index.rsh:78:43:dot'*/);
    reachRequire(((_a.time == uint256(0)) || (current_time == _a.time)), uint256(33) /*'state time check at ./index.rsh:78:43:dot'*/);
    current_step = 0x0;
    (T4 memory _svs) = abi.decode(current_svbs, (T4));
    _F3 memory _f;
    reachRequire((uint256(block.timestamp) < _svs.v527), uint256(34) /*'timeout check at ./index.rsh:78:43:dot'*/);
    
    emit _reach_e3(_a);
    if (_a.msg.v609.which == _enum_T14.approve0_113) {
      _f.v612 = _a.msg.v609._approve0_113;
      reachRequire((msg.value == uint256(0)), uint256(21) /*'(./index.rsh:78:43:dot,[],"verify network token pay amount")'*/);
      reachRequire(((((payable(msg.sender) == _svs.v498) ? true : (payable(msg.sender) == _svs.v497)) ? true : (((__reachMap0Ref(payable(msg.sender))).which == _enum_T0.Some ? (__reachMap0Ref(payable(msg.sender)))._Some : false)))), uint256(22) /*'(./index.rsh:155:16:application,[at ./index.rsh:154:7:application call to [unknown function] (defined at: ./index.rsh:154:7:function exp)],Nothing)'*/);
      reachRequire((((_f.v612.elem1) == uint256(0))), uint256(23) /*'(./index.rsh:156:16:application,[at ./index.rsh:154:7:application call to [unknown function] (defined at: ./index.rsh:154:7:function exp)],Nothing)'*/);
      emit _reach_oe_v641( (true));
      _apiRet.approve = (true);
      
      emit Approval( payable(msg.sender),  (_f.v612.elem0),  (_f.v612.elem1));
      
      
      T8 memory la;
      la.svs.v484 = _svs.v484;
      la.svs.v485 = _svs.v485;
      la.svs.v486 = _svs.v486;
      la.svs.v487 = _svs.v487;
      la.msg.v497 = (_f.v612.elem0);
      la.msg.v498 = _svs.v498;
      la.msg.v499 = uint256(block.number);
      la.msg.v502 = uint256(block.timestamp);
      l2(la);
      
      }
    else {
      if (_a.msg.v609.which == _enum_T14.safeTransferFrom0_113) {
        _f.v700 = _a.msg.v609._safeTransferFrom0_113;
        reachRequire((msg.value == uint256(0)), uint256(24) /*'(./index.rsh:78:43:dot,[],"verify network token pay amount")'*/);
        reachRequire((((((_f.v700.elem0) == _svs.v498) ? true : ((_f.v700.elem0) == _svs.v497)) ? true : (((__reachMap0Ref((_f.v700.elem0))).which == _enum_T0.Some ? (__reachMap0Ref((_f.v700.elem0)))._Some : false)))), uint256(25) /*'(./index.rsh:117:16:application,[at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:7:function exp)],Nothing)'*/);
        reachRequire((((_f.v700.elem2) == uint256(0))), uint256(26) /*'(./index.rsh:118:16:application,[at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:7:function exp)],Nothing)'*/);
        emit _reach_oe_v747( (true));
        _apiRet.safeTransferFrom = (true);
        
        emit Transfer( (_f.v700.elem0),  (_f.v700.elem1),  (_f.v700.elem2));
        
        
        T8 memory la;
        la.svs.v484 = _svs.v484;
        la.svs.v485 = _svs.v485;
        la.svs.v486 = _svs.v486;
        la.svs.v487 = _svs.v487;
        la.msg.v497 = (_f.v700.elem1);
        la.msg.v498 = (_f.v700.elem1);
        la.msg.v499 = uint256(block.number);
        la.msg.v502 = uint256(block.timestamp);
        l2(la);
        
        }
      else {
        if (_a.msg.v609.which == _enum_T14.setApprovalForAll0_113) {
          _f.v788 = _a.msg.v609._setApprovalForAll0_113;
          reachRequire((msg.value == uint256(0)), uint256(27) /*'(./index.rsh:78:43:dot,[],"verify network token pay amount")'*/);
          reachRequire(((((payable(msg.sender) == _svs.v498) ? true : (payable(msg.sender) == _svs.v497)) ? true : (((__reachMap0Ref(payable(msg.sender))).which == _enum_T0.Some ? (__reachMap0Ref(payable(msg.sender)))._Some : false)))), uint256(28) /*'(./index.rsh:173:16:application,[at ./index.rsh:172:7:application call to [unknown function] (defined at: ./index.rsh:172:7:function exp)],Nothing)'*/);
          emit _reach_oe_v851( (true));
          _apiRet.setApprovalForAll = (true);
          
          map0[(_f.v788.elem0)].which = _enum_T0.Some;
          map0[(_f.v788.elem0)]._Some = (_f.v788.elem1);
          
          emit ApprovalForAll( payable(msg.sender),  (_f.v788.elem0),  (_f.v788.elem1));
          
          
          T8 memory la;
          la.svs.v484 = _svs.v484;
          la.svs.v485 = _svs.v485;
          la.svs.v486 = _svs.v486;
          la.svs.v487 = _svs.v487;
          la.msg.v497 = _svs.v497;
          la.msg.v498 = _svs.v498;
          la.msg.v499 = uint256(block.number);
          la.msg.v502 = uint256(block.timestamp);
          l2(la);
          
          }
        else {
          if (_a.msg.v609.which == _enum_T14.transferFrom0_113) {
            _f.v876 = _a.msg.v609._transferFrom0_113;
            reachRequire((msg.value == uint256(0)), uint256(29) /*'(./index.rsh:78:43:dot,[],"verify network token pay amount")'*/);
            reachRequire((((((_f.v876.elem0) == _svs.v498) ? true : ((_f.v876.elem0) == _svs.v497)) ? true : (((__reachMap0Ref((_f.v876.elem0))).which == _enum_T0.Some ? (__reachMap0Ref((_f.v876.elem0)))._Some : false)))), uint256(30) /*'(./index.rsh:136:16:application,[at ./index.rsh:135:7:application call to [unknown function] (defined at: ./index.rsh:135:7:function exp)],Nothing)'*/);
            reachRequire((((_f.v876.elem2) == uint256(0))), uint256(31) /*'(./index.rsh:137:16:application,[at ./index.rsh:135:7:application call to [unknown function] (defined at: ./index.rsh:135:7:function exp)],Nothing)'*/);
            emit _reach_oe_v957( (true));
            _apiRet.transferFrom = (true);
            
            emit Transfer( (_f.v876.elem0),  (_f.v876.elem1),  (_f.v876.elem2));
            
            
            T8 memory la;
            la.svs.v484 = _svs.v484;
            la.svs.v485 = _svs.v485;
            la.svs.v486 = _svs.v486;
            la.svs.v487 = _svs.v487;
            la.msg.v497 = (_f.v876.elem1);
            la.msg.v498 = (_f.v876.elem1);
            la.msg.v499 = uint256(block.number);
            la.msg.v502 = uint256(block.timestamp);
            l2(la);
            
            }
          else {
            }}}}
    
    }
  
  event _reach_e4(T10 _a);
  
  function _reach_m4(T10 calldata _a) external payable {
    ApiRng memory _r;
    _reach_m4(_a, _r);
    }
  function _reach_m4(T10 memory _a, ApiRng memory _apiRet)  internal  {
    reachRequire((current_step == uint256(4)), uint256(37) /*'state step check at ./index.rsh:183:15:dot'*/);
    reachRequire(((_a.time == uint256(0)) || (current_time == _a.time)), uint256(38) /*'state time check at ./index.rsh:183:15:dot'*/);
    current_step = 0x0;
    (T4 memory _svs) = abi.decode(current_svbs, (T4));
    
    reachRequire((uint256(block.timestamp) >= _svs.v527), uint256(39) /*'timeout check at ./index.rsh:183:15:dot'*/);
    
    emit _reach_e4(_a);
    reachRequire((msg.value == uint256(0)), uint256(35) /*'(./index.rsh:183:15:dot,[at ./index.rsh:182:34:application call to [unknown function] (defined at: ./index.rsh:182:34:function exp)],"verify network token pay amount")'*/);
    reachRequire(((_svs.v484 == payable(msg.sender))), uint256(36) /*'(./index.rsh:183:15:dot,[at ./index.rsh:182:34:application call to [unknown function] (defined at: ./index.rsh:182:34:function exp)],Just "sender correct")'*/);
    T8 memory la;
    la.svs.v484 = _svs.v484;
    la.svs.v485 = _svs.v485;
    la.svs.v486 = _svs.v486;
    la.svs.v487 = _svs.v487;
    la.msg.v497 = _svs.v497;
    la.msg.v498 = _svs.v498;
    la.msg.v499 = uint256(block.number);
    la.msg.v502 = uint256(block.timestamp);
    l2(la);
    
    
    }
  
  
  function approve(address payable _a0, uint256 _a1)  external payable returns (bool ) {
    ApiRng memory _r;
    T16 memory _t;
    T14 memory _vt;
    _vt._approve0_113 = T11(_a0, _a1);
    _vt.which = _enum_T14.approve0_113;
    _t.msg = T15(_vt);
    _reach_m3(_t, _r);
    return _r.approve;
    }
  function safeTransferFrom(address payable _a0, address payable _a1, uint256 _a2)  external payable returns (bool ) {
    ApiRng memory _r;
    T16 memory _t;
    T14 memory _vt;
    _vt._safeTransferFrom0_113 = T12(_a0, _a1, _a2);
    _vt.which = _enum_T14.safeTransferFrom0_113;
    _t.msg = T15(_vt);
    _reach_m3(_t, _r);
    return _r.safeTransferFrom;
    }
  function setApprovalForAll(address payable _a0, bool _a1)  external payable returns (bool ) {
    ApiRng memory _r;
    T16 memory _t;
    T14 memory _vt;
    _vt._setApprovalForAll0_113 = T13(_a0, _a1);
    _vt.which = _enum_T14.setApprovalForAll0_113;
    _t.msg = T15(_vt);
    _reach_m3(_t, _r);
    return _r.setApprovalForAll;
    }
  function transferFrom(address payable _a0, address payable _a1, uint256 _a2)  external payable returns (bool ) {
    ApiRng memory _r;
    T16 memory _t;
    T14 memory _vt;
    _vt._transferFrom0_113 = T12(_a0, _a1, _a2);
    _vt.which = _enum_T14.transferFrom0_113;
    _t.msg = T15(_vt);
    _reach_m3(_t, _r);
    return _r.transferFrom;
    }
  
  receive () external payable {}
  fallback () external payable {}
  
  }
