import React, { useState, useContext } from 'react';
import { Input, Select } from './Form';
import { EmployeesContext } from '../utils/EmployeesContext'

export default function AddEmployeeModal(props) {
    const employees = useContext(EmployeesContext);
    const [employeeState, setEmployeeState] = useState({
        firstName: '',
        lastName: '',
        department: '',
        role: '',
        managerId: undefined
    });

    const clearFields = () => {
        setEmployeeState({
            firstName: '',
            lastName: '',
            department: '',
            role: '',
            managerId: undefined
        });
    }

    const saveEmployee = employee => {
        props.onComplete(employee);
        clearFields();
    }

    return (
        <div className="modal" id="addEmployeeModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4>Add Employee</h4>
                    </div>
                    <div className="modal-body">
                        <form>
                            <Input onChange={e => setEmployeeState({ ...employeeState, firstName: e.target.value })} value={employeeState.firstName} name="firstName" label="First Name" />
                            <Input onChange={e => setEmployeeState({ ...employeeState, lastName: e.target.value })} value={employeeState.lastName} name="lastName" label="Last Name" />
                            <Input onChange={e => setEmployeeState({ ...employeeState, department: e.target.value })} value={employeeState.department} name="department" label="Department" />
                            <Input onChange={e => setEmployeeState({ ...employeeState, role: e.target.value })} value={employeeState.role} name="role" label="Role" />
                            <Select onChange={e => setEmployeeState({ ...employeeState, managerId: parseInt(e.target.value) })} value={employeeState.managerId} name="manager">
                                <option value={undefined} selected>-- None --</option>
                                {
                                    employees
                                        .map(e => <option value={e.id}>{e.firstName} {e.lastName}</option>)
                                }
                            </Select>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button onClick={e => saveEmployee(employeeState)} className="btn btn-success" data-dismiss="modal">Save</button>
                        <button className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}