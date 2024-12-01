import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import ViewEmployee from './components/ViewEmployee';
import React, { useState } from 'react';


function App() {

  const [employees, setEmployees] = useState([]); //array for employees

  const addEmp = (newEmp) =>{
    setEmployees([...employees, newEmp])
  }

    return (
      <div>
        <Router>
            <Routes>
                <Route path="/" element={<EmployeeList employees={employees}/>}/>
                <Route path="/AddEmployee" element={<AddEmployee addEmp={addEmp} />}/>
                <Route path="/ViewEmployee/:id" element={<ViewEmployee employees={employees}/>} />
                <Route path="/UpdateEmployee/:id" element={<UpdateEmployee />}/>
                <Route path="/DeleteEmployee/:id" element={<DeleteEmployee />}/>

            </Routes>
        </Router>

      </div>
    );
}

export default App;
