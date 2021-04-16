import React from 'react';
import Logo from '../../../Logo/Logo';
import MenuItems from './MenuItems/MenuItems';
import DrawerToggle from "../../SideDrawer/DrawerToggle/DrawerToggle";
import BasketButton from "../AsideMenu/BasketButton/BasketButton";


const mainMenu = props => {

    let fontSize = null;
    let crit = "(max-width: 700px)";
    let mobile = window.matchMedia(crit).matches

    if(mobile) {
        fontSize = '2em'
    } else {
        fontSize = '4em'
    };

    return(
    <div className='mainMenu'>
        <div className='mainMenu_container'>
            <DrawerToggle clicked={props.drawerToggleClicked}/>    
            <Logo fontSize={fontSize}/>
            <MenuItems />

        </div>
    </div>
    )};

export default mainMenu;