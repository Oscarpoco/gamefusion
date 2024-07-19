import './profile.css';

function Profile(){

    return(

        <div className='profile-box'>
            <div className='profile-title'>PROFILE</div>
            <div className='profile'>
                <div className='img-circle'></div>
                <div className='details-box'>
                    <div className='details'></div>
                    <div className='button'><button>EDIT</button></div>
                </div>
            </div>
        </div>
    )
}

export default Profile;