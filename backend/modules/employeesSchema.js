const mongoose = require('mongoose');

const employeesSchema = new mongoose.Schema({
    employeeID: {
        type: String,
        required: true,
        unique: true
    },
    first_name: {
        type: String, 
        required: true, 
    },
    last_name: {
        type: String, 
        required: true, 
    },
    email: {
        type: String, 
        required: true, 
        unique: true
    },
    position: {
        type: String, 
        required: true, 
    }, 
    salary: {
        type: String, 
        required: true, 
    }, 
    date_of_joining: {
        type: String, 
        required: true, 
    }, 
    department: {
        type: String, 
        required: true, 
    }
    }, 
    { 
        timestamps: true 
});


const Employee = mongoose.model('Employee', employeesSchema);

module.exports = Employee;