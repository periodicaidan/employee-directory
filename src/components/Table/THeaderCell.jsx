import React from 'react';

export default function THeaderCell(props) {
    return (
        <th onClick={props.onClick}>
            {props.children}
        </th>
    )
}