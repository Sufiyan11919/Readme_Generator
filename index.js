const inquirer = require("inquirer")
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
       type: 'input',
       name: 'Title',
       message: 'What is your Project title?'

    },
    {
       type: 'input',
       name: 'Description',
       message: 'Provide the description of project?'

    },
    {
       type: 'input',
       name: 'Installation',
       message: 'How to install? ' 

    },
    {
       type: 'input',
       name: 'Usage', 
       message: 'Provide the usage information:'

    },
    {
      type: "list",
      name: "license",
      message: "What license do you choose for your project?",
      choices: [
          "Apache",
          "Academic",
          "GNU",
          "ISC",
          "MIT",
          "Mozilla",
          "Open"
      ]
   },
  {
      type: "input",
      name: "questions",
      message: "What can users do if they have an issue?"
  },
  {
      type: "input",
      name: "username",
      message: "Please enter your GitHub username: "
  },
  {
      type: "input",
      name: "email",
      message: "Please enter you e-mail address."
  }
];


//write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, function (err) {
       if (err) throw err;
       console.log('File created!');
   });
}


// initialize program
function init() {
   inquirer.prompt(questions).then(function (data) {
       writeToFile("README2.md", generateMarkdown(data))
   });

}

init();
