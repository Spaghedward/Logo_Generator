const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');
const colors = require('./lib/colors');

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
            

        },
        {
            type: 'list',
            message: 'What shape would you like your logo to be?',
            choices: ['Triangle', 'Square', 'Circle'],
            name: 'shape'
        },
        {
            type: 'prompt',
            message: 'What color would you like the shape? Enter a color or hexadecimal color code.',
            name: 'shapeColor'
        }
    ])

