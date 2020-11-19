import React from 'react';

export default function Table(props) {
    // I'm making the Bootstrap table types (table-dark, table-striped, etc) into 
    // toggles so it's easier to just make a table dark, striped, etc.
    const { dark, striped, bordered, hoverable, small } = props;

    // "fold" the table types into a single string that will be the class list for the table
    const tableClasses = [
        [dark, 'dark'],
        [striped, 'striped'],
        [bordered, 'bordered'],
        [hoverable, 'hover'],
        [small, 'sm']
    ].reduce(
        (acc, next) => {
            const [toggle, value] = next;
            return toggle ? acc + ` table-${value}` : acc;
        }, 
        // All Bootstrap tables need the table class to get styled
        // So I made it the initial value for reduce
        'table'
    );

    return (
        <table className={tableClasses}>
            {props.children}
        </table>
    );
}