let license = ${answers.license}

function renderLicenseBadgeLink(license) {
  // let licenseBadge = 

  if license === "MIT" => {
    `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if license === "GPL v2" => {
    `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
  if license = "Apache 2.0" => {
    `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else license => {
    `License: none`
  };
  
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  
  `;
  }
  
  module.exports = generateMarkdown;