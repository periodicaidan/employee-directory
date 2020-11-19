import React from 'react';

export default function TRow(props) {
    return (
        <tr className={props.context && `table-${props.context}`}>
            {props.children}
        </tr>
    );
}