import React, { useState } from 'react';
import AddEmployeeModal from '../AddEmployeeModal';
import EmployeeTable from '../EmployeeTable';
import { EmployeesContext, Employee } from '../../utils/EmployeesContext';
import employeeList from '../../data/employees.json';

/**
 * The home page of the app
 */
export default function Home() {
    // Initial list of employees
    const [employees, setEmployees] = useState(employeeList);

    // Statelessly appends to the employees list
    const addEmployee = newEmployee => 
        setEmployees([...employees, { id: employees.length + 1, ...newEmployee} ]);

    return (
        <main>
            <h1>Employee Directory</h1>
            <button className="btn btn-primary" data-toggle="modal" data-target="#addEmployeeModal">Add Employee</button>
            <EmployeesContext.Provider value={employees}>
                <EmployeeTable />
                <AddEmployeeModal onComplete={addEmployee} />
            </EmployeesContext.Provider>
        </main>
    );
}