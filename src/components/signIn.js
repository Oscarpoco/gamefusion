import './signIn.css'

function SignIn(){

    return(
        <div className='form-box'>
            <div className='sign-in-form'>
                <div className='admin'>ADMIN LOGIN</div>
                <form>
                    <input type='text' id='username' placeholder='Username' required></input>
                    <input type='password' id='password' placeholder='Password' required></input>
                    <button>LOGIN</button>
                </form>
            </div>
            <div className='logo-box'>
                <img src='admin.jpeg' alt='logo'></img>
            </div>
        </div>
    )    
    
}






export default SignIn;