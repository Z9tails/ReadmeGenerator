// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs= require('fs');


.prompt([
    {
      type: 'input',
      name: 'title',
      message: "What's the name of your Project?",
    },
    {
      type: 'input',
      name: 'description',
      message: "What's your project about?",
    },
 
    {
      type: "input",
      name: "installation",
      message: "Installation Instructions?",
    },
    {
      type: "input",
      name: "usage",
      message: "What's the Usage of your Project?",
    },
    {
      type: "input",
      name: "contribution",
      message: "Any Contribution Guidelines?",
    },

    {
      type: "input",
      name: "test",
      message: "Testing?",
    },
    {
      type: "input",
      name: "questions",
      message: "Any Questions that need addressed?",
    },
     {
      type: "input",
      name: "license",
      message: "Anybody you want to credit?",
    },
     {
      type: "input",
      name: "license",
      message: "Anybody you want to credit?",
    },

    {
      type: "input",
      name: "contact",
      message: "What is your github?",
    },
  ]);



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
