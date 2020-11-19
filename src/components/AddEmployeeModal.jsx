import React, { useState } from 'react';
import { Input, Select } from './Form';

export default function AddEmployeeModal(props) {
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
                            <Input onChange={e => setFirstName(e.target.value)} value={firstName} name="firstName" label="First Name" />
                            <Input onChange={e => setLastName(e.target.value)} value={lastName} name="lastName" label="Last Name" />
                            <Input onChange={e => setDepartment(e.target.value)} value={department} name="department" label="Department" />
                            <Input onChange={e => setRole(e.target.value)} value={role} name="role" label="Role" />
                            <Select onChange={e => setManagerId(parseInt(e.target.value))} value={managerId} name="manager">
                                <option value={undefined} selected>-- None --</option>
                                {
                                    props.employees
                                        .map(e => <option value={e.id}>{e.firstName} {e.lastName}</option>)
                                }
                            </Select>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button onClick={e => saveEmployee({ firstName, lastName, department, role, managerId })} className="btn btn-success" data-dismiss="modal">Save</button>
                        <button className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}