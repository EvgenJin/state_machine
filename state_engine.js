let transitions = []

// найти переходы из состояния
let findAviableTransfers = function (state) {
  let res = module.exports.transitions.filter((el) => 
    el.from == state
  )
  return res
};

// проверить доступность перехода
let checkTransfer = function(state_from,transfer_name) {
 if (!state_from) {return false}
 let res = module.exports.transitions.filter((el) => 
  el.from == state_from
  && el.name == transfer_name
 )
 if (res.length > 0) {return true}
  else {return false}
};

// получить конечное состояние по переходу
let getStateByTrans = function (transfer_code) {
  let res = module.exports.transitions.filter((el) => 
   el.name == transfer_code
  )
  return res[0].to
};

// изменить состояние по переходу
let doTransfer = function (obj,trans_code) {
  if (!obj.state || obj.state == '') {
    console.error('state is null')
  }
  else if (!checkTransfer(obj.state,trans_code)) {
    console.error('transition not found')
  } 
  else {
    let state = getStateByTrans(trans_code);
      obj.state = state;
  }
};

let before_transfer = function (state) {
  console.log('before state:'+state)
}

let after_transfer = function (state) {
  console.log('after state:'+state)
}

module.exports = {
  transitions: transitions,
  findAviableTransfers : findAviableTransfers,
  checkTransfer : checkTransfer,
  getStateByTrans : getStateByTrans,
  doTransfer : doTransfer
}