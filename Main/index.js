const inquirer = require('inquirer');
const { viewAllDepartments, addDepartment } = require('./routes/department');
const { viewAllEmployees, updateEmployeeRole, addEmployee } = require('./routes/employee');
const { viewAllRoles, addRole } = require('./routes/role');

function startPrompts() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'options',
                message: 'What would you like to do?',
                choices: [
                    'View all employees',
                    'Add an employee',
                    'Update empolyee role',
                    'View all roles',
                    'Add a role',
                    'View all departments',
                    'Add a department',
                    'Quit'
                ]
            }
        ])
        .then((answers) => {
            const nextPrompt = answers.options;

            // Departments
            if (nextPrompt === 'View all departments') {
                viewAllDepartments;
            }
            if (nextPrompt === 'Add a department') {
                addDepartment;
            }

            // Employees
            if (nextPrompt === 'View all employees') {
                viewAllEmployees;
            }
            if (nextPrompt === 'Add an employee') {
                addEmployee;
            }
            if (nextPrompt === 'Update empolyee role') {
                updateEmployeeRole;
            }

            // Roles
            if (nextPrompt === 'View all roles') {
                viewAllRoles;
            }
            if (nextPrompt === 'Add a role') {
                addRole;
            }

            // Quit
            if (nextPrompt === 'Quit') {
                return;
            }
        })
}

module.exports = startPrompts;
