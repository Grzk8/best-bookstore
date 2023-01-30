import React from 'react';

const background = (props) => (
    props.show ? <div className="background" onClick={props.clicked}></div> : null
);

export default background;