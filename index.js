const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown.js');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the project description?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage information?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the contribution guidelines?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the test instructions?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license are you going to use?',
      choices: ['MIT', 'GPL v2', 'Apache 2.0', 'none'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub Username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  ]);
};

const generateHTML = (answers) =>
  `# ${answers.title}

  ![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-blue.svg)

  ## Table of Contents

  * [Description](#Description)

  * [Installation Instructions](#installation-instructions)

  * [Usage Information](#usage-information)

  * [Contribution Guidelines](#contribution-guidelines)

  * [Tests](#tests)

  * [Questions](#Questions)
  

  ### Description

  ${answers.description}

  
  ### Installation Instructions
  
  ${answers.installation}

  ### Usage Instructions

  ${answers.usage}

  ### Contribution Guidelines
  
  ${answers.contribution}

  ### Tests

  ${answers.tests}

  ### Questions

  License: ${answers.license}

  Feel free to review my GitHub profile: [${answers.github}](https://github.com/${answers.github}/)

  You can reach me with additional questions via ${answers.email}

  `;

// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('GENERATED-README.md', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to GENERATED-README.md'))
    .catch((err) => console.error(err));
};

init();
