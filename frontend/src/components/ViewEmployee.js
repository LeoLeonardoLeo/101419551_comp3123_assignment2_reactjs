import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';  
import '../cssFolder/ViewEmployee.css'


export default function ViewEmployee({employees}) {
    const {id} = useParams();
    const [employee, setEmployee] = useState();
   
    useEffect(() => {
        //getting the employee by the id
        const emp = employees.find(emp => emp.id === id);
        setEmployee(emp);
      }, [id, employees]);
    
      if (!employee) {
        return <p>Employee not found</p>;
      }

    return (
    <div className='view'>
        
        <h1>View Employee</h1>

        <div className="link">
            <Link to="/EmployeeList" className="back-button">Back</Link>
        </div>

        <p>Name: {employee.name}</p>
        <p>ID: {employee.id}</p>
        <p>Position: {employee.position}</p>
        <p>Salary: ${employee.salary}</p>

    </div>
  )
}
