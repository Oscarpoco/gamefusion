import React, { useState } from 'react';
import './profile.css';

function Profile({employee, onUpdateEmployee}){

    const [isEditing, setIsEditing] = useState(false);
    const [editedEmployee, setEditedEmployee] = useState({ ...employee });



    // HANDLES THE CHANGE IN INPUTS
    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee((prev) => ({ ...prev, [name]: value }));
    };
    // ENDS



    // HANDLES THE EDIT AND AND UPDATES
    const handleEditClick = () => {
    if (isEditing) {
      onUpdateEmployee(editedEmployee);
    }
    setIsEditing(!isEditing);
    };
    // ENDS




    // MY PROFILE CONTENT
    return(

        <div className='profile-box'>
            <div className='profile-title'>PROFILE</div>
            <div className='profile'>
                <div className='img-circle'>
                    <img src={editedEmployee.image} alt='Employee' />
                </div>
                <div className='details-box'>
                    <div className='details'>
                    <p>Name: {isEditing ? <input type='text' name='name' value={editedEmployee.name} onChange={handleInputChange} /> : editedEmployee.name}</p>
                        <p>Surname: {isEditing ? <input type='text' name='surname' value={editedEmployee.surname} onChange={handleInputChange} /> : editedEmployee.surname}</p>
                        <p>Email: {isEditing ? <input type='email' name='email' value={editedEmployee.email} onChange={handleInputChange} /> : editedEmployee.email}</p>
                        <p>ID: {isEditing ? <input type='text' name='id' value={editedEmployee.id} onChange={handleInputChange} /> : editedEmployee.id}</p>
                        <p>Position: {isEditing ? <input type='text' name='position' value={editedEmployee.position} onChange={handleInputChange} /> : editedEmployee.position}</p>
                        <p>Phone: {isEditing ? <input type='tel' name='phone' value={editedEmployee.phone} onChange={handleInputChange} /> : editedEmployee.phone}</p>
                    </div>
                    <div className='button'>
                        <button onClick={handleEditClick}>{isEditing ? 'UPDATE' : 'EDIT'}</button>
                    </div>
                </div>
            </div>
        </div>
    ) 
    // ENDS
}
// FUCNTION ENDS

export default Profile;