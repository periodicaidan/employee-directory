import React from 'react';
import { FormGroup } from './Form';

export default function Select(props) {
    return (
        <FormGroup>
            {props.label && <label htmlFor={props.name}>{props.label}</label>}
            <select 
                name={props.name} 
                id={props.name} 
                onChange={props.onChange} 
                value={props.value}
            >
                {props.children}
            </select>
        </FormGroup>
    );
}