import React from 'react';
import { FormGroup } from './Form';

export default function Input(props) {
    return (
        <FormGroup>
            {props.label && <label htmlFor={props.name}>{props.label}</label>}
            <input
                type={props.type ?? 'text'}
                className="form-control"
                name={props.name}
                id={props.name}
                onChange={props.onChange}
                value={props.value}
            />
            {props.tip && <small className="form-text text-muted">{props.tip}</small>}
        </FormGroup>
    );
}