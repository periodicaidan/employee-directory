import React, { useState, useContext } from 'react';
import { Table, THead, TRow, TData, THeaderCell } from './Table';
import EmployeesContext from '../utils/EmployeesContext';

/**
 * Compares two employees according to the provided field
 */
function compareEmployeesBy(field, e1, e2) {
    const p1 = e1[field];
    const p2 = e2[field];

    // The fields of an employee are either a string or a number
    if (typeof p1 === 'string') {
        // Subtracting between strings is not a thing you can do in JS
        // Why ECMA don't just define it as something like this is beyond me
        return (p1 > p2) ? 1 : -1;
    } else if (typeof p1 === 'number') {
        return p1 - p2;
    }

    return 0;
}

export default function EmployeeTable(props) {
    // We're tracking the sorting criterion inside this component
    const [sortBy, setSortBy] = useState('id');

    // ...while the list of employees is provided
    const employees = useContext(EmployeesContext);

    return (
        <Table striped hoverable>
            <THead>
                <TRow>
                    <THeaderCell onClick={e => setSortBy('id')}>ID</THeaderCell>
                    <THeaderCell onClick={e => setSortBy('firstName')}>First Name</THeaderCell>
                    <THeaderCell onClick={e => setSortBy('lastName')}>Last Name</THeaderCell>
                    <THeaderCell onClick={e => setSortBy('department')}>Department</THeaderCell>
                    <THeaderCell onClick={e => setSortBy('role')}>Role</THeaderCell>
                    <THeaderCell onClick={e => setSortBy('managerId')}>Manager</THeaderCell>
                </TRow>
            </THead>
            <tbody>
                {
                    employees
                        .sort((e1, e2) => compareEmployeesBy(sortBy, e1, e2))
                        .map(e => {
                            // The "Manager" column should display a manager's full name rather than their ID
                            const manager = e.managerId && employees.filter(m => m.id === e.managerId)[0];
                            return ( 
                                <TRow>
                                    <TData>{e.id}</TData>
                                    <TData>{e.firstName}</TData>
                                    <TData>{e.lastName}</TData>
                                    <TData>{e.department}</TData>
                                    <TData>{e.role}</TData>
                                    <TData>{manager && `${manager.firstName} ${manager.lastName}`}</TData>
                                </TRow>
                            )                        
                        })
                }
            </tbody>
        </Table>
    );
}