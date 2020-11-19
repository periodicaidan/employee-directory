import React from 'react';

export default function TData(props) {
    return (
        <td className={props.context && `table-${props.context}`}>
            {props.children}
        </td>
    );
}