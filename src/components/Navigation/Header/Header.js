import React from 'react';
import Logo from '../../Layout/Logo/Logo';
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import BasketButton from "../BasketButton/BasketButton";

const header = props => {

    let fontSize = null;
    let crit = "(max-width: 700px)";
    let mobile = window.matchMedia(crit).matches

    if (mobile) {
        fontSize = '2em'
    } else {
        fontSize = '4em'
    };

    return (
        <div className='header'>

            <DrawerToggle clicked={props.drawerToggleClicked} />
            <Logo fontSize={fontSize} />
            <BasketButton basket={props.basket} totalPrice={props.totalPrice} height='2em' width='4em' />
        </div>
    );
};

export default header;