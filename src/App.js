import { useState, useEffect } from 'react';
import './App.css';
import SignIn from './components/signIn';
import Employees from './components/employees';
import Registration from './components/registration';
import Profile from './components/profile';
import NavBar from './components/navBar';
import Loader from './components/Loader';
import Notification from './components/notification';





function App() {

  const [currentView, setCurrentView] = useState('signIn');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [deletedEmployees, setDeletedEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);
  const [notification, setNotification] = useState('');

  // FOR REFRESHING PURPOSE
  setTimeout(()=>{
    setIsLoading(false);
  }, 1000)



   // Check login status on component mount
   useEffect(() => {
    const loggedIn = window.localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    setCurrentView(loggedIn ? 'employees' : 'signIn');
    }, []);

  
  // Load employees from localStorage
   useEffect(() => {
    
    const storedEmployees = window.localStorage.getItem('employees');
    if (storedEmployees){ 
      setEmployees(JSON.parse(storedEmployees));
    }

    const storedDeletedEmployees = window.localStorage.getItem('deletedEmployees');
    if (storedDeletedEmployees){ 
      setDeletedEmployees(JSON.parse(storedDeletedEmployees));
    }
    console.log('loading',storedEmployees)
    console.log('loading deteted data',storedDeletedEmployees)
    
    
    }, []);

     // Save employees to localStorage
     useEffect(() => {
      console.log('saving data', employees)
      console.log('saving', deletedEmployees)
      setTimeout(()=>{
        window.localStorage.setItem('employees', JSON.stringify(employees));
        window.localStorage.setItem('deletedEmployees', JSON.stringify(deletedEmployees));
      })
      
    }, [employees, deletedEmployees]);
  
    // HANDLE ADD EMPLOYEES
    const handleAddEmployee = (employee) => {
      
      setIsLoading(true);

      setTimeout(()=>{
        setEmployees([...employees, employee]);
        setIsLoading(false);
        setNotification('Successfully added');
        setTimeout(() => setNotification(''), 2000); 
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
        setNotification('Successfully deleted');
        setTimeout(() => setNotification(''), 2000); 
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
      setIsLoading(true);

      setTimeout(()=>{
      setEmployees((prevEmployees) =>
        prevEmployees.map((emp) => (emp.id === updatedEmployee.id ? updatedEmployee : emp))
      );
      setSelectedEmployee(updatedEmployee);
      setIsLoading(false);
      setNotification('Successfully updated');
      setTimeout(() => setNotification(''), 2000); 
      }, 2000);
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
      setNotification('Successfully signed out');
      setTimeout(() => setNotification(''), 2000); 
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
            <NavBar onNavigate={handleNavigate} onSignOut={handleSignOut} setIsLoading={setIsLoading} currentView={currentView}/>
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

      {/* notification */}
      {notification && <Notification message={notification} type="error" />}

    </div>
  );
}

export default App;
