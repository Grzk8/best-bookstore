import React from 'react';

const input = (props) => {

let inputElement = null;
const inputClasses = ['input'];

if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push('invalid');
}
switch (props.inputtype) {
    case('input'):
        inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} onChange={props.changed} value={props.value} />;
        break;
    case('select'):
        inputElement = (
            <select className={inputClasses.join(' ')} onChange={props.changed} value={props.value} >{
                props.elementConfig.options.map(option=> (
                 <option key={option.value} 
                    value={option.value}>
                        {option.displayValue}</option>
            ))
        }</select>);
        break;
    case('textarea'):
        inputElement = <textarea className={inputClasses.join(' ')} {...props.elementConfig} onChange={props.changed} value={props.value} />;
        break;
    default:
        inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} onChange={props.changed} value={props.value} />;
}
    return (<>
        
        {inputElement}
    </>)
}

export default input;