import React from 'react';
import {NavLink} from 'react-router-dom';

const Logo = (props) => {
    return (
        <div className='logo'>       
            <NavLink to="/" activeClassName="active" style={{fontSize: props.fontSize}}>
                <span className="logoColor1">Best</span>
                <span className="logoColor2">BooK</span >
                <span className="logoColor1">Store</span>
            </NavLink></div>
    );
};

export default Logo;