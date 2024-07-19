
import './App.css';
import SignIn from './components/signIn';
import Employees from './components/employees';
import Registration from './components/registration';
import Profile from './components/profile';
import SideButton from './components/sideButton';
import NavBar from './components/navBar';




function App() {
  return (
    <div className="App">

      {/* SIDEBAR */}
      <aside>
        <div className='name'>
          <div className='gamefusion'><p>GAME<span>FUSION</span></p></div>
        </div>
      </aside>
      {/* ENDS */}



      {/* MAIN */}
      <main>
        <nav>
          <NavBar />
        </nav>
        <div className='content'>
          <SignIn />
          {/* <Employees /> */}
          {/* <Registration /> */}
          {/* <Profile /> */}
        </div>
        
      </main>
      {/* ENDS */}


      {/* SIDEBAR */}
      {/* <div className='sidebar'>

      </div> */}
      {/* ENDS */}
    </div>
  );
}

export default App;
