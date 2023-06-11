const inquirer = require('inquirer');
const { generateREADME } = require('./generateMarkdown');t
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
      type: 'input',
      name: 'credits',
      message: 'Enter credits and acknowledgements:',
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
  ])
  .then((answers) => {
    generateREADME(answers);
  })
  .catch((error) => {
    console.error(error);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
