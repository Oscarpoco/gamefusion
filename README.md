# Employee Management System

## Overview
The Employee Management System is a React-based web application that provides comprehensive employee record management capabilities. Built with Create React App, this system allows authorized administrators to perform various employee management tasks through an intuitive web interface.

## 🔑 Key Features
- **Secure Authentication**: Admin-only access with protected routes
- **Complete Employee Management**: 
  - Add new employees
  - View employee profiles
  - Update employee information
  - Remove employees from the system
- **Search Functionality**: Quick employee lookup by ID
- **Deleted Records Management**: Access and review previously deleted employee records
- **Persistent Storage**: Data preservation using browser's localStorage
- **Responsive Design**: Works seamlessly across different screen sizes

## 🚀 Live Demo
Access the live application at: [https://gamefusion-eight.vercel.app/](https://gamefusion-eight.vercel.app/)

Default credentials:
- Username: `admin`
- Password: `password`

## 💻 Installation and Setup

1. Clone the repository:
```bash
git clone https://github.com/oscarpoco/employee-management-system.git
cd employee-management-system
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## 🏗️ Application Structure

### Core Components

1. **Authentication (SignIn)**
   - Handles user authentication
   - Manages protected routes
   - Maintains session state

2. **Employee Dashboard**
   - Displays employee listing
   - Provides search functionality
   - Shows active and deleted employee records

3. **Employee Management**
   - Registration form for new employees
   - Profile viewing and editing interface
   - Deletion confirmation system

4. **Navigation**
   - Responsive navigation bar
   - Quick access to main features
   - Session management (logout)

5. **Utility Components**
   - Loading indicators
   - Notification system
   - Confirmation dialogs

## 🛠️ Available Scripts

- `npm start`: Launches development server
- `npm test`: Runs test suite
- `npm run build`: Creates production build
- `npm run eject`: Ejects from Create React App

## 📱 Usage Guide

### Administrator Access
1. Navigate to the login page
2. Enter admin credentials
3. Access the dashboard

### Employee Management
1. **Adding Employees**
   - Click "Register" in navigation
   - Fill in employee details
   - Submit the form

2. **Viewing/Editing Profiles**
   - Locate employee in dashboard
   - Click "View" button
   - Make changes if needed
   - Save updates

3. **Removing Employees**
   - Find employee in listing
   - Click delete button
   - Confirm action
   - Access deleted records in separate section

### Data Management
- All data persists in localStorage
- Changes are immediate and preserved
- Deleted records are archived and accessible

## 🤝 Contributing

We welcome contributions! Please feel free to:

- Submit bug reports
- Propose new features
- Send pull requests
- Contact: okpoco15@gmail.com

## 🔧 Technical Details

### Storage
- Utilizes browser's localStorage
- Data persists across sessions
- Automatic state management

### Security
- Protected routes
- Authentication required
- Session management

### State Management
- React state hooks
- Local storage sync
- Real-time updates

## ⚠️ Important Notes

- This project uses Create React App's standard configuration
- Ejecting is optional and recommended only for advanced customization
- Maintain regular backups of localStorage data
- For production deployment, consider implementing a proper backend database
