import React, { useState } from 'react'
import { Link } from 'react-router-dom';  
import '../cssFolder/AddEmployee.css'


export default function AddEmployee({addEmp}) {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState('');
    const [employeeAddedMessage, setEmployeeAddedMessage] = useState(false)

    const handleSubmitAdd = () =>{

        if (!name || !id || !position || !salary) {
            alert("Everything must be filled");
            return;
        }
        const newEmp ={
            id: id,
            name: name,
            position: position,
            salary: parseFloat(salary),

        }

        addEmp(newEmp) //from App.js

        setEmployeeAddedMessage(true);
        //this clears the inputs
        setName('');    
        setId('');
        setPosition('');
        setSalary('');
    }

  return (
    <div className="add-employee">
         
        <h1>Add Employee</h1>

        <Link to="/EmployeeList">
          <button type="button" className="add-button">Back</button>
        </Link>

        <div className='employee'>
            <div className="employee-form">

                <p>Name</p>
                <input className="input" value={name} onChange={(event) => setName(event.target.value)} />

                <p>ID</p>
                <input className="input" value={id} onChange={(event) => setId(event.target.value)} />

                <p>Position</p>
                <input className="input" value={position} onChange={(event) => setPosition(event.target.value)} />

                <p>Salary</p>
                <input className="input" type="number" value={salary} onChange={(event) => setSalary(event.target.value)} />

                <button className="input" type="button" onClick={handleSubmitAdd}>Add Employee</button>

            </div>

        {employeeAddedMessage && (
          <p>
            Employee added successfully!
          </p>
        )}
        
        </div>
        
    </div>
  )
}
