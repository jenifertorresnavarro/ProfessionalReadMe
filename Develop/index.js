const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile } = require('fs').promises;


// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

const promptUser = () => {
    return inquirer.prompt([
     {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
          },
    
    {
      type: 'input',
      name: 'motivation',
      message: 'What was your motivation?',
    },
    {
      type: 'input',
      name: 'build',
      message: 'Whhy did you build this project?',
    },
    {
      type: 'input',
      name: 'solve',
      message: 'What problems did it solve?',
    },
    {
      type: 'input',
      name: 'learned',
      message: 'What did you learn?',
    },

    {
        type: 'input',
        name: 'standout',
        message: 'What makes your project standout?',
      },
      {
        type: 'input',
        name: 'steps',
        message: 'What steps are necessary in order to install your project?',
      },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your Guthub Username!',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please provide a license!',
      },
  ])
};

// TODO: Create a function to write README file



const generateREADME = ({title, motivation, build, solve,learned, standout,steps, github, license}) =>
`# ${title}
## Description

${motivation}
${build}
${solve}
${learned}

${standout}
## Installation
${steps}
## Credits
${github}
## License
${license}`;


// TODO: Create a function to initialize app



// Function call to initialize app


const init = () => {
    promptUser()
     
      .then((answers) => writeFile('README.md', generateREADME(answers)))
      .then(() => console.log('Successfully generated README'))
      .catch((err) => console.error(err));
  };
  
  init();