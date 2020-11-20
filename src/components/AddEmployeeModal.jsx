import React, { useState, useContext } from 'react';
import { Input, Select } from './Form';
import EmployeesContext from '../utils/EmployeesContext'

/**
 * A modal containing a form for adding an employee to the table
 * 
 * Takes an `onComplete` property, which is a callback that is called when the "Save"
 * button is clicked and shall perform some logic on the data entered in the fields.
 */
export default function AddEmployeeModal(props) {
    const employees = useContext(EmployeesContext);

    // This will represent the fields of the form
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
                            <Input 
                                name="firstName" 
                                label="First Name" 
                                onChange={e => setEmployeeState({ ...employeeState, firstName: e.target.value })} 
                                value={employeeState.firstName} 
                            />
                            <Input 
                                name="lastName" 
                                label="Last Name" 
                                onChange={e => setEmployeeState({ ...employeeState, lastName: e.target.value })}   
                                value={employeeState.lastName} 
                            />
                            <Input 
                                name="department" 
                                label="Department" 
                                onChange={e => setEmployeeState({ ...employeeState, department: e.target.value })} 
                                value={employeeState.department} 
                            />
                            <Input 
                                name="role" 
                                label="Role" 
                                onChange={e => setEmployeeState({ ...employeeState, role: e.target.value })}
                                value={employeeState.role} 
                            />
                            <Select 
                                name="manager"
                                label="Manager"
                                /* managerId is the only field that needs to be an int. The way I set this up, `parseInt` should never fail when not desired. */
                                onChange={e => setEmployeeState({ ...employeeState, managerId: parseInt(e.target.value) })} 
                                value={employeeState.managerId} 
                                defaultValue={undefined}
                            >
                                <option value={undefined}>-- None --</option>
                                {employees.map(e => <option value={e.id}>{e.firstName} {e.lastName}</option>)}
                            </Select>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <small className="text-danger">NB: Employees added through this form will not persist</small>
                        <button onClick={e => saveEmployee(employeeState)} className="btn btn-success" data-dismiss="modal">Save</button>
                        <button className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}