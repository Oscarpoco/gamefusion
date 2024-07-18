import './registration.css';

function Registration(){

    return(
        <div className='registration-box'>
            <div className='form-title'>REGISTER EMPLOYEE</div>
            <form>
                <input type="text" id='name' placeholder='Name' required></input>
                <input type="text" id='surname' placeholder='Surname' required></input>
                <input type="email" id='email' placeholder='E-mail' required></input>
                <input type="text" id='id' pattern="(\d{13})" maxlength="13"  placeholder='ID number' required></input>
                <input type="text" id='position' placeholder='Position' required></input>
                <input type="tel" pattern="(\+27\d{9}|0\d{9})" placeholder='Eg. +27 660 850 741  /  066 0850 741' maxlength="12" required></input>
                <input type="file" name='image' id='image' accept='image' required></input>
                <button>SUBMIT</button>
            </form>
        </div>

    )
}

export default Registration;