
import './navBar.css';

function NavBar({ onNavigate, onSignOut}){

    
    return(
        <div className='myNav'>
            <button onClick={() => onNavigate('employees')}>EMPLOYEES</button>
            <button onClick={() => onNavigate('registration')}>REGISTER</button>
            <button onClick={onSignOut}>SIGN OUT</button>
        </div>
    )
}

export default NavBar;
