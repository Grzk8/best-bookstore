import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Auth/auth-context';

const UserButton = props => {
    const auth = useContext(AuthContext);

    let button = 'Zaloguj się'
    if (auth.isLoggedIn) {
        button = 'Moje konto'
    }

    return (
        <NavLink to="/login" className='user' activeClassName="active" >
            <div className="userLogo" style={{ height: props.height, width: props.width }}></div>
            <p className="inBasket"> {button} </p>
        </NavLink>
    );
};

export default UserButton;