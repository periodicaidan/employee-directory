import React from 'react';
import { FormGroup } from './Form';

/**
 * A dropdown menu with an optional label
 */
export default function Select(props) {
    return (
        <FormGroup>
            {props.label && <label htmlFor={props.name}>{props.label}</label>}
            <select 
                name={props.name} 
                id={props.name} 
                onChange={props.onChange} 
                value={props.value}
                defaultValue={props.defaultValue}
            >
                {props.children}
            </select>
        </FormGroup>
    );
}