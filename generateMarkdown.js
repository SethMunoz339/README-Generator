// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
const fs = require('fs');

// Function to generate README content
function generateMarkdown(answers) {
  const title = `# ${answers.title}`;
  const description = answers.description;
  const tableOfContents = '## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [Contributing](#contributing)\n- [License](#license)\n- [Credits](#credits)';
  const installation = `## Installation\n\n${answers.installation}`;
  const usage = `## Usage\n\n${answers.usage}`;
  const contributing = `## Contributing\n\n${answers.contributing}`;
  const license = `## License\n\n${answers.license}`;
  const credits = `## Credits\n\n${answers.credits}`;
  const githubLink = `Find me on GitHub: [${answers.github}](https://github.com/${answers.github})`;
  const emailLink = `For any questions, you can reach me at [${answers.email}](mailto:${answers.email})`;

  const readmeContent = `${title}\n\n${description}\n\n${tableOfContents}\n\n${installation}\n\n${usage}\n\n${contributing}\n\n${license}\n\n${credits}\n\n${githubLink}\n\n${emailLink}`;

  fs.writeFile('README.md', readmeContent, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md file generated successfully.');
    }
  });
}

module.exports = {
  generateMarkdown,
};
