

## username = 'admin' , password = 'password'
https://gamefusion-eight.vercel.app/

![SKETCH](https://github.com/user-attachments/assets/00cd521a-d724-4bea-9218-aecd1f6f988b)

Getting Started with Create React App
This project was bootstrapped with Create React App.

# Employee Management System
## Overview

The Employee Management System is a simple React-based web application designed to manage employee records efficiently. It provides features to register new employees, view their details, update information, and delete employees from the system. The application also supports admin login, where only authorized users can manage the employee data.

## Features
Admin Login: Only authenticated users (with specific credentials) can access the system to manage employees.
Employee Management: Add, update, view, and delete employees from the system.
Employee Search: Search for employees by their ID.
View Profile: See detailed information about each employee.
Deleted Employees: View previously deleted employees.
Persistent Data: Employee data is stored in the browser's localStorage, ensuring persistence across page reloads.
Project Structure
The project contains the following key components:

* SignIn Component: Handles the admin login functionality.
* Employees Component: Displays the current and deleted employees and provides actions to view or delete employees.
* Registration Component: A form that allows the admin to add new employees to the system.
* Profile Component: Displays detailed information about an employee with the option to edit and update their details.
* NavBar Component: Provides navigation between different views such as 'Employees' and 'Register'.
* Loader Component: Displays a loading animation during data processing.
* Notification Component: Shows feedback messages such as successful operations or error messages.

## Installation

1. Clone the repository
git clone https://github.com/oscarpoco/employee-management-system.git
cd employee-management-system

2. Install dependencies
npm install

3. Run the application: After the installation is complete, start the application.
npm start

Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


## Components Overview
1. App Component
The main entry point of the application that manages navigation and renders different views based on the currentView state.
Handles login, logout, employee operations (add, update, delete), and navigation.
2. SignIn Component
Displays a simple login form where the admin can log in using a predefined username and password (admin and password).
On successful login, the onLogin prop updates the login status and redirects to the Employees view.
3. Employees Component
Displays a list of current employees, allowing the admin to delete or view employee details.
The search box filters employees by their ID.
Displays a separate section for deleted employees.
4. Profile Component
Displays a selected employee's profile.
Allows editing and updating the employee’s details such as name, surname, email, ID, position, and phone number.
5. Registration Component
Allows the admin to add a new employee by filling out a form.
Once submitted, the employee is added to the list of current employees.
6. NavBar Component
Provides navigation between the "Employees" view and the "Registration" view.
Highlights the currently active button (either "EMPLOYEES" or "REGISTER").
Includes a logout button to log out of the admin account.
7. Loader Component
Displays a loading animation while employee data is being added, updated, or deleted.
8. Notification Component
Displays success or error messages to give feedback to the user after various actions.

### LocalStorage Usage
Employee data is persisted using localStorage. When employees are added, deleted, or updated, their data is stored in localStorage and reloaded on each page refresh. The same applies to the deleted employees.

## How to Use the App
Login:

Open the app in your browser and log in using the admin credentials (admin and password).
Employee Management:

View a list of current employees.
Add new employees through the Register form.
Search for employees by their ID.
Click on an employee's View button to view their profile and edit their details.
Delete employees, and view them later under the Deleted Employees section.
Profile Update:

Navigate to the employee's profile page, click on the Edit button, make the changes, and click Update to save the changes.
Sign Out:

Click on the Logout button to log out of the admin account.

## Contributing
Contributions, issues, and feature requests are welcome! Feel free to email me on 
okpoco15@gmail.com if you want to contribute.
