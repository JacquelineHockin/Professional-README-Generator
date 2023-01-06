// function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  function renderLicenseBadge(license) {
    let badge = "";
    if (license === "Apache 2.0") {
      badge =
        "![License Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
    } else if (license === "GNU v3") {
      badge =
        "![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)";
    } else if (license === "Mozilla") {
      badge =
        "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
    } else if (license === "EPL 1.0") {
      badge =
        "![License EPL](https://img.shields.io/badge/License-EPL%201.0-red.svg)";
    } else if (license === "MIT") {
      badge =
        "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    } else if (license === "BSD 2") {
      badge =
        "![License BSD 2](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)";
    } else {
      badge = "";
    }
    return badge;
  }
}

// function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "Apache 2.0") {
    licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
  } else if (license === "Mozilla ") {
    licenseLink = "https://www.mozilla.org/en-US/MPL/";
  } else if (license === "BSD 2") {
    licenseLink = "https://opensource.org/licenses/BSD-2-Clause";
  } else if (license === "EPL 1.0") {
    licenseLink = "https://www.eclipse.org/legal/epl-v10.html";
  } else if (license === "GNU v3") {
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
  } else if (license === "MIT") {
    licenseLink = "https://choosealicense.com/licenses/mit/";
  } else {
    licenseLink = "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
