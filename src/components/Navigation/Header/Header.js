import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Layout/Logo/Logo';
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import BasketButton from "../BasketButton/BasketButton";
import { AuthContext } from '../../Layout/Auth/auth-context';

const header = props => {
    const auth = useContext(AuthContext);
    let fontSize = null;
    let crit = "(max-width: 700px)";
    let mobile = window.matchMedia(crit).matches

    if (mobile) {
        fontSize = '2em'
    } else {
        fontSize = '4em'
    };

    let links = (
        <>
            <NavLink to="/login" className='auth' activeClassName="active">Zaloguj się</NavLink>
            <NavLink to="/signup" className='auth' activeClassName="active">Załóż konto</NavLink>
        </>
    );

    if (auth.isLoggedIn) {
        links = (
            <>
                <NavLink to="/" className='auth' onClick={auth.logout} activeClassName="active">wyloguj się</NavLink>
                <p> Moje konto</p>
            </>
        );
    }

    return (
        <div className='header'>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <Logo fontSize={fontSize} />
            <BasketButton basket={props.basket} totalPrice={props.totalPrice} height='2em' width='4em' />
            {links}
        </div>
    );
};

export default header;