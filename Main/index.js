const inquirer = require('inquirer');
const departments = require('./routes/department');
const employees = require('./routes/employee');
const roles = require('./routes/role');

const startPrompts = () => {
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
                departments.viewAllDepartments();
                // GET FOR VIEWING
            }
            if (nextPrompt === 'Add a department') {
                // POST FOR ADD
                departments.addDepartment();
            }

            // Employees
            if (nextPrompt === 'View all employees') {
                employees.viewAllEmployees();
                // GET FOR VIEWING
            }
            if (nextPrompt === 'Add an employee') {
                employees.addEmployee();
                // POST FOR ADD
            }
            if (nextPrompt === 'Update empolyee role') {
                employees.updateEmployeeRole();
                // PUT FOR UPDATE
            }

            // Roles
            if (nextPrompt === 'View all roles') {
                roles.viewAllRoles();
                // GET FOR VIEWING
            }
            if (nextPrompt === 'Add a role') {
                roles.addRole();
                // POST FOR ADD
            }

            // Quit
            if (nextPrompt === 'Quit') {
                process.quit();
            }
        })
}

module.exports = startPrompts;
