import './signIn.css';
import Notification from './notification';
import { useState } from 'react';

function SignIn({ onLogin }){


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [notification, setNotification] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        
      
        if (username === 'admin' && password === 'password') {
            onLogin();
            setNotification('Successfully logged in');
            setTimeout(() => setNotification(''), 2000); 
        } else {
            setNotification('Invalid credentials');
            setTimeout(() => setNotification(''), 3000); 
        }
    };

    return(
        <div className='form-box'>
            <div className='sign-in-form'>
                <div className='admin'>ADMIN LOGIN</div>
                <form onSubmit={handleLogin}>
                    <input type='text' id='username' placeholder='Username' onChange={(e) => setUsername(e.target.value)} required></input>
                    <input type='password' id='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} required></input>
                    <button>LOGIN</button>
                    {notification && <Notification message={notification} type="success" />}
                </form>
            </div>
            <div className='logo-box'>
                <img src='admin.jpeg' alt='logo'></img>
            </div>
        </div>
    )    
    
}






export default SignIn;