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
    message: "Enter your GitHub and email address",
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
    message: "How to contribute to this project",
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
