import React from 'react';

const input = (props) => {

let inputElement = null;

switch (props.inputtype) {
    case('input'):
        inputElement = <input {...props.elementConfig} onChange={props.changed} value={props.value} />;
        break;
    case('select'):
        inputElement = (
            <select onChange={props.changed} value={props.value} >{
                props.elementConfig.options.map(option=> (
                 <option key={option.value} 
                    value={option.value}>
                        {option.displayValue}</option>
            ))
        }</select>);
        break;
    case('textarea'):
        inputElement = <textarea {...props.elementConfig} onChange={props.changed} value={props.value} />;
        break;
    default:
        inputElement = <input {...props.elementConfig} onChange={props.changed} value={props.value} />;
}
    return (<>
        
        {inputElement}
    </>)
}

export default input;