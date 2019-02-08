// let obj = {
//   name: '',
//   state: ''
// }

let getAll = function (obj,time) {
  if (check_name(obj)==false||check_during(obj,time)== false)  {
    return false
  }
}

let check_name = function (obj) {
  if (!obj.name) {
    console.log('Не заведен name')
    return false
  }
   else return true
}

let check_during = function (obj,time) {
  if (obj.during > time) {
    console.log('Не хватит времени')
    return false
  }
   else return true
}

module.exports = {
  // obj: obj,
  check_during: check_during,
  getAll: getAll,
  check_name : check_name,
}
