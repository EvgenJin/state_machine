const engine = require("./state_engine");
let obj = {};

engine.transitions = [
      {name:'first', from:'start', to: 'inwork'},
      {name:'second', from:'inwork', to: 'testing'},
      {name:'third', from:'testing', to: 'complete'},
      {name:'fourd', from:'testing', to: 'error'}
]
obj.state = 'start'
// console.log(obj)
// console.log(engine.findAviableTransfers(obj.state))
// 
// console.log(obj)

const inquirer = require('inquirer');

let inq = function() {
  inquirer.prompt([{
    name: 'name',
    type: 'input',
    message: 'What\'s your name?',
  }, {
    name: 'iceCream',
    type: 'list',
    message: 'Which is your favorite of the following ice cream flavors?',
    choices: engine.findAviableTransfers(obj.state),
    default: 3,
  }]).then((answers) => {
    engine.doTransfer(obj,answers.iceCream)
    // console.log(answers.iceCream)
    // console.log(`\nHi ${answers.name}. I like ${answers.iceCream} ice cream too! 😋\n`);
  })
  // .then((answers) => {
  //   inq()
  //   // engine.doTransfer(obj,answers.name)
  //   // console.log(`\nHi ${answers.name}. I like ${answers.iceCream} ice cream too! 😋\n`);
  // });
}

inq()
