const engine = require("./state_engine");
const rule = require("./rule_engine");

let obj = {};

engine.transitions = [
  {name:'Взять в работу',code:'st2inw', from:'start', to: 'inwork'},
  {name:'Отправить на тестирование',code:'inw2test', from:'inwork', to: 'testing'},
  {name:'Есть ошибки',code:'test2err', from:'testing', to: 'error'},
  {name:'Ошибки исправил',code:'err2test', from:'error', to: 'testing'},
  {name:'Отправить на код ревью',code:'test2compl', from:'testing', to: 'check'},
  {name:'В продакшн',code:'test2compl', from:'check', to: 'complete'},
  {name:'Завернуть',code:'test2compl', from:'check', to: 'testing'}
]
obj.state = 'start'
obj.name = 'start'
obj.during = 10

// engine.doTransfer(obj,'first')
// console.log(obj)
// console.log(engine.findAviableTransfers(obj.state))
// console.log(engine.checkTransfer(obj.state,'st2inw'))
// console.log(engine.getStateByTrans('st2inw'))
// engine.doTransfer(obj,'first')
// // 
// console.log(obj)
const inquirer = require('inquirer');

let inq = function() {
  inquirer.prompt([{
    name: 'events',
    type: 'list',
    message: 'Обработка',
    choices: engine.findAviableTransfers(obj.state),
    default: 3,
  }]).then((answers) => {
    if (rule.getAll(obj,10) == false) {return reject()}
     else {
       engine.doTransfer(obj,answers.events)
     }
    // console.log(`${answers.name}. ${answers.iceCream}`);
  })
  .then((answers) => {
    if (obj.state !== 'complete') { inq() }
      else {console.log('Обработка завершена')}
  })
  .catch(e => {
    console.log('Не обработано');
   });
}

inq()

function chainError(err) {
  if (!obj.name) {}
  return Promise.reject(err)
};

// console.log(rule.getAll(obj,8))




