const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes');


const questions = [
        {
            type: 'prompt',
            message: 'Enter the initials for your logo (Max. of 3).',
            name: 'initials',
        },
        {
            type: 'list',
            message: 'What method of choosing a color would you like?',
            choices: ['Color Keyword', 'Hexadecimal'],
            name: 'colorMethod',
        },
        {
            type: 'input',
            message: 'Enter a color for your font',
            name: 'textColor',
            when: (answers) => answers.colorMethod === 'Color Keyword',
        },
        {
            type: 'input',
            message: 'Enter a color for your font',
            name: 'textColor',
            when: (answers) => answers.colorMethod === 'Hexadecimal',
            validate: (answer) => {
                const colorCode = '^#[A-Fa-f0-9]{6}$'
                if(answer !== colorCode) {
                    return console.info('Entry is not a hexadecimal color code.')
                }
            }
        },
        {
            type: 'list',
            message: 'What shape would you like your logo to be?',
            choices: ['Triangle', 'Square', 'Circle'],

            name: 'shape',
        },
        {
            type: 'input',
            message: 'What color would you like the shape?',
            name: 'shapeColor',
            when: (answers) => answers.colorMethod === 'Color Keyword',
        },
        {
            type: 'input',
            message: 'What color would you like the shape?',
            name: 'shapeColor',
            when: (answers) => answers.colorMethod === 'Hexadecimal',
            validate: (answer) => {
                const colorCode = '^#[A-Fa-f0-9]{6}$'
                if(answer !== colorCode) {
                    return console.info('Entry is not a hexadecimal color code.')
                }
            }
                
        }
    ]

function logoGenerator(answers) {

        if (answers.shape === 'Triangle') {
            let logo = new Triangle (answers.shapeColor, answers.initials, answers.textColor)
            return logo.render()
        } else if (answers.shape === 'Square') {
            let logo = new Square (answers.shapeColor, answers.initials, answers.textColor)
            return logo.render()
        } else {
            let logo = new Circle (answers.shapeColor, answers.initials, answers.textColor)
            return logo.render()
        }
    }

function saveLogo(answers) {
        const customLogo = logoGenerator(answers);
        fs.writeFile("./logo.svg", customLogo, ()=> console.info("Generated logo.svg"));
    }


function init() {
        inquirer
        .prompt(questions)
        .then((answers) => {
            saveLogo(answers);
        });

    }

init()