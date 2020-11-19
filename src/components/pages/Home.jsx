import React, { useState } from 'react';
import { EmployeeTable, Employee } from '../EmployeeTable';

export default function Home() {
    const [employees, setEmployees] = useState([
        new Employee(1, 'John', 'Doe', 'Accounting', 'Accountant'),
        new Employee(2, 'Adrian', 'Arms', 'Engineering', 'Tech Lead'),
    ]);

    return (
        <main>
            <h1>Employee Directory</h1>
            <EmployeeTable employees={employees} />
        </main>
    );
}