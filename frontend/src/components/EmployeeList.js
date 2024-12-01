import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../cssFolder/EmployeeList.css'

  export default function EmployeeList({employees}) {
    const [search, setSearch] = useState(''); 

    const searchEmployee = employees.filter((employee) =>
      employee.position.includes(search.toLowerCase())
    )
    return (
      <div>
        <h1>Employee List</h1>

        <div>
          <input type='text'
          placeholder='search for employee by position'
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className='search'
          />

        <button className='add-button' onChange={searchEmployee}>Search</button>
        </div>

        <Link to="/AddEmployee">
          <button type="button" className="add-button">Add Employee</button>
        </Link>

        <div className="employee">

          <div className="table-title">
            
            <span>Employee Name</span>
            <span>Employee ID</span>
            <span>Position</span>
            <span>Salary</span>
            <span>Action</span>

          </div>

          {employees.length === 0}
          {employees.map((employee) => (

            <div className="table-row" key={employee.id}>

              <span>{employee.name}</span>
              <span>{employee.id}</span>
              <span>{employee.position}</span>
              <span>${employee.salary.toLocaleString()}</span>
              
              <span className="actions">

              <Link to={`/ViewEmployee/${employee.id}`}>
                <button type='button'>View</button>
              </Link> 
              <Link to={`/updateEmployee/${employee.id}`}>
                <button type='button'>Update</button>
              </Link>
              <Link to={`/DeleteEmployee/${employee.id}`}>
                <button type='button'>Delete</button>
              </Link>
              </span>
            
            </div>
          ))}

        </div>
      </div>
    );
}
