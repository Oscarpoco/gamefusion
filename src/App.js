
import './App.css';
import SignIn from './components/signIn';
import Employees from './components/employees';
import Registration from './components/registration';
import Profile from './components/profile';
import NavBar from './components/navBar';
import { useState, useEffect } from 'react';




function App() {

  const [currentView, setCurrentView] = useState('signIn'); // Initial view
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [deletedEmployees, setDeletedEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null); // Authentication state

   // Load employees from localStorage
   useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    const storedDeletedEmployees = JSON.parse(localStorage.getItem('deletedEmployees')) || [];
    setEmployees(storedEmployees);
    setDeletedEmployees(storedDeletedEmployees);
    }, []);

    // Save employees to localStorage
    useEffect(() => {
      localStorage.setItem('employees', JSON.stringify(employees));
      localStorage.setItem('deletedEmployees', JSON.stringify(deletedEmployees));
    }, [employees, deletedEmployees]);

    const handleAddEmployee = (employee) => {
      setEmployees([...employees, employee]);
    };

    const handleDeleteEmployee = (index) => {
      const employeeToDelete = employees[index];
      setDeletedEmployees([...deletedEmployees, employeeToDelete]);
      setEmployees(employees.filter((_, i) => i !== index));
    };

    const handleViewEmployee = (employee) => {
      setSelectedEmployee(employee);
      setCurrentView('profile');
    };

    const handleUpdateEmployee = (updatedEmployee) => {
      setEmployees((prevEmployees) =>
        prevEmployees.map((emp) => (emp.id === updatedEmployee.id ? updatedEmployee : emp))
      );
      setSelectedEmployee(updatedEmployee);
    };



  const renderContent = () => {
    switch (currentView) {
      case 'signIn':
        return <SignIn onLogin={() => { setIsLoggedIn(true); setCurrentView('employees'); }} />;
      case 'employees':
        return <Employees employees={employees} onDeleteEmployee={handleDeleteEmployee} onViewEmployee={handleViewEmployee} deletedEmployees={deletedEmployees} />;
      case 'registration':
        return <Registration onAddEmployee={handleAddEmployee} />;
      case 'profile':
        return <Profile employee={selectedEmployee} onUpdateEmployee={handleUpdateEmployee} />;
      default:
        return <SignIn onLogin={() => { setIsLoggedIn(true); setCurrentView('employees'); }} />;
    }
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setCurrentView('signIn');
  };



  return (
    <div className="App">
      
      {/* MAIN */}
      <main>
        

          <nav>
            <div className='name'>
              <div className='gamefusion'><p>GAME<span>FUSION</span></p></div>
            </div>
          {isLoggedIn && (
            <NavBar onNavigate={setCurrentView} onSignOut={handleSignOut} />
          )}
          </nav>
        
        

        <div className='content'>
          {renderContent()}
        </div>
        
      </main>
      {/* ENDS */}

    </div>
  );
}

export default App;
