#lang ll
parts {
  "Creator" = interact {
    getParams = IT_Fun [] Object({"name": Bytes(32), "symbol": Bytes(32), "uri": Bytes(128)})},
  "approve" = interact {
    in = IT_Fun [] Tuple(Address, UInt),
    out = IT_Fun [Tuple(Address, UInt),Bool] Null},
  "safeTransferFrom" = interact {
    in = IT_Fun [] Tuple(Address, Address, UInt),
    out = IT_Fun [Tuple(Address, Address, UInt),Bool] Null},
  "setApprovalForAll" = interact {
    in = IT_Fun [] Tuple(Address, Bool),
    out = IT_Fun [Tuple(Address, Bool),Bool] Null},
  "transferFrom" = interact {
    in = IT_Fun [] Tuple(Address, Address, UInt),
    out = IT_Fun [Tuple(Address, Address, UInt),Bool] Null}};

// maps
{
  map0 = Bool}
// initialization

{
  }
{
  Nothing = {
    balanceOf = IT_Fun [Address] UInt,
    getApproved = IT_Fun [UInt] Address,
    isApprovedForAll = IT_Fun [Address,Address] Bool,
    name = IT_Val Bytes(32),
    ownerOf = IT_Fun [UInt] Address,
    symbol = IT_Val Bytes(32),
    tokenURI = IT_Fun [UInt] Bytes(128)}}
{
  Nothing = {
    approve = ("approve", IT_Fun [Address,UInt] Bool),
    safeTransferFrom = ("safeTransferFrom", IT_Fun [Address,Address,UInt] Bool),
    setApprovalForAll = ("setApprovalForAll", IT_Fun [Address,Bool] Bool),
    transferFrom = ("transferFrom", IT_Fun [Address,Address,UInt] Bool)}}
{
  Nothing = {
    Approval = [Address, Address, UInt],
    ApprovalForAll = [Address, Address, Bool],
    Transfer = [Address, Address, UInt]}}
const v476* = {
  i = 0,
  sign = true};
only(Left "Creator") {
  const v478* = selfAddress("Creator", False, 19 )();
  const v480* = protect<Object({"name": Bytes(32), "symbol": Bytes(32), "uri": Bytes(128)})>("Creator".interact.getParams());
  const v481* = v480.name;
  const v482* = v480.symbol;
  const v483* = v480.uri;
  const v479* = null;
   };
publish(@0)
  .case("Creator").send({
    isClass = False,
    msg = [v481, v482, v483],
    pay = [0, ],
    when = true})
  .recv({
    didSend = v33,
    from = v484,
    msg = [v485, v486, v487],
    secs = v489,
    time = v488}){
    timeOrder((Nothing, thisConsensusTime/488 ), (Nothing, thisConsensusSecs/489 ) );
    const v490* = 0;
    checkPay(0, Nothing);
    commit();
    publish(@thisConsensusTime/488)
      .case("Creator").send({
        isClass = False,
        msg = [],
        pay = [0, ],
        when = true})
      .recv({
        didSend = v39,
        from = v491,
        msg = [],
        secs = v493,
        time = v492}){
        timeOrder((Just thisConsensusTime/488, thisConsensusTime/492 ), (Just thisConsensusSecs/489, thisConsensusSecs/493 ) );
        const v494* = 0;
        checkPay(0, Nothing);
        const v495* = v484 == v491;
        claim(CT_Require)(v495, Just "sender correct");
        view(Nothing).name.is(Just export (Nothing) => {
        return name/485;})
        view(Nothing).symbol.is(Just export (Nothing) => {
        return symbol/486;})
        view(Nothing).tokenURI.is(Just export (Just [v496]) => {
        return uri/487;})
        loopvar {
          v497 = v484,
          v498 = v484,
          v499 = thisConsensusTime/492,
          v500 = thisConsensusTime/488,
          v501 = thisConsensusTime/488,
          v502 = thisConsensusSecs/493,
          v503 = thisConsensusSecs/489,
          v504 = thisConsensusSecs/489,
          v505 = 0};
        invariant{
          const v506* = balance(0)/505;
          const v507* = balance(0)/505 == 0;
          
          return v507; }
        while{
          
          return true; }
        {
          view(Nothing).ownerOf.is(Just export (Just [v508]) => {const v509* = v508 == 0;
          claim(CT_Assume False)(v509, Nothing);
          
          return owner/498;})
          view(Nothing).balanceOf.is(Just export (Just [v510]) => {const v511* = v510 == owner/498;
          const v512* = v511 ? 1 : 0;
          
          return v512;})
          view(Nothing).getApproved.is(Just export (Just [v513]) => {const v514* = v513 == 0;
          claim(CT_Assume False)(v514, Nothing);
          
          return approved/497;})
          view(Nothing).isApprovedForAll.is(Just export (Just [v515, v516]) => {const v517* = owner/498 == v515;
          const v518* = map0[v516];
          const v519* = fromSome(v518, false );
          const v520* = v517 ? v519 : false;
          
          return v520;})
          const v521* = thisConsensusSecs/502;
          const v522* = thisConsensusSecs/502;
          const v523* = UInt.max - thisConsensusSecs/502;
          const v524* = v523 - 5;
          const v525* = v524 >= 0;
          const v526* = null;
          const v527* = thisConsensusSecs/502 + 5;
          const v528* = <Right v527>;
          commit();
          only(Left "safeTransferFrom") {
            const v529* = selfAddress("safeTransferFrom", True, 186 )();
            const v531* = protect<Tuple(Address, Address, UInt)>("safeTransferFrom".interact.in());
            const v532* = v531[0];
            const v533* = v531[1];
            const v534* = v531[2];
            const v536* = v532 == owner/498;
            const v537* = v532 == approved/497;
            const v538* = v536 ? true : v537;
            const v539* = map0[v532];
            const v540* = fromSome(v539, false );
            const v541* = v538 ? true : v540;
            claim(CT_Assume False)(v541, Nothing);
            const v542* = v534 == 0;
            claim(CT_Assume False)(v542, Nothing);
            const v535* = null;
            const v543* = {
              msg = v531};
            const v544* = <safeTransferFrom0_113 v531>;
            const v545* = {
              msg = v544,
              when = true};
            const v530* = null;
             };
          only(Left "transferFrom") {
            const v546* = selfAddress("transferFrom", True, 209 )();
            const v548* = protect<Tuple(Address, Address, UInt)>("transferFrom".interact.in());
            const v549* = v548[0];
            const v550* = v548[1];
            const v551* = v548[2];
            const v553* = v549 == owner/498;
            const v554* = v549 == approved/497;
            const v555* = v553 ? true : v554;
            const v556* = map0[v549];
            const v557* = fromSome(v556, false );
            const v558* = v555 ? true : v557;
            claim(CT_Assume False)(v558, Nothing);
            const v559* = v551 == 0;
            claim(CT_Assume False)(v559, Nothing);
            const v552* = null;
            const v560* = {
              msg = v548};
            const v561* = <transferFrom0_113 v548>;
            const v562* = {
              msg = v561,
              when = true};
            const v547* = null;
             };
          only(Left "approve") {
            const v563* = selfAddress("approve", True, 232 )();
            const v565* = protect<Tuple(Address, UInt)>("approve".interact.in());
            const v566* = v565[0];
            const v567* = v565[1];
            const v569* = v563 == owner/498;
            const v570* = v563 == approved/497;
            const v571* = v569 ? true : v570;
            const v572* = map0[v563];
            const v573* = fromSome(v572, false );
            const v574* = v571 ? true : v573;
            claim(CT_Assume False)(v574, Nothing);
            const v575* = v567 == 0;
            claim(CT_Assume False)(v575, Nothing);
            const v568* = null;
            const v576* = {
              msg = v565};
            const v577* = <approve0_113 v565>;
            const v578* = {
              msg = v577,
              when = true};
            const v564* = null;
             };
          only(Left "setApprovalForAll") {
            const v579* = selfAddress("setApprovalForAll", True, 254 )();
            const v581* = protect<Tuple(Address, Bool)>("setApprovalForAll".interact.in());
            const v582* = v581[0];
            const v583* = v581[1];
            const v585* = v579 == owner/498;
            const v586* = v579 == approved/497;
            const v587* = v585 ? true : v586;
            const v588* = map0[v579];
            const v589* = fromSome(v588, false );
            const v590* = v587 ? true : v589;
            claim(CT_Assume False)(v590, Nothing);
            const v584* = null;
            const v591* = {
              msg = v581};
            const v592* = <setApprovalForAll0_113 v581>;
            const v593* = {
              msg = v592,
              when = true};
            const v580* = null;
             };
          publish(@thisConsensusTime/499)
            .timeout(Right v527, {
              publish(@thisConsensusTime/499)
                .case("Creator").send({
                  isClass = False,
                  msg = [],
                  pay = [0, ],
                  when = true})
                .recv({
                  didSend = v445,
                  from = v964,
                  msg = [],
                  secs = v966,
                  time = v965}){
                  timeOrder((Just thisConsensusTime/499, thisConsensusTime/965 ), (Just thisConsensusSecs/502, thisConsensusSecs/966 ) );
                  const v967* = balance(0)/505;
                  checkPay(0, Nothing);
                  const v968* = v484 == v964;
                  claim(CT_Require)(v968, Just "sender correct");
                  const v969* = [owner/498, approved/497 ];
                  const v970* = v969;
                  {
                    v497 = approved/497,
                    v498 = owner/498,
                    v499 = thisConsensusTime/965,
                    v500 = thisConsensusTime/499,
                    v501 = thisConsensusTime/499,
                    v502 = thisConsensusSecs/966,
                    v503 = thisConsensusSecs/502,
                    v504 = v527,
                    v505 = balance(0)/505}
                  continue; }
                 } )
            .case("approve").send({
              isClass = True,
              msg = [v577],
              pay = [0, ],
              when = true})
            .case("safeTransferFrom").send({
              isClass = True,
              msg = [v544],
              pay = [0, ],
              when = true})
            .case("setApprovalForAll").send({
              isClass = True,
              msg = [v592],
              pay = [0, ],
              when = true})
            .case("transferFrom").send({
              isClass = True,
              msg = [v561],
              pay = [0, ],
              when = true})
            .recv({
              didSend = v338,
              from = v608,
              msg = [v609],
              secs = v611,
              time = v610}){
              timeOrder((Just thisConsensusTime/499, thisConsensusTime/610 ), (Just thisConsensusSecs/502, thisConsensusSecs/611 ) );
              switch (v609) {
                case approve0_113 as v612/True: {
                  const v613* = null;
                  const v614* = null;
                  let v615;
                  const v616* = data_id/612;
                  const v617* = data_id/612[0];
                  const v618* = data_id/612[1];
                  v615 = 0;
                  const v630* = balance(0)/505;
                  checkPay(0, Nothing);
                  const v631* = data_id/612;
                  setApiDetails("approve", [Data({"approve0_113": Tuple(Address, UInt), "safeTransferFrom0_113": Tuple(Address, Address, UInt), "setApprovalForAll0_113": Tuple(Address, Bool), "transferFrom0_113": Tuple(Address, Address, UInt)})], Just approve0_113, AIC_Case );
                  const v632* = data_id/612[0];
                  const v633* = data_id/612[1];
                  const v634* = v608 == owner/498;
                  const v635* = v608 == approved/497;
                  const v636* = v634 ? true : v635;
                  const v637* = map0[v608];
                  const v638* = fromSome(v637, false );
                  const v639* = v636 ? true : v638;
                  claim(CT_Require)(v639, Nothing);
                  const v640* = v633 == 0;
                  claim(CT_Require)(v640, Nothing);
                  const v641* = true;
                  const v642* = emitLog(api("approve"))(v641 );
                  only(Left "approve") {
                    const v643* = selfAddress("approve", True, 356 )();
                    const v645* = didPublish/338;
                    local if didPublish/338 then {
                      protect<Null>("approve".interact.out(data_id/612, v642 ));
                       }
                    else {
                       };
                    const v644* = null;
                     };
                  const v646* = null;
                  emitLog(event(Nothing, Approval))(v608, v632, v633 );
                  const v647* = [owner/498, v632 ];
                  {
                    v497 = v632,
                    v498 = owner/498,
                    v499 = thisConsensusTime/610,
                    v500 = thisConsensusTime/499,
                    v501 = thisConsensusTime/499,
                    v502 = thisConsensusSecs/611,
                    v503 = thisConsensusSecs/502,
                    v504 = v527,
                    v505 = balance(0)/505}
                  continue; }
                case safeTransferFrom0_113 as v700/True: {
                  const v701* = null;
                  const v702* = null;
                  let v703;
                  const v707* = data_id/700;
                  const v708* = data_id/700[0];
                  const v709* = data_id/700[1];
                  const v710* = data_id/700[2];
                  v703 = 0;
                  const v718* = balance(0)/505;
                  checkPay(0, Nothing);
                  const v736* = data_id/700;
                  setApiDetails("safeTransferFrom", [Data({"approve0_113": Tuple(Address, UInt), "safeTransferFrom0_113": Tuple(Address, Address, UInt), "setApprovalForAll0_113": Tuple(Address, Bool), "transferFrom0_113": Tuple(Address, Address, UInt)})], Just safeTransferFrom0_113, AIC_Case );
                  const v737* = data_id/700[0];
                  const v738* = data_id/700[1];
                  const v739* = data_id/700[2];
                  const v740* = v737 == owner/498;
                  const v741* = v737 == approved/497;
                  const v742* = v740 ? true : v741;
                  const v743* = map0[v737];
                  const v744* = fromSome(v743, false );
                  const v745* = v742 ? true : v744;
                  claim(CT_Require)(v745, Nothing);
                  const v746* = v739 == 0;
                  claim(CT_Require)(v746, Nothing);
                  const v747* = true;
                  const v748* = emitLog(api("safeTransferFrom"))(v747 );
                  only(Left "safeTransferFrom") {
                    const v749* = selfAddress("safeTransferFrom", True, 379 )();
                    const v751* = didPublish/338;
                    local if didPublish/338 then {
                      protect<Null>("safeTransferFrom".interact.out(data_id/700, v748 ));
                       }
                    else {
                       };
                    const v750* = null;
                     };
                  const v752* = null;
                  emitLog(event(Nothing, Transfer))(v737, v738, v739 );
                  const v753* = [v738, v738 ];
                  {
                    v497 = v738,
                    v498 = v738,
                    v499 = thisConsensusTime/610,
                    v500 = thisConsensusTime/499,
                    v501 = thisConsensusTime/499,
                    v502 = thisConsensusSecs/611,
                    v503 = thisConsensusSecs/502,
                    v504 = v527,
                    v505 = balance(0)/505}
                  continue; }
                case setApprovalForAll0_113 as v788/True: {
                  const v789* = null;
                  const v790* = null;
                  let v791;
                  const v799* = data_id/788;
                  const v800* = data_id/788[0];
                  const v801* = data_id/788[1];
                  v791 = 0;
                  const v806* = balance(0)/505;
                  checkPay(0, Nothing);
                  const v842* = data_id/788;
                  setApiDetails("setApprovalForAll", [Data({"approve0_113": Tuple(Address, UInt), "safeTransferFrom0_113": Tuple(Address, Address, UInt), "setApprovalForAll0_113": Tuple(Address, Bool), "transferFrom0_113": Tuple(Address, Address, UInt)})], Just setApprovalForAll0_113, AIC_Case );
                  const v843* = data_id/788[0];
                  const v844* = data_id/788[1];
                  const v845* = v608 == owner/498;
                  const v846* = v608 == approved/497;
                  const v847* = v845 ? true : v846;
                  const v848* = map0[v608];
                  const v849* = fromSome(v848, false );
                  const v850* = v847 ? true : v849;
                  claim(CT_Require)(v850, Nothing);
                  const v851* = true;
                  const v852* = emitLog(api("setApprovalForAll"))(v851 );
                  only(Left "setApprovalForAll") {
                    const v853* = selfAddress("setApprovalForAll", True, 399 )();
                    const v855* = didPublish/338;
                    local if didPublish/338 then {
                      protect<Null>("setApprovalForAll".interact.out(data_id/788, v852 ));
                       }
                    else {
                       };
                    const v854* = null;
                     };
                  const v856* = null;
                  map0[v843] = v844;
                  emitLog(event(Nothing, ApprovalForAll))(v608, v843, v844 );
                  const v857* = [owner/498, approved/497 ];
                  {
                    v497 = approved/497,
                    v498 = owner/498,
                    v499 = thisConsensusTime/610,
                    v500 = thisConsensusTime/499,
                    v501 = thisConsensusTime/499,
                    v502 = thisConsensusSecs/611,
                    v503 = thisConsensusSecs/502,
                    v504 = v527,
                    v505 = balance(0)/505}
                  continue; }
                case transferFrom0_113 as v876/True: {
                  const v877* = null;
                  const v878* = null;
                  let v879;
                  const v890* = data_id/876;
                  const v891* = data_id/876[0];
                  const v892* = data_id/876[1];
                  const v893* = data_id/876[2];
                  v879 = 0;
                  const v894* = balance(0)/505;
                  checkPay(0, Nothing);
                  const v946* = data_id/876;
                  setApiDetails("transferFrom", [Data({"approve0_113": Tuple(Address, UInt), "safeTransferFrom0_113": Tuple(Address, Address, UInt), "setApprovalForAll0_113": Tuple(Address, Bool), "transferFrom0_113": Tuple(Address, Address, UInt)})], Just transferFrom0_113, AIC_Case );
                  const v947* = data_id/876[0];
                  const v948* = data_id/876[1];
                  const v949* = data_id/876[2];
                  const v950* = v947 == owner/498;
                  const v951* = v947 == approved/497;
                  const v952* = v950 ? true : v951;
                  const v953* = map0[v947];
                  const v954* = fromSome(v953, false );
                  const v955* = v952 ? true : v954;
                  claim(CT_Require)(v955, Nothing);
                  const v956* = v949 == 0;
                  claim(CT_Require)(v956, Nothing);
                  const v957* = true;
                  const v958* = emitLog(api("transferFrom"))(v957 );
                  only(Left "transferFrom") {
                    const v959* = selfAddress("transferFrom", True, 422 )();
                    const v961* = didPublish/338;
                    local if didPublish/338 then {
                      protect<Null>("transferFrom".interact.out(data_id/876, v958 ));
                       }
                    else {
                       };
                    const v960* = null;
                     };
                  const v962* = null;
                  emitLog(event(Nothing, Transfer))(v947, v948, v949 );
                  const v963* = [v948, v948 ];
                  {
                    v497 = v948,
                    v498 = v948,
                    v499 = thisConsensusTime/610,
                    v500 = thisConsensusTime/499,
                    v501 = thisConsensusTime/499,
                    v502 = thisConsensusSecs/611,
                    v503 = thisConsensusSecs/502,
                    v504 = v527,
                    v505 = balance(0)/505}
                  continue; } } }
             }
        view(Nothing).ownerOf.is(Just export (Just [v971]) => {const v972* = v971 == 0;
        claim(CT_Assume False)(v972, Nothing);
        
        return owner/498;})
        view(Nothing).balanceOf.is(Just export (Just [v973]) => {const v974* = v973 == owner/498;
        const v975* = v974 ? 1 : 0;
        
        return v975;})
        view(Nothing).getApproved.is(Just export (Just [v976]) => {const v977* = v976 == 0;
        claim(CT_Assume False)(v977, Nothing);
        
        return approved/497;})
        view(Nothing).isApprovedForAll.is(Just export (Just [v978, v979]) => {const v980* = owner/498 == v978;
        const v981* = map0[v979];
        const v982* = fromSome(v981, false );
        const v983* = v980 ? v982 : false;
        
        return v983;})
        const v984* = balance(0)/505;
        const v985* = 0 == balance(0)/505;
        claim(CT_Assert)(v985, Just "balance zero at application exit");
        commit();
        exit(); }
       }
  