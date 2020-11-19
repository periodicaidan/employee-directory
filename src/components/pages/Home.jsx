import React, { useState } from 'react';
import AddEmployeeModal from '../AddEmployeeModal';
import { EmployeeTable, Employee } from '../EmployeeTable';

export default function Home() {
    const [employees, setEmployees] = useState([
        new Employee(1, 'John', 'Doe', 'Accounting', 'Accountant'),
        new Employee(2, 'Adrian', 'Arms', 'Engineering', 'Tech Lead'),
    ]);

    return (
        <main>
            <h1>Employee Directory</h1>
            <button className="btn btn-primary" data-toggle="modal" data-target="#addEmployeeModal">Add Employee</button>
            <EmployeeTable employees={employees} />
            <AddEmployeeModal 
                employees={employees} 
                onComplete={newEmployee => setEmployees([...employees, { id: employees.length + 1, ...newEmployee }])} 
            />
        </main>
    );
}