
import './navBar.css';

function NavBar({ onNavigate, onSignOut, currentView}){

    
    return(
        <div className='myNav'>
            
            <div className='navigate-button'>
                <button className= {currentView === 'employees' ? 'active' : ''}
                onClick={() => onNavigate('employees')}>EMPLOYEES</button>

                <button className= {currentView === 'registration' ? 'active' : ''}
                onClick={() => onNavigate('registration')}>REGISTER</button>
            </div>

            <div className='logout-button'>
                <button onClick={onSignOut}>LOGOUT</button>
            </div>
        </div>
    )
}

export default NavBar;
