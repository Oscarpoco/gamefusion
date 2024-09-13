import { useState, useEffect } from 'react';
import './App.css';
import SignIn from './components/signIn';
import Employees from './components/employees';
import Registration from './components/registration';
import Profile from './components/profile';
import NavBar from './components/navBar';
import Loader from './components/Loader';





function App() {

  const [currentView, setCurrentView] = useState('signIn'); // Initial view
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [deletedEmployees, setDeletedEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);



   // Check login status on component mount
   useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    setCurrentView(loggedIn ? 'employees' : 'signIn');
    }, []);

  
  // Load employees from localStorage
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
  
    // HANDLE ADD EMPLOYEES
    const handleAddEmployee = (employee) => {
      
      setIsLoading(true);

      setTimeout(()=>{
        setEmployees([...employees, employee]);
        setIsLoading(false);
        alert('Successfully added');
      }, 2000);
    };
    // ENDS

    // HANDLE DELETE EMPLOYEE
    const handleDeleteEmployee = (index) => {

      setIsLoading(true);

      setTimeout(()=>{
        const employeeToDelete = employees[index];
        setDeletedEmployees([...deletedEmployees, employeeToDelete]);
        setEmployees(employees.filter((_, i) => i !== index));
        setIsLoading(false);
        alert('Successfully deleted');
      }, 2000);
      
    };
    // ENDS

    // HANDLE VIEW EMPLOYEE
    const handleViewEmployee = (employee) => {

      setIsLoading(true);

      setTimeout(()=>{
        setIsLoggedIn(true);
        setSelectedEmployee(employee);
        setCurrentView('profile');
        setIsLoading(false);
      }, 2000);
    };
    // ENDS


    // HANDLE UPDATE EMPLOYEE
    const handleUpdateEmployee = (updatedEmployee) => {
      setEmployees((prevEmployees) =>
        prevEmployees.map((emp) => (emp.id === updatedEmployee.id ? updatedEmployee : emp))
      );
      setSelectedEmployee(updatedEmployee);
    };
    // ENDS

    // Handle login
  const handleLogin = () => {
    setIsLoading(true);

    setTimeout(()=>{
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
      setCurrentView('employees');
      setIsLoading(false);
      alert('Successfully logged in');
    }, 2000)
  };

  // Handle sign-out
  const handleSignOut = () => {
    setIsLoading(true);

    setTimeout(()=>{
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
      setCurrentView('signIn');
      setIsLoading(false);
      alert('Successfully logged out');
    }, 2000)
  };

    // 



  const renderContent = () => {
    switch (currentView) {
      case 'signIn':
        return <SignIn onLogin={ handleLogin } />;
      case 'employees':
        return <Employees employees={employees} onDeleteEmployee={handleDeleteEmployee} onViewEmployee={handleViewEmployee} deletedEmployees={deletedEmployees} />;
      case 'registration':
        return <Registration onAddEmployee={handleAddEmployee} setCurrentView={setCurrentView}/>;
      case 'profile':
        return <Profile employee={selectedEmployee} onUpdateEmployee={handleUpdateEmployee} />;
      default:
        return <SignIn onLogin={ handleLogin }/>;
    }
  };

  const handleNavigate = (currentView) => {
    setIsLoading(true); 

    // Set the new view
    setCurrentView(currentView);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
            <NavBar onNavigate={handleNavigate} onSignOut={handleSignOut} setIsLoading={setIsLoading}/>
          )}
          </nav>
        
        

        <div className='content'>
          {renderContent()}
        </div>
        
      </main>
      {/* ENDS */}

      {/* POPUP */}
      {isLoading && (
        <Loader />
      )}

    </div>
  );
}

export default App;
