import React from 'react';

export default function TRow(prosp) {
    return (
        <tr className={prosp.context && `table-${props.context}`}>
            {props.children}
        </tr>
    );
}