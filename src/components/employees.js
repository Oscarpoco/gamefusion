import React from 'react';
import {useState, useEffect} from "react";
import './employees.css';

function Employees({ employees, onDeleteEmployee, onViewEmployee,deletedEmployees }) {

  const [searchId, setSearchId] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  useEffect(() => {
    setFilteredEmployees(employees);
  }, [employees]);

  const handleSearch = () => {
    if (searchId) {
      const result = employees.filter(employee => employee.id.includes(searchId));
      setFilteredEmployees(result);
    } else {
      setFilteredEmployees(employees);
    }
  };

  return (
    <div className='employees-box'>
      <div className='current-employees'>
        <div className='employees'>
          <div className='title'>CURRENT EMPLOYEES</div>
          <div className='search-box'>
            <input 
              type='text' 
              placeholder='Search by ID' 
              value={searchId} 
              onChange={(e) => setSearchId(e.target.value)} 
            ></input>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className='employees-table'>
            {filteredEmployees.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>ID Number</th>
                    <th>Position</th>
                    <th>Phone</th>
                    <th>Image</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.map((employee, index) => (
                    <tr key={index}>
                      <td>{employee.name}</td>
                      <td>{employee.surname}</td>
                      <td>{employee.email}</td>
                      <td>{employee.id}</td>
                      <td>{employee.position}</td>
                      <td>{employee.phone}</td>
                      <td><img src={employee.image} alt='employee'/></td>
                      <td>
                        <button onClick={() => onViewEmployee(employee)}>View</button>
                        <button onClick={() => onDeleteEmployee(index)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No current employees.</p>
            )}
          </div>
        </div>
      </div>

      <div className='previous-employees'>
        <div className='deleted-employees'>
          <div className='title'>PREVIOUS EMPLOYEES</div>
          <div className='employees-table'>
            {deletedEmployees.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>ID Number</th>
                    <th>Position</th>
                    <th>Phone</th>
                    <th>Image</th>
                  </tr>
                </thead>
                <tbody>
                  {deletedEmployees.map((employee, index) => (
                    <tr key={index}>
                      <td>{employee.name}</td>
                      <td>{employee.surname}</td>
                      <td>{employee.email}</td>
                      <td>{employee.id}</td>
                      <td>{employee.position}</td>
                      <td>{employee.phone}</td>
                      <td><img src={employee.image} alt='employee' width='50' /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No previous employees.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employees;
