// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = require('./utils/readmequestions').questions


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./README.md", generateMarkdown(data), (err) => {
        if (err) {
          return console.log(err);
        }
        console.log('Successfull create Readme File!');
      })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((replies) => {
        const fileName =
        replies.projecttitle
          .split(' ')
          .join('') + '.md'

        writeToFile(fileName, replies)
    })
}

// Function call to initialize app
init();
