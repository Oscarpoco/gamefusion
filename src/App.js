import { useState, useEffect } from 'react';
import './App.css';
import SignIn from './components/signIn';
import Employees from './components/employees';
import Registration from './components/registration';
import Profile from './components/profile';
import NavBar from './components/navBar';





function App() {

  const [currentView, setCurrentView] = useState('signIn'); // Initial view
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [deletedEmployees, setDeletedEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null); 



   // Check login status on component mount
   useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    setCurrentView(loggedIn ? 'employees' : 'signIn');
    }, []);

  
  //  // Load employees from localStorage
   useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees !== null){ 
      setEmployees(JSON.parse(storedEmployees));
    }

    const storedDeletedEmployees = localStorage.getItem('deletedEmployees');
    if (storedDeletedEmployees !== null){ 
      setDeletedEmployees(JSON.parse(storedDeletedEmployees));
    }
    
    
    }, []);

     // Save employees to localStorage
     useEffect(() => {
      localStorage.setItem('employees', JSON.stringify(employees));
      localStorage.setItem('deletedEmployees', JSON.stringify(deletedEmployees));
    });
    

  

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

    // 
      // Handle login
  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    setCurrentView('employees');
  };

  // Handle sign-out
  const handleSignOut = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setCurrentView('signIn');
  };

    // 



  const renderContent = () => {
    switch (currentView) {
      case 'signIn':
        return <SignIn onLogin={ handleLogin } />;
      case 'employees':
        return <Employees employees={employees} onDeleteEmployee={handleDeleteEmployee} onViewEmployee={handleViewEmployee} deletedEmployees={deletedEmployees} />;
      case 'registration':
        return <Registration onAddEmployee={handleAddEmployee} />;
      case 'profile':
        return <Profile employee={selectedEmployee} onUpdateEmployee={handleUpdateEmployee} />;
      default:
        return <SignIn onLogin={ handleLogin }/>;
    }
  };

  



  return (
    <div className="App">
      
      {/* MAIN */}
      <main>
        

          <nav>
            <div className='name'>
              <div className='gamefusion'><p>GAME<span>FUXION</span></p></div>
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
