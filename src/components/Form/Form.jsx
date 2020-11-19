import React from 'react';

// This is probably an anti-pattern
function Form(props) {
    return (
        <form>
            {props.children}
        </form>
    );
}

function FormGroup(props) {
    return (
        <div className="form-group">
            {props.children}
        </div>
    )
}

export {
    Form,
    FormGroup
};