import React from 'react';

const input = (props) => {

let inputElement = null;

switch (props.inputType) {
    case('input'):
        inputElement = <input {...props}/>;
        break;
    case('select'):
        inputElement = <select {...props}/>;
        break;
    case('textarea'):
        inputElement = <textarea {...props}/>;
        break;
    default:
        inputElement = <input {...props}/>;
}
    return (<>
        <label>{props.label}</label>
        {inputElement}
    </>)
}

export default input;