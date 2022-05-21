const inquirer = require('inquirer');
const fs = require('fs');
// const { count } = require('console');
//title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is your title?'
    },
    {
      type: 'input',
      name: 'Description',
      message: 'What is your description?'
    },

    {
      type: 'checkbox',
      message: 'What content do you know?',
      name: 'content',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL']
    },
    {
      type: 'input',
      message: 'Tell me how to install?',
      name: 'installation',
      choices: ['email', 'phone', 'telekinesis']
    }
  ])
  .then(data => {
      console.log(data)
    const filename = "README.md"
    const content = `# ${data.Title} \n# Description\n- ${data.Description} \n# Content \n ${data.content} \n# Installation \n- ${data.installation}`
    fs.writeFile(filename, content, err =>
      err ? console.log(err) : console.log('Success!')
    );
  });
