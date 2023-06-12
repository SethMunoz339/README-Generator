// create the file system and readline for the license
const fs = require('fs');
const readline = require('readline');

// make a readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to generate README content
function generateMarkdown(answers) {
  const title = `# ${answers.title}`;
  const licenseBadge = renderLicenseBadge(answers.license);
  const description = answers.description;
  const tableOfContents = '## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [Contributing](#contributing)' + (answers.license ? '\n- [License](#license)' : '') + '\n- [Credits](#credits)'+ '\n- [Testing](#testing)';
  const installation = `## Installation\n\n${answers.installation}`;
  const usage = `## Usage\n\n${answers.usage}`;
  const contributing = `## Contributing\n\n${answers.contributing}`;
  const licenseSection = renderLicenseSection(answers.license);
  const credits = `## Credits\n\n${answers.credits}`;
  const test = `## Testing\n\n${answers.test}`;
  const githubLink = `Find me on GitHub: [${answers.github}](https://github.com/${answers.github})`;
  const emailLink = `For any questions, you can reach me at [${answers.email}](mailto:${answers.email})`;

  const readmeContent = `${title}\n\n${licenseBadge}\n\n${description}\n\n${tableOfContents}\n\n${installation}\n\n${usage}\n\n${contributing}\n\n${licenseSection}\n\n${credits}\n\n${test}\n\n${githubLink}\n\n${emailLink}`;

  // write the README file
  fs.writeFile('README.md', readmeContent, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md file generated successfully.');
    }
  });
}

function renderLicenseBadge(license) {
  let badge = '';

  // Generate the appropriate badge based on the license type
  switch (license) {
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache-2.0':
      badge = '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL-3.0':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;

    default:
      break;
  }

  // Generate the license section with the badge 
  const licenseBadge = `\n\n${badge}\n\n`;

  return licenseBadge;
}

function renderLicenseSection(license) {
 
  let link = '';

  // Generate the appropriate link based on the license type
  switch (license) {
    case 'MIT':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'Apache-2.0':
      link = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GPL-3.0':
      link = 'https://www.gnu.org/licenses/gpl-3.0';
      break;

    default:
      break;
  }

  // Generate the license section with the link
  const licenseSection = `## License\n\nThis project is licensed under the [${license}](${link}) license.`;

  return licenseSection;
}

module.exports = {
  generateMarkdown,
};
