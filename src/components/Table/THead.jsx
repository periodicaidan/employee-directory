import React from 'react';

export default function THead(props) {
    let theadClass = '';
    if (props.dark) {
        theadClass = 'thead-dark';
    } else {
        theadClass = 'thead-light';
    }

    return (
        <thead className={theadClass}>
            {props.children}
        </thead>
    )
}