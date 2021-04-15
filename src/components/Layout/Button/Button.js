import React from 'react';

const button = (props) => (
    <button
    onClick={props.clicked}
    className='btn'>{props.children}</button>
);

export default button;