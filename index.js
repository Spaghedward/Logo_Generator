const fs = require('fs');
const inquirer = require('inquirer');
// const shapes = require('./lib/shapes');
// const colors = require('./lib/colors');

inquirer
    .prompt ([
        {
            type: 'prompt',
            message: 'Enter the initials for your logo (Max. of 3).',
            name: 'initials'
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
            when: (answers) => {
                if (answers.colorMethod === 'Color Keyword') {
                    return true;
                }
                return false;
            }
        },
        {
            type: 'input',
            message: 'Enter a color for your font',
            name: 'textColor',
            when: (answers) => {
                if (answers.colorMethod === 'Hexadecimal') {
                    return true;
                }
                return false;
            }
        },
        {
            type: 'list',
            message: 'What shape would you like your logo to be?',
            choices: ['Triangle', 'Square', 'Circle'],
            name: 'shape'
        },
        {
            type: 'input',
            message: 'What color would you like the shape?',
            name: 'shapeColor',
            when: (answers) => {
                if (answers.colorMethod === 'Color Keyword') {
                    return true;
                }
                return false;
            }
        },
        {
            type: 'input',
            message: 'What color would you like the shape?',
            name: 'shapeColor',
            when: (answers) => {
                if (answers.colorMethod === 'Hexadecimal') {
                    return true;
                }
                return false;
            }
        }
    ])

    // function logoGenerator(answers) {

    //     if (answers.shape === 'Triangle') {
    //         let logo = new Triangle (answers.initials, answers.textColor, answers.shapeColor)
    //         return logo.render()
    //     } else if (answers.shape === 'Square') {
    //         let logo = new Square (answers.initials, answers.textColor, answers.shapeColor)
    //         return logo.render()
    //     } else {
    //         let logo = new Circle (answers.initials, answers.textColor, answers.shapeColor)
    //         return logo.render()
    //     }
    // }

    // function saveLogo(answers) {
    //     const customLogo = logoGenerator(answers)
    //     fs.writeFile("./examples/logo.svg", svg, () => console.info("Generated logo.svg"));
    // }

