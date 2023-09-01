const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'list',
            name: 'workplace',
            message: 'What would you like to do?',
            choices: [
                'View all employees',
                'Add employee',
                'Update empolyee role',
                'view all roles',
                'Add role',
                'View all departments',
                'Add department',
                'Quit'
            ]
        }
    ])
    .then((answers) => {
        
        
    })