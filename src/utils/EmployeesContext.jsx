import React from 'react';

class Employee {
    constructor(id, firstName, lastName, department, role, managerId) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
        this.role = role;
        this.managerId = managerId;
    }
}

const EmployeesContext = React.createContext([]);

export {
    Employee,
    EmployeesContext
};