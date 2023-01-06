// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown"); //app specific user package

// array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "oop. enter value to continue";
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "What is a brief description of your project?",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "oop. enter a value to continue";
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "How to install this project",
  },
  {
    type: "input",
    name: "usage",
    message: "How to use this project",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
  },
  {
    type: "input",
    name: "contributing",
    message: "How to contribute to this project",
  },
  {
    type: "list",
    name: "license",
    message: "What is the license this project should have?",
    choices: [
      "MIT",
      "agpl-3.0",
      "gpl",
      "gpl-2.0",
      "gpl-3.0",
      "APACHE-2.0",
      "none",
    ],
  },
  {
    type: "input",
    name: "test",
    message: "How to run the test for this project",
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   return fs.writeFileSync(path.join("__dirname", "fileName"), data);
// }

// TODO: Create a function to initialize app
function init() {
  //call the inquierer prompt to get to know about the user's project
  inquirer.prompt(questions).then((answers) => {
    console.log("answers = ", answers);
    //use the user's answers to create readme template string by calling generateMarkDown
    const markDownContent = generateMarkdown(answers);
    //write the readme template string into a file
    fs.writeFile("generatedReadMe.md", markDownContent, (err) =>
      err
        ? console.log(err)
        : console.log("Successfully created generatedReadMe.md!")
    );
  });
}

// Function call to initialize app
init();
