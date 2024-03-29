import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Auth/auth-context';

const UserButton = props => {
    const auth = useContext(AuthContext);
    let logged = auth.isLoggedIn;

    let button = 'Zaloguj się'
    if (auth.isLoggedIn) {
        button = 'Moje konto'
    }

    return (logged ?
        <div className='user' onClick={props.sublistToggleClicked} >
            <div className="userLogo" style={{ height: props.height, width: props.width }}></div>
            <p className="userLogo-button"> {button} </p>
        </div> :
        <NavLink to="/login" className='user' activeClassName="active" onClick={props.sublistToggleClicked}>
            <div className="userLogo" style={{ height: props.height, width: props.width }}></div>
            <p className="userLogo-button"> {button} </p>
        </NavLink>
    )
};

export default UserButton;