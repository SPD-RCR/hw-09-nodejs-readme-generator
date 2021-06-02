const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

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
      name: 'contributing',
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
      choices: ['MIT', 'GPLv2', 'Apache', 'none'],
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
  
  ## Table of Contents

  * Description

  * Installation

  * Usage

  * Contributing

  * Tests
  
  ## Description

  ${answers.description}

  
  ## Installation
  
  ${answers.installation}

  ## Usage

  ${answers.usage}

  ## Contributing
  
  ${answers.contributing}

  ## Tests

  ${answers.tests}
  
  `;

// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('Generate-README.md', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();
