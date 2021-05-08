import React from 'react';

const input = (props) => {

let inputElement = null;

switch (props.inputtype) {
    case('input'):
        inputElement = <input {...props.elementConfig} value={props.value}/>;
        break;
    case('select'):
        inputElement = <select {...props.elementConfig} value={props.value}/>;
        break;
    case('textarea'):
        inputElement = <textarea {...props.elementConfig} value={props.value}/>;
        break;
    default:
        inputElement = <input {...props.elementConfig} value={props.value}/>;
}
    return (<>
        <label>{props.elementConfig.label}</label>
        {inputElement}
    </>)
}

export default input;