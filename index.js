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
    message: "How do you install this project?",
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
    name: "usage",
    message: "How do you use this project? Please enter instructions/examples",
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
    name: "collaborators",
    message: "Enter any and all collaborators",
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
    name: "info",
    message: "Enter your GitHub username and email address",
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
    name: "contributing",
    message: "How can one contribute to this project?",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "oop. enter a value to continue";
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "What license should this project have?",
    choices: [
      "EPL 1.0",
      "BSD 2",
      "GNU v3",
      "Mozilla",
      "MIT",
      "agpl-3.0",
      "gpl",
      "gpl-2.0",
      "gpl-3.0",
      "APACHE-2.0",
      "none of these",
    ],
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
    name: "test",
    message: "How do you run the test for this project?",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "oop. enter a value to continue";
      }
    },
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("niice!");
    }
  });
}

// function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generateMarkdown(data));
    console.log(data);
  });
}

// Function call to initialize app
init();
