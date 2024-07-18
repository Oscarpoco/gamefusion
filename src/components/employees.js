import './employees.css';


function Employees(){

    return(

        <div className='employees-box'>
            <div className='current-employees'>
                <div className='employees'>
                    <div className='title'>CURRENT EMPLOYEES</div>
                    <div className='employees-table'></div>
                </div>
            </div>

            <div className='previous-employees'>
                <div className='deleted-employees'>
                    <div className='title'>PREVIOUS EMPLOYEES</div>
                    <div className='employees-table'></div>
                </div>
            </div>

        </div>
    )
}


export default Employees;