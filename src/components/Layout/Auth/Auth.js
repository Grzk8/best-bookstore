import React from "react";
import { NavLink } from 'react-router-dom';

const Auth = () => {

    return <>
        <NavLink to="/login" className='auth' activeClassName="active">Zaloguj się</NavLink>
        <NavLink to="/signup" className='auth' activeClassName="active">Załóż konto</NavLink>
    </>
};
export default Auth;