// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// MIT APACHE GPL BSD None

// TODO: Create an array of questions for user input
let questions = [{
    type: 'input',
    message: 'Please What is the title of your application',
    name: 'title'
},
{
    type: 'input',
    message: 'Please Enter a description of your project',
    name: 'description'
},
{
    type: 'list',
    choices: ['MIT', 'APACHE', 'GPL', 'BSD', 'None'],
    name: 'license'
},
{
    type: 'input',
    message: 'Please Enter installation instructions',
    name: 'installation'
},
{
    type: 'input',
    message: 'Please Enter usage information',
    name: 'usage'
},
{
    type: 'input',
    message: 'Please Enter contribution guidelines',
    name: 'contribution'
},
{
    type: 'input',
    message: 'Please Enter test instructions',
    name: 'testInstructions'
},
{
    type: 'input',
    message: 'Please Enter your github username',
    name: 'github'
},
{
    type: 'input',
    message: 'Please Enter your email',
    name: 'email'
}]

function promptUser() {
    return inquirer.prompt(questions)
    .then((data) => {
        writeToFile(data)
    })
}

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('READEME.md', generateMarkdown(data), function(err) {
        if(err) {
            return console.log(`There was an error: ${err}`)
        }
        console.log('Generating README..')
    })
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
}

// Function call to initialize app
init();
