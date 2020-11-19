import React, { useState } from 'react';
import { Table, THead, TRow, TData, THeaderCell } from './Table';

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

function compareEmployeesBy(key, e1, e2) {
    const p1 = e1[key];
    const p2 = e2[key];

    if (typeof p1 === 'string') {
        return (p1 > p2) ? 1 : -1;
    } else if (typeof p1 === 'number') {
        return p1 - p2;
    }

    return 0;
}

function EmployeeTable(props) {
    const [sortBy, setSortBy] = useState('id');

    return (
        <Table striped hoverable>
            <THead>
                <TRow>
                    <THeaderCell onClick={e => setSortBy('id')}>ID</THeaderCell>
                    <THeaderCell onClick={e => setSortBy('firstName')}>First Name</THeaderCell>
                    <THeaderCell onClick={e => setSortBy('lastName')}>Last Name</THeaderCell>
                    <THeaderCell onClick={e => setSortBy('department')}>Department</THeaderCell>
                    <THeaderCell onClick={e => setSortBy('role')}>Role</THeaderCell>
                    <THeaderCell onClick={e => setSortBy('managerId')}>Manager ID</THeaderCell>
                </TRow>
            </THead>
            <tbody>
                {
                    props.employees
                        .sort((e1, e2) => compareEmployeesBy(sortBy, e1, e2))
                        .map(e => 
                            <TRow>
                                <TData>{e.id}</TData>
                                <TData>{e.firstName}</TData>
                                <TData>{e.lastName}</TData>
                                <TData>{e.department}</TData>
                                <TData>{e.role}</TData>
                                <TData>{e.managerId}</TData>
                            </TRow>
                        )
                }
            </tbody>
        </Table>
    );
}

export {
    Employee,
    EmployeeTable
};