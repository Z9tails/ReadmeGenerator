// TODO: Include packages needed for this application
//Install inquirer to run
const inquirer = require('inquirer');

//fs is the File System module acces
const fs = require('fs');

//generateMarkdown filepath
const generateMarkdown = require('./utils/generateMarkdown').default;

//Questions to be asked
inquirer.prompt = ([{
      type: 'input',
      name: 'title',
      message: "What's the name of your Project?",
    },
    {
      type: 'input',
      name: 'description',
      message: "What's your project About?",
    },

    {
      type: 'input',
      name: 'installation',
      message: "Installation Instructions?",
    },
    {
      type: 'input',
      name: 'usage',
      message: "What's this used for?",
    },
    {
      type: 'input',
      name: 'contribution',
      message: "Any contribution guidelines?",
    },

    {
      type: 'input',
      name: 'testing',
      message: "Testing instructions?",
    },
    {
      type: 'input',
      name: 'questions',
      message: "Any questions that need addressed?",
    },
    {
      type: 'list',
      name: 'license',
      message: "What License(s) does your project contain?",
      choices: ["Apache 2.0", "MIT", "Mozilla", "Unlicense", "None"]
    },
    {
      type: 'input',
      name: 'github',
      message: "What is your github?",
    },

    {
      type: 'input',
      name: 'linkedIn',
      message: "What is your linkedIn webpage?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your e-mail?",
    }

  ])
  //End of Questions
  //Function for generating file 
  .then((response) => {
      fs.writeFile('README.md', generateMarkdown(response), err => {
          if (err) throw err;
        });
       }
);