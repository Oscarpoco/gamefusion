
import './App.css';
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import SignIn from './components/signIn';
import Employees from './components/employees';
import Registration from './components/registration';




function App() {
  return (
    <div className="App">

      {/* SIDEBAR */}
      <aside>
        <div className='name'>
          <h1>G</h1>
          <h1>A</h1>
          <h1>M</h1>
          <h1>E</h1>
          <h1>F</h1>
          <h1>U</h1>
          <h1>S</h1>
          <h1>I</h1>
          <h1>O</h1>
          <h1>N</h1>
        </div>
      </aside>
      {/* ENDS */}



      {/* MAIN */}
      <main>
        {/* <SignIn /> */}
        {/* <Employees /> */}
        <Registration />
      </main>
      {/* ENDS */}


      {/* FOOTER */}
      <footer>
        <div className='icons'>
          <FaFacebookF className='icon'/>
          <RiInstagramFill className='icon'/>
          <FaTwitter className='icon'/>
          <BsLinkedin className='icon'/>
        </div>
      </footer>
      {/* ENDS */}
    </div>
  );
}

export default App;
