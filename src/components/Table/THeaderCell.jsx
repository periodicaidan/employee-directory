import React from 'react';

export default function THeaderCell(props) {
    // For this implementation, I'm giving headers an onClick event for sorting the table by the clicked column
    return (
        <th onClick={props.onClick}>
            {props.children}
        </th>
    )
}