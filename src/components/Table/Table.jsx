import React from 'react';

export default function Table(props) {
    const { dark, striped, bordered, hoverable, small } = props;
    const tableClasses = [
        [true, 'table'],
        [dark, 'dark'],
        [striped, 'striped'],
        [bordered, 'bordered'],
        [hoverable, 'hover'],
        [small, 'sm']
    ].reduce((acc, next) => {
        const [prop, value] = next;
        return prop ? acc + ` table-${value}` : acc;
    });

    return (
        <table className={tableClasses}>
            {props.children}
        </table>
    );
}