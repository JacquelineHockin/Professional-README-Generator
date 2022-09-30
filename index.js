// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of the project?",
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

///---
const generateHTML = ({ name, location, github, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

inquirer.prompt().then((answers) => {
  const htmlPageContent = generateHTML(answers);

  fs.writeFile("index.html", htmlPageContent, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
});
