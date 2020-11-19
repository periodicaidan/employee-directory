import React from 'react';

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