// Automatically generated with Reach 0.1.8 (d5a45f78)
/* eslint-disable */
export const _version = '0.1.8';
export const _versionHash = '0.1.8 (d5a45f78)';
export const _backendVersion = 8;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  return {
    Approval: [ctc0, ctc0, ctc1],
    ApprovalForAll: [ctc0, ctc0, ctc2],
    Transfer: [ctc0, ctc0, ctc1]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 128));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Data({
    None: ctc5,
    Some: ctc4
    });
  const map0_ctc = ctc6;
  
  
  return {
    infos: {
      balanceOf: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v484, v485, v486, v487] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
            const [v484, v485, v486, v487, v497, v498, v527] = svs;
            return (await ((async (_v510 ) => {
                const v510 = stdlib.protect(ctc0, _v510, null);
              
              const v511 = stdlib.addressEq(v510, v498);
              const v512 = v511 ? stdlib.checkedBigNumberify('./index.rsh:94:33:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:94:37:decimal', stdlib.UInt_max, 0);
              
              return v512;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      getApproved: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v484, v485, v486, v487] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
            const [v484, v485, v486, v487, v497, v498, v527] = svs;
            return (await ((async (_v513 ) => {
                const v513 = stdlib.protect(ctc3, _v513, null);
              
              const v514 = stdlib.eq(v513, stdlib.checkedBigNumberify('./index.rsh:86:20:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v514, {
                at: './index.rsh:98:15:application',
                fs: ['at ./index.rsh:97:35:application call to [unknown function] (defined at: ./index.rsh:97:35:application)'],
                msg: null,
                who: 'Module'
                });
              
              return v497;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      isApprovedForAll: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v484, v485, v486, v487] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
            const [v484, v485, v486, v487, v497, v498, v527] = svs;
            return (await ((async (_v515, _v516 ) => {
                const v515 = stdlib.protect(ctc0, _v515, null);
                const v516 = stdlib.protect(ctc0, _v516, null);
              
              const v517 = stdlib.addressEq(v498, v515);
              const v518 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v516), null);
              const v519 = stdlib.fromSome(v518, false);
              const v520 = v517 ? v519 : false;
              
              return v520;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc4
        },
      name: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v484, v485, v486, v487] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
            const [v484, v485, v486, v487, v497, v498, v527] = svs;
            return (await ((async () => {
              
              
              return v485;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        },
      ownerOf: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v484, v485, v486, v487] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
            const [v484, v485, v486, v487, v497, v498, v527] = svs;
            return (await ((async (_v508 ) => {
                const v508 = stdlib.protect(ctc3, _v508, null);
              
              const v509 = stdlib.eq(v508, stdlib.checkedBigNumberify('./index.rsh:86:20:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v509, {
                at: './index.rsh:89:15:application',
                fs: ['at ./index.rsh:88:31:application call to [unknown function] (defined at: ./index.rsh:88:31:application)'],
                msg: null,
                who: 'Module'
                });
              
              return v498;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      symbol: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v484, v485, v486, v487] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
            const [v484, v485, v486, v487, v497, v498, v527] = svs;
            return (await ((async () => {
              
              
              return v486;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        },
      tokenURI: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v484, v485, v486, v487] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
            const [v484, v485, v486, v487, v497, v498, v527] = svs;
            return (await ((async (_v496 ) => {
                const v496 = stdlib.protect(ctc3, _v496, null);
              
              
              return v487;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc2],
      4: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc0, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 128));
  const ctc5 = stdlib.T_Object({
    name: ctc3,
    symbol: ctc3,
    uri: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_UInt;
  const ctc8 = stdlib.T_Tuple([ctc6, ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc6, ctc6, ctc7]);
  const ctc10 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc11 = stdlib.T_Data({
    approve0_113: ctc8,
    safeTransferFrom0_113: ctc9,
    setApprovalForAll0_113: ctc10,
    transferFrom0_113: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v480 = stdlib.protect(ctc5, await interact.getParams(), {
    at: './index.rsh:64:64:application',
    fs: ['at ./index.rsh:63:15:application call to [unknown function] (defined at: ./index.rsh:63:19:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v481 = v480.name;
  const v482 = v480.symbol;
  const v483 = v480.uri;
  
  const txn1 = await (ctc.sendrecv({
    args: [v481, v482, v483],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:66:11:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc3, ctc3, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:66:11:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v485, v486, v487], secs: v489, time: v488, didSend: v33, from: v484 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:66:11:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v485, v486, v487], secs: v489, time: v488, didSend: v33, from: v484 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v484, v485, v486, v487],
    evt_cnt: 0,
    funcNum: 1,
    lct: v488,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:69:11:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v493, time: v492, didSend: v39, from: v491 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:69:11:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v495 = stdlib.addressEq(v484, v491);
      stdlib.assert(v495, {
        at: './index.rsh:69:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Creator'
        });
      const v497 = v484;
      const v498 = v484;
      const v499 = v492;
      const v502 = v493;
      
      if (await (async () => {
        
        return true;})()) {
        const v527 = stdlib.add(v502, stdlib.checkedBigNumberify('./index.rsh:182:27:decimal', stdlib.UInt_max, 5));
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc6, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v493, time: v492, didSend: v39, from: v491 } = txn2;
  ;
  const v495 = stdlib.addressEq(v484, v491);
  stdlib.assert(v495, {
    at: './index.rsh:69:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  let v497 = v484;
  let v498 = v484;
  let v499 = v492;
  let v502 = v493;
  
  while (await (async () => {
    
    return true;})()) {
    const v527 = stdlib.add(v502, stdlib.checkedBigNumberify('./index.rsh:182:27:decimal', stdlib.UInt_max, 5));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc11],
      timeoutAt: ['secs', v527],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v484, v485, v486, v487, v497, v498, v527],
        evt_cnt: 0,
        funcNum: 4,
        lct: v499,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:183:15:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v966, time: v965, didSend: v445, from: v964 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:183:15:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v968 = stdlib.addressEq(v484, v964);
          stdlib.assert(v968, {
            at: './index.rsh:183:15:dot',
            fs: ['at ./index.rsh:182:34:application call to [unknown function] (defined at: ./index.rsh:182:34:function exp)'],
            msg: 'sender correct',
            who: 'Creator'
            });
          const cv497 = v497;
          const cv498 = v498;
          const cv499 = v965;
          const cv502 = v966;
          
          await (async () => {
            const v497 = cv497;
            const v498 = cv498;
            const v499 = cv499;
            const v502 = cv502;
            
            if (await (async () => {
              
              return true;})()) {
              const v527 = stdlib.add(v502, stdlib.checkedBigNumberify('./index.rsh:182:27:decimal', stdlib.UInt_max, 5));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc6, ctc3, ctc3, ctc4, ctc6, ctc6, ctc7],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v966, time: v965, didSend: v445, from: v964 } = txn4;
      ;
      const v968 = stdlib.addressEq(v484, v964);
      stdlib.assert(v968, {
        at: './index.rsh:183:15:dot',
        fs: ['at ./index.rsh:182:34:application call to [unknown function] (defined at: ./index.rsh:182:34:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv497 = v497;
      const cv498 = v498;
      const cv499 = v965;
      const cv502 = v966;
      
      v497 = cv497;
      v498 = cv498;
      v499 = cv499;
      v502 = cv502;
      
      continue;
      }
    else {
      const {data: [v609], secs: v611, time: v610, didSend: v338, from: v608 } = txn3;
      switch (v609[0]) {
        case 'approve0_113': {
          const v612 = v609[1];
          ;
          undefined;
          const v632 = v612[stdlib.checkedBigNumberify('./index.rsh:144:9:spread', stdlib.UInt_max, 0)];
          const v633 = v612[stdlib.checkedBigNumberify('./index.rsh:144:9:spread', stdlib.UInt_max, 1)];
          const v634 = stdlib.addressEq(v608, v498);
          const v635 = stdlib.addressEq(v608, v497);
          const v636 = v634 ? true : v635;
          const v637 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v608), null);
          const v638 = stdlib.fromSome(v637, false);
          const v639 = v636 ? true : v638;
          stdlib.assert(v639, {
            at: './index.rsh:155:16:application',
            fs: ['at ./index.rsh:154:7:application call to [unknown function] (defined at: ./index.rsh:154:7:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v640 = stdlib.eq(v633, stdlib.checkedBigNumberify('./index.rsh:86:20:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v640, {
            at: './index.rsh:156:16:application',
            fs: ['at ./index.rsh:154:7:application call to [unknown function] (defined at: ./index.rsh:154:7:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v641 = true;
          await txn3.getOutput('approve', 'v641', ctc1, v641);
          null;
          const cv497 = v632;
          const cv498 = v498;
          const cv499 = v610;
          const cv502 = v611;
          
          v497 = cv497;
          v498 = cv498;
          v499 = cv499;
          v502 = cv502;
          
          continue;
          break;
          }
        case 'safeTransferFrom0_113': {
          const v700 = v609[1];
          ;
          undefined;
          const v737 = v700[stdlib.checkedBigNumberify('./index.rsh:106:9:spread', stdlib.UInt_max, 0)];
          const v738 = v700[stdlib.checkedBigNumberify('./index.rsh:106:9:spread', stdlib.UInt_max, 1)];
          const v739 = v700[stdlib.checkedBigNumberify('./index.rsh:106:9:spread', stdlib.UInt_max, 2)];
          const v740 = stdlib.addressEq(v737, v498);
          const v741 = stdlib.addressEq(v737, v497);
          const v742 = v740 ? true : v741;
          const v743 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v737), null);
          const v744 = stdlib.fromSome(v743, false);
          const v745 = v742 ? true : v744;
          stdlib.assert(v745, {
            at: './index.rsh:117:16:application',
            fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:7:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v746 = stdlib.eq(v739, stdlib.checkedBigNumberify('./index.rsh:86:20:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v746, {
            at: './index.rsh:118:16:application',
            fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:7:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v747 = true;
          await txn3.getOutput('safeTransferFrom', 'v747', ctc1, v747);
          null;
          const cv497 = v738;
          const cv498 = v738;
          const cv499 = v610;
          const cv502 = v611;
          
          v497 = cv497;
          v498 = cv498;
          v499 = cv499;
          v502 = cv502;
          
          continue;
          break;
          }
        case 'setApprovalForAll0_113': {
          const v788 = v609[1];
          ;
          undefined;
          const v843 = v788[stdlib.checkedBigNumberify('./index.rsh:163:9:spread', stdlib.UInt_max, 0)];
          const v844 = v788[stdlib.checkedBigNumberify('./index.rsh:163:9:spread', stdlib.UInt_max, 1)];
          const v845 = stdlib.addressEq(v608, v498);
          const v846 = stdlib.addressEq(v608, v497);
          const v847 = v845 ? true : v846;
          const v848 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v608), null);
          const v849 = stdlib.fromSome(v848, false);
          const v850 = v847 ? true : v849;
          stdlib.assert(v850, {
            at: './index.rsh:173:16:application',
            fs: ['at ./index.rsh:172:7:application call to [unknown function] (defined at: ./index.rsh:172:7:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v851 = true;
          await txn3.getOutput('setApprovalForAll', 'v851', ctc1, v851);
          await stdlib.mapSet(map0, v843, v844);
          null;
          const cv497 = v497;
          const cv498 = v498;
          const cv499 = v610;
          const cv502 = v611;
          
          v497 = cv497;
          v498 = cv498;
          v499 = cv499;
          v502 = cv502;
          
          continue;
          break;
          }
        case 'transferFrom0_113': {
          const v876 = v609[1];
          ;
          undefined;
          const v947 = v876[stdlib.checkedBigNumberify('./index.rsh:125:9:spread', stdlib.UInt_max, 0)];
          const v948 = v876[stdlib.checkedBigNumberify('./index.rsh:125:9:spread', stdlib.UInt_max, 1)];
          const v949 = v876[stdlib.checkedBigNumberify('./index.rsh:125:9:spread', stdlib.UInt_max, 2)];
          const v950 = stdlib.addressEq(v947, v498);
          const v951 = stdlib.addressEq(v947, v497);
          const v952 = v950 ? true : v951;
          const v953 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v947), null);
          const v954 = stdlib.fromSome(v953, false);
          const v955 = v952 ? true : v954;
          stdlib.assert(v955, {
            at: './index.rsh:136:16:application',
            fs: ['at ./index.rsh:135:7:application call to [unknown function] (defined at: ./index.rsh:135:7:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v956 = stdlib.eq(v949, stdlib.checkedBigNumberify('./index.rsh:86:20:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v956, {
            at: './index.rsh:137:16:application',
            fs: ['at ./index.rsh:135:7:application call to [unknown function] (defined at: ./index.rsh:135:7:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v957 = true;
          await txn3.getOutput('transferFrom', 'v957', ctc1, v957);
          null;
          const cv497 = v948;
          const cv498 = v948;
          const cv499 = v610;
          const cv502 = v611;
          
          v497 = cv497;
          v498 = cv498;
          v499 = cv499;
          v502 = cv502;
          
          continue;
          break;
          }
        }}
    
    }
  return;
  
  
  
  
  };
export async function approve(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for approve expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for approve expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 128));
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Tuple([ctc3, ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3, ctc6]);
  const ctc9 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc10 = stdlib.T_Data({
    approve0_113: ctc7,
    safeTransferFrom0_113: ctc8,
    setApprovalForAll0_113: ctc9,
    transferFrom0_113: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v484, v485, v486, v487, v497, v498, v527] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc3, ctc4, ctc4, ctc5, ctc3, ctc3, ctc6]);
  const v563 = ctc.selfAddress();
  const v565 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:147:7:application call to [unknown function] (defined at: ./index.rsh:147:7:function exp)', 'at ./index.rsh:78:43:application call to "runapprove0_113" (defined at: ./index.rsh:144:9:function exp)', 'at ./index.rsh:78:43:application call to [unknown function] (defined at: ./index.rsh:78:43:function exp)'],
    msg: 'in',
    who: 'approve'
    });
  const v567 = v565[stdlib.checkedBigNumberify('./index.rsh:144:9:spread', stdlib.UInt_max, 1)];
  const v569 = stdlib.addressEq(v563, v498);
  const v570 = stdlib.addressEq(v563, v497);
  const v571 = v569 ? true : v570;
  const v572 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v563), null);
  const v573 = stdlib.fromSome(v572, false);
  const v574 = v571 ? true : v573;
  stdlib.assert(v574, {
    at: './index.rsh:148:15:application',
    fs: ['at ./index.rsh:147:7:application call to [unknown function] (defined at: ./index.rsh:147:21:function exp)', 'at ./index.rsh:147:7:application call to [unknown function] (defined at: ./index.rsh:147:7:function exp)', 'at ./index.rsh:78:43:application call to "runapprove0_113" (defined at: ./index.rsh:144:9:function exp)', 'at ./index.rsh:78:43:application call to [unknown function] (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'approve'
    });
  const v575 = stdlib.eq(v567, stdlib.checkedBigNumberify('./index.rsh:86:20:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v575, {
    at: './index.rsh:149:15:application',
    fs: ['at ./index.rsh:147:7:application call to [unknown function] (defined at: ./index.rsh:147:21:function exp)', 'at ./index.rsh:147:7:application call to [unknown function] (defined at: ./index.rsh:147:7:function exp)', 'at ./index.rsh:78:43:application call to "runapprove0_113" (defined at: ./index.rsh:144:9:function exp)', 'at ./index.rsh:78:43:application call to [unknown function] (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'approve'
    });
  const v577 = ['approve0_113', v565];
  
  const txn1 = await (ctc.sendrecv({
    args: [v484, v485, v486, v487, v497, v498, v527, v577],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:152:18:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v609], secs: v611, time: v610, didSend: v338, from: v608 } = txn1;
      
      switch (v609[0]) {
        case 'approve0_113': {
          const v612 = v609[1];
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:152:18:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          undefined;
          const v632 = v612[stdlib.checkedBigNumberify('./index.rsh:144:9:spread', stdlib.UInt_max, 0)];
          const v633 = v612[stdlib.checkedBigNumberify('./index.rsh:144:9:spread', stdlib.UInt_max, 1)];
          const v634 = stdlib.addressEq(v608, v498);
          const v635 = stdlib.addressEq(v608, v497);
          const v636 = v634 ? true : v635;
          const v637 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v608), null);
          const v638 = stdlib.fromSome(v637, false);
          const v639 = v636 ? true : v638;
          stdlib.assert(v639, {
            at: './index.rsh:155:16:application',
            fs: ['at ./index.rsh:154:7:application call to [unknown function] (defined at: ./index.rsh:154:7:function exp)'],
            msg: null,
            who: 'approve'
            });
          const v640 = stdlib.eq(v633, stdlib.checkedBigNumberify('./index.rsh:86:20:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v640, {
            at: './index.rsh:156:16:application',
            fs: ['at ./index.rsh:154:7:application call to [unknown function] (defined at: ./index.rsh:154:7:function exp)'],
            msg: null,
            who: 'approve'
            });
          const v641 = true;
          const v642 = await txn1.getOutput('approve', 'v641', ctc1, v641);
          
          null;
          const v1571 = v632;
          const v1572 = v498;
          const v1575 = stdlib.add(v611, stdlib.checkedBigNumberify('./index.rsh:182:27:decimal', stdlib.UInt_max, 5));
          sim_r.isHalt = false;
          
          break;
          }
        case 'safeTransferFrom0_113': {
          const v700 = v609[1];
          
          break;
          }
        case 'setApprovalForAll0_113': {
          const v788 = v609[1];
          
          break;
          }
        case 'transferFrom0_113': {
          const v876 = v609[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc3, ctc4, ctc4, ctc5, ctc3, ctc3, ctc6, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v609], secs: v611, time: v610, didSend: v338, from: v608 } = txn1;
  switch (v609[0]) {
    case 'approve0_113': {
      const v612 = v609[1];
      ;
      undefined;
      const v632 = v612[stdlib.checkedBigNumberify('./index.rsh:144:9:spread', stdlib.UInt_max, 0)];
      const v633 = v612[stdlib.checkedBigNumberify('./index.rsh:144:9:spread', stdlib.UInt_max, 1)];
      const v634 = stdlib.addressEq(v608, v498);
      const v635 = stdlib.addressEq(v608, v497);
      const v636 = v634 ? true : v635;
      const v637 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v608), null);
      const v638 = stdlib.fromSome(v637, false);
      const v639 = v636 ? true : v638;
      stdlib.assert(v639, {
        at: './index.rsh:155:16:application',
        fs: ['at ./index.rsh:154:7:application call to [unknown function] (defined at: ./index.rsh:154:7:function exp)'],
        msg: null,
        who: 'approve'
        });
      const v640 = stdlib.eq(v633, stdlib.checkedBigNumberify('./index.rsh:86:20:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v640, {
        at: './index.rsh:156:16:application',
        fs: ['at ./index.rsh:154:7:application call to [unknown function] (defined at: ./index.rsh:154:7:function exp)'],
        msg: null,
        who: 'approve'
        });
      const v641 = true;
      const v642 = await txn1.getOutput('approve', 'v641', ctc1, v641);
      if (v338) {
        stdlib.protect(ctc0, await interact.out(v612, v642), {
          at: './index.rsh:145:7:application',
          fs: ['at ./index.rsh:145:7:application call to [unknown function] (defined at: ./index.rsh:145:7:function exp)', 'at ./index.rsh:157:16:application call to "respond" (defined at: ./index.rsh:154:7:function exp)', 'at ./index.rsh:154:7:application call to [unknown function] (defined at: ./index.rsh:154:7:function exp)'],
          msg: 'out',
          who: 'approve'
          });
        }
      else {
        }
      
      null;
      const v1571 = v632;
      const v1572 = v498;
      const v1575 = stdlib.add(v611, stdlib.checkedBigNumberify('./index.rsh:182:27:decimal', stdlib.UInt_max, 5));
      return;
      
      break;
      }
    case 'safeTransferFrom0_113': {
      const v700 = v609[1];
      return;
      break;
      }
    case 'setApprovalForAll0_113': {
      const v788 = v609[1];
      return;
      break;
      }
    case 'transferFrom0_113': {
      const v876 = v609[1];
      return;
      break;
      }
    }
  
  
  };
export async function safeTransferFrom(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for safeTransferFrom expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for safeTransferFrom expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 128));
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Tuple([ctc3, ctc3, ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc3, ctc6]);
  const ctc9 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc10 = stdlib.T_Data({
    approve0_113: ctc8,
    safeTransferFrom0_113: ctc7,
    setApprovalForAll0_113: ctc9,
    transferFrom0_113: ctc7
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v484, v485, v486, v487, v497, v498, v527] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc3, ctc4, ctc4, ctc5, ctc3, ctc3, ctc6]);
  const v531 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:109:7:application call to [unknown function] (defined at: ./index.rsh:109:7:function exp)', 'at ./index.rsh:78:43:application call to "runsafeTransferFrom0_113" (defined at: ./index.rsh:106:9:function exp)', 'at ./index.rsh:78:43:application call to [unknown function] (defined at: ./index.rsh:78:43:function exp)'],
    msg: 'in',
    who: 'safeTransferFrom'
    });
  const v532 = v531[stdlib.checkedBigNumberify('./index.rsh:106:9:spread', stdlib.UInt_max, 0)];
  const v534 = v531[stdlib.checkedBigNumberify('./index.rsh:106:9:spread', stdlib.UInt_max, 2)];
  const v536 = stdlib.addressEq(v532, v498);
  const v537 = stdlib.addressEq(v532, v497);
  const v538 = v536 ? true : v537;
  const v539 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v532), null);
  const v540 = stdlib.fromSome(v539, false);
  const v541 = v538 ? true : v540;
  stdlib.assert(v541, {
    at: './index.rsh:110:15:application',
    fs: ['at ./index.rsh:109:7:application call to [unknown function] (defined at: ./index.rsh:109:29:function exp)', 'at ./index.rsh:109:7:application call to [unknown function] (defined at: ./index.rsh:109:7:function exp)', 'at ./index.rsh:78:43:application call to "runsafeTransferFrom0_113" (defined at: ./index.rsh:106:9:function exp)', 'at ./index.rsh:78:43:application call to [unknown function] (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'safeTransferFrom'
    });
  const v542 = stdlib.eq(v534, stdlib.checkedBigNumberify('./index.rsh:86:20:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v542, {
    at: './index.rsh:111:15:application',
    fs: ['at ./index.rsh:109:7:application call to [unknown function] (defined at: ./index.rsh:109:29:function exp)', 'at ./index.rsh:109:7:application call to [unknown function] (defined at: ./index.rsh:109:7:function exp)', 'at ./index.rsh:78:43:application call to "runsafeTransferFrom0_113" (defined at: ./index.rsh:106:9:function exp)', 'at ./index.rsh:78:43:application call to [unknown function] (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'safeTransferFrom'
    });
  const v544 = ['safeTransferFrom0_113', v531];
  
  const txn1 = await (ctc.sendrecv({
    args: [v484, v485, v486, v487, v497, v498, v527, v544],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:114:21:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v609], secs: v611, time: v610, didSend: v338, from: v608 } = txn1;
      
      switch (v609[0]) {
        case 'approve0_113': {
          const v612 = v609[1];
          
          break;
          }
        case 'safeTransferFrom0_113': {
          const v700 = v609[1];
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:152:18:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          undefined;
          const v737 = v700[stdlib.checkedBigNumberify('./index.rsh:106:9:spread', stdlib.UInt_max, 0)];
          const v738 = v700[stdlib.checkedBigNumberify('./index.rsh:106:9:spread', stdlib.UInt_max, 1)];
          const v739 = v700[stdlib.checkedBigNumberify('./index.rsh:106:9:spread', stdlib.UInt_max, 2)];
          const v740 = stdlib.addressEq(v737, v498);
          const v741 = stdlib.addressEq(v737, v497);
          const v742 = v740 ? true : v741;
          const v743 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v737), null);
          const v744 = stdlib.fromSome(v743, false);
          const v745 = v742 ? true : v744;
          stdlib.assert(v745, {
            at: './index.rsh:117:16:application',
            fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:7:function exp)'],
            msg: null,
            who: 'safeTransferFrom'
            });
          const v746 = stdlib.eq(v739, stdlib.checkedBigNumberify('./index.rsh:86:20:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v746, {
            at: './index.rsh:118:16:application',
            fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:7:function exp)'],
            msg: null,
            who: 'safeTransferFrom'
            });
          const v747 = true;
          const v748 = await txn1.getOutput('safeTransferFrom', 'v747', ctc1, v747);
          
          null;
          const v1596 = v738;
          const v1597 = v738;
          const v1600 = stdlib.add(v611, stdlib.checkedBigNumberify('./index.rsh:182:27:decimal', stdlib.UInt_max, 5));
          sim_r.isHalt = false;
          
          break;
          }
        case 'setApprovalForAll0_113': {
          const v788 = v609[1];
          
          break;
          }
        case 'transferFrom0_113': {
          const v876 = v609[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc3, ctc4, ctc4, ctc5, ctc3, ctc3, ctc6, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v609], secs: v611, time: v610, didSend: v338, from: v608 } = txn1;
  switch (v609[0]) {
    case 'approve0_113': {
      const v612 = v609[1];
      return;
      break;
      }
    case 'safeTransferFrom0_113': {
      const v700 = v609[1];
      ;
      undefined;
      const v737 = v700[stdlib.checkedBigNumberify('./index.rsh:106:9:spread', stdlib.UInt_max, 0)];
      const v738 = v700[stdlib.checkedBigNumberify('./index.rsh:106:9:spread', stdlib.UInt_max, 1)];
      const v739 = v700[stdlib.checkedBigNumberify('./index.rsh:106:9:spread', stdlib.UInt_max, 2)];
      const v740 = stdlib.addressEq(v737, v498);
      const v741 = stdlib.addressEq(v737, v497);
      const v742 = v740 ? true : v741;
      const v743 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v737), null);
      const v744 = stdlib.fromSome(v743, false);
      const v745 = v742 ? true : v744;
      stdlib.assert(v745, {
        at: './index.rsh:117:16:application',
        fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:7:function exp)'],
        msg: null,
        who: 'safeTransferFrom'
        });
      const v746 = stdlib.eq(v739, stdlib.checkedBigNumberify('./index.rsh:86:20:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v746, {
        at: './index.rsh:118:16:application',
        fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:7:function exp)'],
        msg: null,
        who: 'safeTransferFrom'
        });
      const v747 = true;
      const v748 = await txn1.getOutput('safeTransferFrom', 'v747', ctc1, v747);
      if (v338) {
        stdlib.protect(ctc0, await interact.out(v700, v748), {
          at: './index.rsh:107:7:application',
          fs: ['at ./index.rsh:107:7:application call to [unknown function] (defined at: ./index.rsh:107:7:function exp)', 'at ./index.rsh:119:16:application call to "respond" (defined at: ./index.rsh:116:7:function exp)', 'at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:7:function exp)'],
          msg: 'out',
          who: 'safeTransferFrom'
          });
        }
      else {
        }
      
      null;
      const v1596 = v738;
      const v1597 = v738;
      const v1600 = stdlib.add(v611, stdlib.checkedBigNumberify('./index.rsh:182:27:decimal', stdlib.UInt_max, 5));
      return;
      
      break;
      }
    case 'setApprovalForAll0_113': {
      const v788 = v609[1];
      return;
      break;
      }
    case 'transferFrom0_113': {
      const v876 = v609[1];
      return;
      break;
      }
    }
  
  
  };
export async function setApprovalForAll(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for setApprovalForAll expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for setApprovalForAll expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 128));
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc3, ctc6]);
  const ctc9 = stdlib.T_Tuple([ctc3, ctc3, ctc6]);
  const ctc10 = stdlib.T_Data({
    approve0_113: ctc8,
    safeTransferFrom0_113: ctc9,
    setApprovalForAll0_113: ctc7,
    transferFrom0_113: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v484, v485, v486, v487, v497, v498, v527] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc3, ctc4, ctc4, ctc5, ctc3, ctc3, ctc6]);
  const v579 = ctc.selfAddress();
  const v581 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:166:7:application call to [unknown function] (defined at: ./index.rsh:166:7:function exp)', 'at ./index.rsh:78:43:application call to "runsetApprovalForAll0_113" (defined at: ./index.rsh:163:9:function exp)', 'at ./index.rsh:78:43:application call to [unknown function] (defined at: ./index.rsh:78:43:function exp)'],
    msg: 'in',
    who: 'setApprovalForAll'
    });
  const v585 = stdlib.addressEq(v579, v498);
  const v586 = stdlib.addressEq(v579, v497);
  const v587 = v585 ? true : v586;
  const v588 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v579), null);
  const v589 = stdlib.fromSome(v588, false);
  const v590 = v587 ? true : v589;
  stdlib.assert(v590, {
    at: './index.rsh:167:15:application',
    fs: ['at ./index.rsh:166:7:application call to [unknown function] (defined at: ./index.rsh:166:15:function exp)', 'at ./index.rsh:166:7:application call to [unknown function] (defined at: ./index.rsh:166:7:function exp)', 'at ./index.rsh:78:43:application call to "runsetApprovalForAll0_113" (defined at: ./index.rsh:163:9:function exp)', 'at ./index.rsh:78:43:application call to [unknown function] (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'setApprovalForAll'
    });
  const v592 = ['setApprovalForAll0_113', v581];
  
  const txn1 = await (ctc.sendrecv({
    args: [v484, v485, v486, v487, v497, v498, v527, v592],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:170:18:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v609], secs: v611, time: v610, didSend: v338, from: v608 } = txn1;
      
      switch (v609[0]) {
        case 'approve0_113': {
          const v612 = v609[1];
          
          break;
          }
        case 'safeTransferFrom0_113': {
          const v700 = v609[1];
          
          break;
          }
        case 'setApprovalForAll0_113': {
          const v788 = v609[1];
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:152:18:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          undefined;
          const v843 = v788[stdlib.checkedBigNumberify('./index.rsh:163:9:spread', stdlib.UInt_max, 0)];
          const v844 = v788[stdlib.checkedBigNumberify('./index.rsh:163:9:spread', stdlib.UInt_max, 1)];
          const v845 = stdlib.addressEq(v608, v498);
          const v846 = stdlib.addressEq(v608, v497);
          const v847 = v845 ? true : v846;
          const v848 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v608), null);
          const v849 = stdlib.fromSome(v848, false);
          const v850 = v847 ? true : v849;
          stdlib.assert(v850, {
            at: './index.rsh:173:16:application',
            fs: ['at ./index.rsh:172:7:application call to [unknown function] (defined at: ./index.rsh:172:7:function exp)'],
            msg: null,
            who: 'setApprovalForAll'
            });
          const v851 = true;
          const v852 = await txn1.getOutput('setApprovalForAll', 'v851', ctc1, v851);
          
          await stdlib.simMapSet(sim_r, 0, v843, v844);
          null;
          const v1621 = v497;
          const v1622 = v498;
          const v1625 = stdlib.add(v611, stdlib.checkedBigNumberify('./index.rsh:182:27:decimal', stdlib.UInt_max, 5));
          sim_r.isHalt = false;
          
          break;
          }
        case 'transferFrom0_113': {
          const v876 = v609[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc3, ctc4, ctc4, ctc5, ctc3, ctc3, ctc6, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v609], secs: v611, time: v610, didSend: v338, from: v608 } = txn1;
  switch (v609[0]) {
    case 'approve0_113': {
      const v612 = v609[1];
      return;
      break;
      }
    case 'safeTransferFrom0_113': {
      const v700 = v609[1];
      return;
      break;
      }
    case 'setApprovalForAll0_113': {
      const v788 = v609[1];
      ;
      undefined;
      const v843 = v788[stdlib.checkedBigNumberify('./index.rsh:163:9:spread', stdlib.UInt_max, 0)];
      const v844 = v788[stdlib.checkedBigNumberify('./index.rsh:163:9:spread', stdlib.UInt_max, 1)];
      const v845 = stdlib.addressEq(v608, v498);
      const v846 = stdlib.addressEq(v608, v497);
      const v847 = v845 ? true : v846;
      const v848 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v608), null);
      const v849 = stdlib.fromSome(v848, false);
      const v850 = v847 ? true : v849;
      stdlib.assert(v850, {
        at: './index.rsh:173:16:application',
        fs: ['at ./index.rsh:172:7:application call to [unknown function] (defined at: ./index.rsh:172:7:function exp)'],
        msg: null,
        who: 'setApprovalForAll'
        });
      const v851 = true;
      const v852 = await txn1.getOutput('setApprovalForAll', 'v851', ctc1, v851);
      if (v338) {
        stdlib.protect(ctc0, await interact.out(v788, v852), {
          at: './index.rsh:164:7:application',
          fs: ['at ./index.rsh:164:7:application call to [unknown function] (defined at: ./index.rsh:164:7:function exp)', 'at ./index.rsh:174:16:application call to "respond" (defined at: ./index.rsh:172:7:function exp)', 'at ./index.rsh:172:7:application call to [unknown function] (defined at: ./index.rsh:172:7:function exp)'],
          msg: 'out',
          who: 'setApprovalForAll'
          });
        }
      else {
        }
      
      await stdlib.mapSet(map0, v843, v844);
      null;
      const v1621 = v497;
      const v1622 = v498;
      const v1625 = stdlib.add(v611, stdlib.checkedBigNumberify('./index.rsh:182:27:decimal', stdlib.UInt_max, 5));
      return;
      
      break;
      }
    case 'transferFrom0_113': {
      const v876 = v609[1];
      return;
      break;
      }
    }
  
  
  };
export async function transferFrom(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for transferFrom expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for transferFrom expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 128));
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Tuple([ctc3, ctc3, ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc3, ctc6]);
  const ctc9 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc10 = stdlib.T_Data({
    approve0_113: ctc8,
    safeTransferFrom0_113: ctc7,
    setApprovalForAll0_113: ctc9,
    transferFrom0_113: ctc7
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v484, v485, v486, v487, v497, v498, v527] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc3, ctc4, ctc4, ctc5, ctc3, ctc3, ctc6]);
  const v548 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:128:7:application call to [unknown function] (defined at: ./index.rsh:128:7:function exp)', 'at ./index.rsh:78:43:application call to "runtransferFrom0_113" (defined at: ./index.rsh:125:9:function exp)', 'at ./index.rsh:78:43:application call to [unknown function] (defined at: ./index.rsh:78:43:function exp)'],
    msg: 'in',
    who: 'transferFrom'
    });
  const v549 = v548[stdlib.checkedBigNumberify('./index.rsh:125:9:spread', stdlib.UInt_max, 0)];
  const v551 = v548[stdlib.checkedBigNumberify('./index.rsh:125:9:spread', stdlib.UInt_max, 2)];
  const v553 = stdlib.addressEq(v549, v498);
  const v554 = stdlib.addressEq(v549, v497);
  const v555 = v553 ? true : v554;
  const v556 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v549), null);
  const v557 = stdlib.fromSome(v556, false);
  const v558 = v555 ? true : v557;
  stdlib.assert(v558, {
    at: './index.rsh:129:15:application',
    fs: ['at ./index.rsh:128:7:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)', 'at ./index.rsh:128:7:application call to [unknown function] (defined at: ./index.rsh:128:7:function exp)', 'at ./index.rsh:78:43:application call to "runtransferFrom0_113" (defined at: ./index.rsh:125:9:function exp)', 'at ./index.rsh:78:43:application call to [unknown function] (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'transferFrom'
    });
  const v559 = stdlib.eq(v551, stdlib.checkedBigNumberify('./index.rsh:86:20:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v559, {
    at: './index.rsh:130:15:application',
    fs: ['at ./index.rsh:128:7:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)', 'at ./index.rsh:128:7:application call to [unknown function] (defined at: ./index.rsh:128:7:function exp)', 'at ./index.rsh:78:43:application call to "runtransferFrom0_113" (defined at: ./index.rsh:125:9:function exp)', 'at ./index.rsh:78:43:application call to [unknown function] (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'transferFrom'
    });
  const v561 = ['transferFrom0_113', v548];
  
  const txn1 = await (ctc.sendrecv({
    args: [v484, v485, v486, v487, v497, v498, v527, v561],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:133:21:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v609], secs: v611, time: v610, didSend: v338, from: v608 } = txn1;
      
      switch (v609[0]) {
        case 'approve0_113': {
          const v612 = v609[1];
          
          break;
          }
        case 'safeTransferFrom0_113': {
          const v700 = v609[1];
          
          break;
          }
        case 'setApprovalForAll0_113': {
          const v788 = v609[1];
          
          break;
          }
        case 'transferFrom0_113': {
          const v876 = v609[1];
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:152:18:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          undefined;
          const v947 = v876[stdlib.checkedBigNumberify('./index.rsh:125:9:spread', stdlib.UInt_max, 0)];
          const v948 = v876[stdlib.checkedBigNumberify('./index.rsh:125:9:spread', stdlib.UInt_max, 1)];
          const v949 = v876[stdlib.checkedBigNumberify('./index.rsh:125:9:spread', stdlib.UInt_max, 2)];
          const v950 = stdlib.addressEq(v947, v498);
          const v951 = stdlib.addressEq(v947, v497);
          const v952 = v950 ? true : v951;
          const v953 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v947), null);
          const v954 = stdlib.fromSome(v953, false);
          const v955 = v952 ? true : v954;
          stdlib.assert(v955, {
            at: './index.rsh:136:16:application',
            fs: ['at ./index.rsh:135:7:application call to [unknown function] (defined at: ./index.rsh:135:7:function exp)'],
            msg: null,
            who: 'transferFrom'
            });
          const v956 = stdlib.eq(v949, stdlib.checkedBigNumberify('./index.rsh:86:20:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v956, {
            at: './index.rsh:137:16:application',
            fs: ['at ./index.rsh:135:7:application call to [unknown function] (defined at: ./index.rsh:135:7:function exp)'],
            msg: null,
            who: 'transferFrom'
            });
          const v957 = true;
          const v958 = await txn1.getOutput('transferFrom', 'v957', ctc1, v957);
          
          null;
          const v1646 = v948;
          const v1647 = v948;
          const v1650 = stdlib.add(v611, stdlib.checkedBigNumberify('./index.rsh:182:27:decimal', stdlib.UInt_max, 5));
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc3, ctc4, ctc4, ctc5, ctc3, ctc3, ctc6, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v609], secs: v611, time: v610, didSend: v338, from: v608 } = txn1;
  switch (v609[0]) {
    case 'approve0_113': {
      const v612 = v609[1];
      return;
      break;
      }
    case 'safeTransferFrom0_113': {
      const v700 = v609[1];
      return;
      break;
      }
    case 'setApprovalForAll0_113': {
      const v788 = v609[1];
      return;
      break;
      }
    case 'transferFrom0_113': {
      const v876 = v609[1];
      ;
      undefined;
      const v947 = v876[stdlib.checkedBigNumberify('./index.rsh:125:9:spread', stdlib.UInt_max, 0)];
      const v948 = v876[stdlib.checkedBigNumberify('./index.rsh:125:9:spread', stdlib.UInt_max, 1)];
      const v949 = v876[stdlib.checkedBigNumberify('./index.rsh:125:9:spread', stdlib.UInt_max, 2)];
      const v950 = stdlib.addressEq(v947, v498);
      const v951 = stdlib.addressEq(v947, v497);
      const v952 = v950 ? true : v951;
      const v953 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v947), null);
      const v954 = stdlib.fromSome(v953, false);
      const v955 = v952 ? true : v954;
      stdlib.assert(v955, {
        at: './index.rsh:136:16:application',
        fs: ['at ./index.rsh:135:7:application call to [unknown function] (defined at: ./index.rsh:135:7:function exp)'],
        msg: null,
        who: 'transferFrom'
        });
      const v956 = stdlib.eq(v949, stdlib.checkedBigNumberify('./index.rsh:86:20:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v956, {
        at: './index.rsh:137:16:application',
        fs: ['at ./index.rsh:135:7:application call to [unknown function] (defined at: ./index.rsh:135:7:function exp)'],
        msg: null,
        who: 'transferFrom'
        });
      const v957 = true;
      const v958 = await txn1.getOutput('transferFrom', 'v957', ctc1, v957);
      if (v338) {
        stdlib.protect(ctc0, await interact.out(v876, v958), {
          at: './index.rsh:126:7:application',
          fs: ['at ./index.rsh:126:7:application call to [unknown function] (defined at: ./index.rsh:126:7:function exp)', 'at ./index.rsh:138:16:application call to "respond" (defined at: ./index.rsh:135:7:function exp)', 'at ./index.rsh:135:7:application call to [unknown function] (defined at: ./index.rsh:135:7:function exp)'],
          msg: 'out',
          who: 'transferFrom'
          });
        }
      else {
        }
      
      null;
      const v1646 = v948;
      const v1647 = v948;
      const v1650 = stdlib.add(v611, stdlib.checkedBigNumberify('./index.rsh:182:27:decimal', stdlib.UInt_max, 5));
      return;
      
      break;
      }
    }
  
  
  };
const _ALGO = {
  ABI: {
    sigs: [`approve(address,uint64)byte`, `safeTransferFrom(address,address,uint64)byte`, `setApprovalForAll(address,byte)byte`, `transferFrom(address,address,uint64)byte`]
    },
  appApproval: `BSANAQACBAgDIEC9vImvCOK2lJ8O04OVsQSAAqACJgQAAQEBAgSx4TSsIzUAMRhBBcIoZEkjWzUBIQRbNQIxGSISQQALMQAkryKvTGZCBZM2GgAXSUEAiSM1AyI1BUkhCAxAADtJIQkMQAAaIQkSRDYaATYaAlA1/yo0/1CBJ69QNQRCAQAhCBJENhoBNhoCUDYaA1A1/yk0/1A1BEIA5kkhCgxAABohChJENhoBNhoCUDX/Iq80/1AyA1A1BEIAxYGVsoDvARJENhoBNhoCUDYaA1A1/4ABAzT/UDUEQgClNhoBFzYaAhc1AzYaAzUESSQMQANWSSEFDEADTkklDEAAgiUSRCU0ARJENANJIxJMNAISEUQir2QpZFAqZFBJVwAgNf9JVyAgNf5JV0AgNf1JV2CANfxJV+AgNftJIQshBlg1+kkhDCEEWBc1+Ug0BEkVIxJESIAEkSc087AyBzT5D0Q0/zEAEkQ0/zT+UDT9UDT8UDT7NPpQMgYWUDIHFlBCA9JIJTQBEkQ0A0kjEkw0AhIRRCKvZClkUCpkUElXACA1/0lXICA1/klXQCA1/UlXYIA1/ElX4CA1+0khCyEGWDX6SSEMIQRYFzX5SDQESRWBSRJESTX4SIAEPvziwTT4ULAyBzT5DEQ0+Ek19yNVSSQMQAEySSEFDEAAkSEFEkQ091cBSDX2NPZXACA19TT2VyAgNfQ09iEHWzXzNPU0+hI09TT7EhEjNPVJMRhhQAAGSCSvQgADIq9iSTXyVwEBFzTyI1VNEUQ08yMSRIAIAAAAAAAAA70iFlEHCFCwIkkWUQcINQYrNPVQNPRQNPMWULAoNP80/lA0/VA0/FA09ElQMgYWUDIHFlBCAsdINPdXASE19jT2VwAgNfU09lcgARc19DEANPoSMQA0+xIRIzEASTEYYUAABkgkr0IAAyKvYkk181cBARc08yNVTRFEgAgAAAAAAAADUyIWUQcIULAiSRZRBwg1BjT1KTT0FlEHCFAir0xmgATwXkTtMQBQNPVQNPQWUQcIULAoNP80/lA0/VA0/FA0+zT6UDIGFlAyBxZQQgItSSIMQACOSDT3VwFINfY09lcAIDX1NPZXICA19DT2IQdbNfM09TT6EjT1NPsSESM09UkxGGFAAAZIJK9CAAMir2JJNfJXAQEXNPIjVU0RRDTzIxJEgAgAAAAAAAAC6yIWUQcIULAiSRZRBwg1Bis09VA09FA08xZQsCg0/zT+UDT9UDT8UDT0SVAyBhZQMgcWUEIBmUg091cBKDX2NPZXACA19TT2IQZbNfQxADT6EjEANPsSESMxAEkxGGFAAAZIJK9CAAMir2JJNfNXAQEXNPMjVU0RRDT0IxJEgAgAAAAAAAACgSIWUQcIULAiSRZRBwg1BoAEsfXz4jEAUDT1UDT0FlCwKDT/NP5QNP1QNPxQNPU0+lAyBhZQMgcWUEIBDEhJIgxAAF9IIjQBEkQ0A0kjEkw0AhIRRCKvZClkUElXACA1/0lXICA1/klXQCA1/UlXYIA1/Eg0BEkVIxJESIAEmouRdLA0/zEAEkQ0/zT+UDT9UDT8UDT/SVAyBhZQMgcWUEIApkgjNAESRDQDSSMSTDQCEhFEKEg0BEkVgcABEkRJVwAgNf9JVyAgNf5JV0CANf1IgASvzLngNP9QNP5QNP1QsIGgjQZJQQA0NABJIgg1AExLATgIEkQiSwE4EBJEI0sBOAESRDIDSwE4BhJEMgNLATggEkQyCksBOAcSREgxADT/UDT+UDT9UCKvSwFXAH9nKUsBV39hZ0giNQEyBjUCMRkjEkRCAHRJVwAgNf9JVyAgNf5JIQdbNf1JgUhbNfxISVcAIDX7SVcgIDX6SVdAIDX5SVdggDX4SDT8gQUINfc0+zT6UDT5UDT4UDT/UDT+UDT3FlAir0sBVwB/ZylLAVd/f2cqSwFX/ipnSCU1ATIGNQIxGSMSREIAACg0ARY0AhZQZzQFQQAKgAQVH3x1NAZQsDQASSIIMgQSRDEWEkQiQyNDMRkjEkQjNQEjNQJC/8k=`,
  appClear: `BYEA`,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 2,
  stateKeys: 3,
  stateSize: 296,
  unsupported: [],
  version: 9
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v485",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v486",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T2",
                "name": "v487",
                "type": "tuple"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v1",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v2",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v1",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v2",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v1",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v2",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v485",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v486",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T2",
                "name": "v487",
                "type": "tuple"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T14",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_approve0_113",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem1",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T12",
                    "name": "_safeTransferFrom0_113",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "bool",
                        "name": "elem1",
                        "type": "bool"
                      }
                    ],
                    "internalType": "struct T13",
                    "name": "_setApprovalForAll0_113",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem1",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T12",
                    "name": "_transferFrom0_113",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T14",
                "name": "v609",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v641",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v747",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v851",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v957",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T14",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_approve0_113",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem1",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T12",
                    "name": "_safeTransferFrom0_113",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "bool",
                        "name": "elem1",
                        "type": "bool"
                      }
                    ],
                    "internalType": "struct T13",
                    "name": "_setApprovalForAll0_113",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem1",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T12",
                    "name": "_transferFrom0_113",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T14",
                "name": "v609",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "v1665",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "v1667",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "v1669",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "v1670",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          }
        ],
        "internalType": "struct T1",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "v1673",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "_a1",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_a2",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "_a1",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          }
        ],
        "internalType": "struct T1",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "v1676",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          }
        ],
        "internalType": "struct T2",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "_a1",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_a2",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002fe238038062002fe28339810160408190526200002691620002ea565b60008055436003556040517f89b0461e6c648cf73a207f909e0cb8a03cfca333ec5045acc1d5474e4076ad169062000060908390620003aa565b60405180910390a1620000763415601062000130565b6040805160808082018352600080835283516020808201865282825280850191825285518082018752838152858701908152865194850187528385528482018490528487018490526060808601859052860194855233865287820180515190935282518201519052905185015190925260019081905543905591519091620001019183910162000406565b60405160208183030381529060405260029080519060200190620001279291906200015a565b50505062000497565b81620001565760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000168906200045a565b90600052602060002090601f0160209004810192826200018c5760008555620001d7565b82601f10620001a757805160ff1916838001178555620001d7565b82800160010185558215620001d7579182015b82811115620001d7578251825591602001919060010190620001ba565b50620001e5929150620001e9565b5090565b5b80821115620001e55760008155600101620001ea565b604080519081016001600160401b03811182821017156200023157634e487b7160e01b600052604160045260246000fd5b60405290565b604051606081016001600160401b03811182821017156200023157634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156200023157634e487b7160e01b600052604160045260246000fd5b600060208284031215620002ac57600080fd5b604051602081016001600160401b0381118282101715620002dd57634e487b7160e01b600052604160045260246000fd5b6040529151825250919050565b600081830360e0811215620002fe57600080fd5b6200030862000200565b8351815260c0601f19830112156200031f57600080fd5b6200032962000237565b62000338866020870162000299565b815262000349866040870162000299565b60208201526080605f19840112156200036157600080fd5b6200036b62000268565b9250606085015183526080850151602084015260a0850151604084015260c0850151606084015282604082015280602083015250809250505092915050565b81518152602080830151805151828401529081015151604080840191909152015160e0820190620003ff6060840182805182526020810151602083015260408101516040830152606081015160608301525050565b5092915050565b81516001600160a01b03168152602080830151518183015260408084015151818401526060808501518051828601529283015160808501529082015160a084015281015160c083015260e0820190620003ff565b600181811c908216806200046f57607f821691505b602082108114156200049157634e487b7160e01b600052602260045260246000fd5b50919050565b612b3b80620004a76000396000f3fe6080604052600436106101015760003560e01c80636352211e1161008f578063a22cb46511610061578063a22cb46514610290578063a7661d54146102a3578063ab53f2c6146102b6578063c87b56dd146102d9578063e985e9c51461030657005b80636352211e1461022657806370a0823114610246578063832307571461026657806395d89b411461027b57005b80631e93b0f1116100d35780631e93b0f1146101a157806323b872dd146101c05780632c10a159146101d35780633bc5b7bf146101e657806342842e0e1461021357005b806306fdde031461010a578063081812fc14610133578063095ea7b31461016b5780631224ff1c1461018e57005b3661010857005b005b34801561011657600080fd5b5061011f610326565b604051905181526020015b60405180910390f35b34801561013f57600080fd5b5061015361014e366004612322565b6104b4565b6040516001600160a01b03909116815260200161012a565b61017e610179366004612353565b610645565b604051901515815260200161012a565b61010861019c36600461237f565b6106c4565b3480156101ad57600080fd5b506003545b60405190815260200161012a565b61017e6101ce366004612398565b610704565b6101086101e13660046123d9565b610792565b3480156101f257600080fd5b506102066102013660046123eb565b6107ce565b60405161012a919061241e565b61017e610221366004612398565b6107f4565b34801561023257600080fd5b50610153610241366004612322565b610881565b34801561025257600080fd5b506101b26102613660046123eb565b610a0d565b34801561027257600080fd5b506001546101b2565b34801561028757600080fd5b5061011f610bb1565b61017e61029e366004612467565b610d3c565b6101086102b13660046123d9565b610dc3565b3480156102c257600080fd5b506102cb610dff565b60405161012a92919061249c565b3480156102e557600080fd5b506102f96102f4366004612322565b610e9c565b60405161012a91906124f9565b34801561031257600080fd5b5061017e610321366004612524565b61103b565b604080516020810190915260008152600160005414156103f05760006002805461034f9061255d565b80601f016020809104026020016040519081016040528092919081815260200182805461037b9061255d565b80156103c85780601f1061039d576101008083540402835291602001916103c8565b820191906000526020600020905b8154815290600101906020018083116103ab57829003601f168201915b50505050508060200190518101906103e091906126fb565b90506103ee6000600b611210565b505b600460005414156104a55760006002805461040a9061255d565b80601f01602080910402602001604051908101604052809291908181526020018280546104369061255d565b80156104835780601f1061045857610100808354040283529160200191610483565b820191906000526020600020905b81548152906001019060200180831161046657829003601f168201915b505050505080602001905181019061049b919061275f565b6020015192915050565b6104b16000600b611210565b90565b600060016000541415610571576000600280546104d09061255d565b80601f01602080910402602001604051908101604052809291908181526020018280546104fc9061255d565b80156105495780601f1061051e57610100808354040283529160200191610549565b820191906000526020600020905b81548152906001019060200180831161052c57829003601f168201915b505050505080602001905181019061056191906126fb565b905061056f60006008611210565b505b600460005414156106345760006002805461058b9061255d565b80601f01602080910402602001604051908101604052809291908181526020018280546105b79061255d565b80156106045780601f106105d957610100808354040283529160200191610604565b820191906000526020600020905b8154815290600101906020018083116105e757829003601f168201915b505050505080602001905181019061061c919061275f565b905061062a83156009611210565b6080015192915050565b61064060006008611210565b919050565b6040805160808101825260008082526020820181905291810182905260608101829052610670612109565b610678612128565b6040805180820182526001600160a01b03881681526020808201889052838101919091526000835281518082019092528282528301526106b88284611235565b50505190505b92915050565b6040805160808101825260008082526020820181905291810182905260608101919091526107006106fa368490038401846128db565b82611235565b5050565b604080516080810182526000808252602082018190529181018290526060810182905261072f612109565b610737612128565b604080516060810182526001600160a01b03898116825288166020820152908101869052608082015260038181905250604080516020808201909252828152908301526107848284611235565b505060600151949350505050565b6040805160808101825260008082526020820181905291810182905260608101919091526107006107c8368490038401846129b6565b82611b4e565b60408051606081018252600080825260208201819052918101919091526106be82611ceb565b604080516080810182526000808252602082018190529181018290526060810182905261081f612109565b610827612128565b604080516060810182526001600160a01b038981168252881660208201528082018790529082015260018181905250604080516020808201909252828152908301526108738284611235565b505060200151949350505050565b60006001600054141561093e5760006002805461089d9061255d565b80601f01602080910402602001604051908101604052809291908181526020018280546108c99061255d565b80156109165780601f106108eb57610100808354040283529160200191610916565b820191906000526020600020905b8154815290600101906020018083116108f957829003601f168201915b505050505080602001905181019061092e91906126fb565b905061093c6000600c611210565b505b60046000541415610a01576000600280546109589061255d565b80601f01602080910402602001604051908101604052809291908181526020018280546109849061255d565b80156109d15780601f106109a6576101008083540402835291602001916109d1565b820191906000526020600020905b8154815290600101906020018083116109b457829003601f168201915b50505050508060200190518101906109e9919061275f565b90506109f78315600d611210565b60a0015192915050565b6106406000600c611210565b600060016000541415610aca57600060028054610a299061255d565b80601f0160208091040260200160405190810160405280929190818152602001828054610a559061255d565b8015610aa25780601f10610a7757610100808354040283529160200191610aa2565b820191906000526020600020905b815481529060010190602001808311610a8557829003601f168201915b5050505050806020019051810190610aba91906126fb565b9050610ac860006007611210565b505b60046000541415610ba557600060028054610ae49061255d565b80601f0160208091040260200160405190810160405280929190818152602001828054610b109061255d565b8015610b5d5780601f10610b3257610100808354040283529160200191610b5d565b820191906000526020600020905b815481529060010190602001808311610b4057829003601f168201915b5050505050806020019051810190610b75919061275f565b90508060a001516001600160a01b0316836001600160a01b031614610b9b576000610b9e565b60015b9392505050565b61064060006007611210565b60408051602081019091526000815260016000541415610c7b57600060028054610bda9061255d565b80601f0160208091040260200160405190810160405280929190818152602001828054610c069061255d565b8015610c535780601f10610c2857610100808354040283529160200191610c53565b820191906000526020600020905b815481529060010190602001808311610c3657829003601f168201915b5050505050806020019051810190610c6b91906126fb565b9050610c796000600e611210565b505b60046000541415610d3057600060028054610c959061255d565b80601f0160208091040260200160405190810160405280929190818152602001828054610cc19061255d565b8015610d0e5780601f10610ce357610100808354040283529160200191610d0e565b820191906000526020600020905b815481529060010190602001808311610cf157829003601f168201915b5050505050806020019051810190610d26919061275f565b6040015192915050565b6104b16000600e611210565b6040805160808101825260008082526020820181905291810182905260608101829052610d67612109565b610d6f612128565b604080518082019091526001600160a01b0387168152851515602082015260608201526002818190525060408051602080820190925282815290830152610db68284611235565b5050604001519392505050565b604080516080810182526000808252602082018190529181018290526060810191909152610700610df9368490038401846129b6565b82611dc3565b600060606000546002808054610e149061255d565b80601f0160208091040260200160405190810160405280929190818152602001828054610e409061255d565b8015610e8d5780601f10610e6257610100808354040283529160200191610e8d565b820191906000526020600020905b815481529060010190602001808311610e7057829003601f168201915b50505050509050915091509091565b6040805160808101825260008082526020820181905291810182905260608101829052905460011415610f7957600060028054610ed89061255d565b80601f0160208091040260200160405190810160405280929190818152602001828054610f049061255d565b8015610f515780601f10610f2657610100808354040283529160200191610f51565b820191906000526020600020905b815481529060010190602001808311610f3457829003601f168201915b5050505050806020019051810190610f6991906126fb565b9050610f776000600f611210565b505b6004600054141561102f57600060028054610f939061255d565b80601f0160208091040260200160405190810160405280929190818152602001828054610fbf9061255d565b801561100c5780601f10610fe15761010080835404028352916020019161100c565b820191906000526020600020905b815481529060010190602001808311610fef57829003601f168201915b5050505050806020019051810190611024919061275f565b606001519392505050565b6106406000600f611210565b6000600160005414156110f8576000600280546110579061255d565b80601f01602080910402602001604051908101604052809291908181526020018280546110839061255d565b80156110d05780601f106110a5576101008083540402835291602001916110d0565b820191906000526020600020905b8154815290600101906020018083116110b357829003601f168201915b50505050508060200190518101906110e891906126fb565b90506110f66000600a611210565b505b60046000541415611208576000600280546111129061255d565b80601f016020809104026020016040519081016040528092919081815260200182805461113e9061255d565b801561118b5780601f106111605761010080835404028352916020019161118b565b820191906000526020600020905b81548152906001019060200180831161116e57829003601f168201915b50505050508060200190518101906111a3919061275f565b9050836001600160a01b03168160a001516001600160a01b0316146111c9576000611200565b60016111d484611ceb565b5160018111156111e6576111e6612408565b146111f2576000611200565b6111fb83611ceb565b604001515b9150506106be565b6106be6000600a5b816107005760405163100960cb60e01b81526004810182905260240160405180910390fd5b6112456004600054146020611210565b815161126090158061125957508251600154145b6021611210565b6000808055600280546112729061255d565b80601f016020809104026020016040519081016040528092919081815260200182805461129e9061255d565b80156112eb5780601f106112c0576101008083540402835291602001916112eb565b820191906000526020600020905b8154815290600101906020018083116112ce57829003601f168201915b5050505050806020019051810190611303919061275f565b905061130d6121bb565b61131e8260c0015142106022611210565b7f5fa2d52f62337d92aae1d902cfca376b3d13734ca5c6c94630646e71082ddd558460405161134d9190612a18565b60405180910390a1600060208501515151600381111561136f5761136f612408565b141561152557602080850151510151815261138c34156015611210565b6114168260a001516001600160a01b0316336001600160a01b0316146113ca5782608001516001600160a01b0316336001600160a01b0316146113cd565b60015b61140c5760016113dc33611ceb565b5160018111156113ee576113ee612408565b146113fa57600061140f565b61140333611ceb565b6040015161140f565b60015b6016611210565b80516020015161142890156017611210565b604051600181527ed60d356d179ba1afdc5a449e0eae2daba0964185725e0f25f5220d98db52a29060200160405180910390a16001835280518051602091820151604080513381526001600160a01b03909316938301939093528183015290517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259181900360600190a16114ba6121de565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551820152855151838601805191861690915260a0880151815195169490930193909352815143910152514291015261151f81611f73565b50611b48565b600160208501515151600381111561153f5761153f612408565b14156117295760208085015151604001519082015261156034156018611210565b6116068260a001516001600160a01b03168260200151600001516001600160a01b0316146115ae5782608001516001600160a01b03168260200151600001516001600160a01b0316146115b1565b60015b6115fc5760016020830151516115c690611ceb565b5160018111156115d8576115d8612408565b146115e45760006115ff565b6020820151516115f390611ceb565b604001516115ff565b60015b6019611210565b61161c600082602001516040015114601a611210565b604051600181527f1e83d33026ed9df5c0a304faa8182b67d9bee81417b0bbf7f90c2f29e0b4bbb39060200160405180910390a160016020848101919091528181015180518183015160409283015183516001600160a01b039384168152929091169382019390935280820192909252517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360600190a16116bf6121de565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551820152858301805184015184870180519187169091529051840151815195169490930193909352815143910152514291015261151f81611f73565b600260208501515151600381111561174357611743612408565b141561193a576020840151516060015160408201526117643415601b611210565b6117ee8260a001516001600160a01b0316336001600160a01b0316146117a25782608001516001600160a01b0316336001600160a01b0316146117a5565b60015b6117e45760016117b433611ceb565b5160018111156117c6576117c6612408565b146117d25760006117e7565b6117db33611ceb565b604001516117e7565b60015b601c611210565b604051600181527f5eaeb18c23d7baa14b223716f4acb6d7ae5df6262af759439720527a9e3936049060200160405180910390a1600160408481018290528281018051516001600160a01b03908116600090815260046020908152848220805460ff1916909617909555825180860151905183168252908490208054911515620100000262ff0000199092169190911790559051805190840151835133815291909216938101939093521515908201527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319060600160405180910390a16118d36121de565b825181516001600160a01b0391821690526020808501518351820152604080860151845182015260608087015185518201526080870151838601805191861690915260a0880151815195169490930193909352815143910152514291015261151f81611f73565b600360208501515151600381111561195457611954612408565b1415611b48576020840151516080015160608201526119753415601d611210565b611a1b8260a001516001600160a01b03168260600151600001516001600160a01b0316146119c35782608001516001600160a01b03168260600151600001516001600160a01b0316146119c6565b60015b611a115760016060830151516119db90611ceb565b5160018111156119ed576119ed612408565b146119f9576000611a14565b606082015151611a0890611ceb565b60400151611a14565b60015b601e611210565b611a31600082606001516040015114601f611210565b604051600181527fbee49fb15ee6d3a639471cff0b1cdc2265157c64425ebb2f28576779dc4fd5609060200160405180910390a160016060808501919091528101518051602082015160409283015192517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef93611ace9392916001600160a01b039384168152919092166020820152604081019190915260600190565b60405180910390a1611ade6121de565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551820152858101805184015184870180519187169091529051840151815195169490930193909352815143910152514291015261151f81611f73565b50505050565b611b5e6001600054146013611210565b8151611b79901580611b7257508251600154145b6014611210565b600080805560028054611b8b9061255d565b80601f0160208091040260200160405190810160405280929190818152602001828054611bb79061255d565b8015611c045780601f10611bd957610100808354040283529160200191611c04565b820191906000526020600020905b815481529060010190602001808311611be757829003601f168201915b5050505050806020019051810190611c1c91906126fb565b60408051855181526020808701511515908201529192507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a1611c6a34156011611210565b8051611c82906001600160a01b031633146012611210565b611c8a6121de565b815181516001600160a01b0391821690526020808401518351820152604080850151845182015260608086015185518201528551838601805191861690915286518151951694909301939093528151439101525142910152611b4881611f73565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115611d3757611d37612408565b1415611db4576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115611d7857611d78612408565b6001811115611d8957611d89612408565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b611dd36004600054146025611210565b8151611dee901580611de757508251600154145b6026611210565b600080805560028054611e009061255d565b80601f0160208091040260200160405190810160405280929190818152602001828054611e2c9061255d565b8015611e795780601f10611e4e57610100808354040283529160200191611e79565b820191906000526020600020905b815481529060010190602001808311611e5c57829003601f168201915b5050505050806020019051810190611e91919061275f565b9050611ea58160c001514210156027611210565b60408051845181526020808601511515908201527fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d1910160405180910390a1611ef034156023611210565b8051611f08906001600160a01b031633146024611210565b611f106121de565b815181516001600160a01b0391821690526020808401518351820152604080850151845182015260608086015185518201526080860151838601805191861690915260a08701518151951694909301939093528151439101525142910152611b48815b6040805160208101909152600081526005826020015160600151611f979190612adf565b81526040805160e0810182526000808252825160208082018552828252808401919091528351808201855282815283850152835160808082018652838252918101839052938401829052606080850183905283019390935291810182905260a0810182905260c08101919091528251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190850152818601805151841660808601525182015190921660a0840152835160c084015260046000554360015590516120e59183910181516001600160a01b039081168252602080840151518184015260408085015151818501526060808601518051828701529283015160808601529082015160a085015281015160c084015261014083019190506080840151811660e084015260a08401511661010083015260c0909201516101209091015290565b60405160208183030381529060405260029080519060200190611b48929190612276565b6040518060400160405280600081526020016121236122fa565b905290565b6040805160a081019091528060008152602001612161604051806040016040528060006001600160a01b03168152602001600081525090565b81526040805160608101825260008082526020808301829052828401829052808501929092528251808401845281815291820152910190815260408051606081018252600080825260208281018290529282015291015290565b6040805160c0810190915260006080820181815260a08301919091528190612161565b604051806040016040528061224c60408051608081018252600080825282516020818101909452908152909182019081526040805160208181019092526000815291019081526040805160808101825260008082526020828101829052928201819052606082015291015290565b81526040805160808101825260008082526020828101829052928201819052606082015291015290565b8280546122829061255d565b90600052602060002090601f0160209004810192826122a457600085556122ea565b82601f106122bd57805160ff19168380011785556122ea565b828001600101855582156122ea579182015b828111156122ea5782518255916020019190600101906122cf565b506122f692915061230d565b5090565b6040518060200160405280612123612128565b5b808211156122f6576000815560010161230e565b60006020828403121561233457600080fd5b5035919050565b6001600160a01b038116811461235057600080fd5b50565b6000806040838503121561236657600080fd5b82356123718161233b565b946020939093013593505050565b6000610180828403121561239257600080fd5b50919050565b6000806000606084860312156123ad57600080fd5b83356123b88161233b565b925060208401356123c88161233b565b929592945050506040919091013590565b60006040828403121561239257600080fd5b6000602082840312156123fd57600080fd5b8135610b9e8161233b565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061243557612435612408565b8083525060208301511515602083015260408301511515604083015292915050565b8035801515811461064057600080fd5b6000806040838503121561247a57600080fd5b82356124858161233b565b915061249360208401612457565b90509250929050565b82815260006020604081840152835180604085015260005b818110156124d0578581018301518582016060015282016124b4565b818111156124e2576000606083870101525b50601f01601f191692909201606001949350505050565b81518152602080830151908201526040808301519082015260608083015190820152608081016106be565b6000806040838503121561253757600080fd5b82356125428161233b565b915060208301356125528161233b565b809150509250929050565b600181811c9082168061257157607f821691505b6020821081141561239257634e487b7160e01b600052602260045260246000fd5b6040516080810167ffffffffffffffff811182821017156125c357634e487b7160e01b600052604160045260246000fd5b60405290565b6040805190810167ffffffffffffffff811182821017156125c357634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff811182821017156125c357634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff811182821017156125c357634e487b7160e01b600052604160045260246000fd5b80516106408161233b565b60006020828403121561267957600080fd5b6040516020810181811067ffffffffffffffff821117156126aa57634e487b7160e01b600052604160045260246000fd5b6040529151825250919050565b6000608082840312156126c957600080fd5b6126d1612592565b90508151815260208201516020820152604082015160408201526060820151606082015292915050565b600060e0828403121561270d57600080fd5b612715612592565b82516127208161233b565b815261272f8460208501612667565b60208201526127418460408501612667565b604082015261275384606085016126b7565b60608201529392505050565b6000610140828403121561277257600080fd5b60405160e0810181811067ffffffffffffffff821117156127a357634e487b7160e01b600052604160045260246000fd5b60405282516127b18161233b565b81526127c08460208501612667565b60208201526127d28460408501612667565b60408201526127e484606085016126b7565b606082015260e08301516127f78161233b565b6080820152612809610100840161265c565b60a0820152610120929092015160c083015250919050565b60006060828403121561283357600080fd5b6040516060810181811067ffffffffffffffff8211171561286457634e487b7160e01b600052604160045260246000fd5b60405290508082356128758161233b565b815260208301356128858161233b565b6020820152604092830135920191909152919050565b6000604082840312156128ad57600080fd5b6128b56125c9565b905081356128c28161233b565b81526128d060208301612457565b602082015292915050565b60008183036101808112156128ef57600080fd5b6128f76125c9565b83358152610160601f198301121561290e57600080fd5b6129166125fa565b61291e61262b565b60208601356004811061293057600080fd5b81526040603f198501121561294457600080fd5b61294c6125c9565b9350604086013561295c8161233b565b808552506060860135602085015283602082015261297d8760808801612821565b604082015261298f8760e0880161289b565b60608201526129a2876101208801612821565b608082015281526020820152949350505050565b6000604082840312156129c857600080fd5b6040516040810181811067ffffffffffffffff821117156129f957634e487b7160e01b600052604160045260246000fd5b60405282358152612a0c60208401612457565b60208201529392505050565b8151815260208201515180516101808301919060048110612a3b57612a3b612408565b6020848101919091528181015180516001600160a01b039081166040808801919091529183015160608701528184015180518216608088015292830151811660a08701529082015160c08601526060830151805190911660e08601526020015115156101008501525060800151612ad861012084018280516001600160a01b03908116835260208083015190911690830152604090810151910152565b5092915050565b60008219821115612b0057634e487b7160e01b600052601160045260246000fd5b50019056fea26469706673582212205e96e36185f42c3c8a517a6682b40abc5c423b05a083006aa4355463ae5ed31764736f6c63430008090033`,
  BytecodeLen: 12258,
  Which: `oD`,
  version: 6,
  views: {
    balanceOf: `balanceOf`,
    getApproved: `getApproved`,
    isApprovedForAll: `isApprovedForAll`,
    name: `name`,
    ownerOf: `ownerOf`,
    symbol: `symbol`,
    tokenURI: `tokenURI`
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Creator": Creator,
  "approve": approve,
  "safeTransferFrom": safeTransferFrom,
  "setApprovalForAll": setApprovalForAll,
  "transferFrom": transferFrom
  };
export const _APIs = {
  approve: approve,
  safeTransferFrom: safeTransferFrom,
  setApprovalForAll: setApprovalForAll,
  transferFrom: transferFrom
  };
