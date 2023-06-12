// include package and link to other js
const inquirer = require('inquirer');
const { generateMarkdown } = require('./generateMarkdown');
// use inquirer to prompt user for README data
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter the project description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage instructions:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contributing guidelines:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select a license:',
      choices: ['MIT', 'Apache-2.0', 'GPL-3.0'],
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Enter credits and acknowledgements:',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter instructions to test the application:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
    // call the function to generate the README
  ])
  .then((answers) => {
    generateMarkdown(answers);
  })
  .catch((error) => {
    console.error(error);
  });


