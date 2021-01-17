import React from 'react';
import Logo from '../../../Logo/Logo';
import MenuItems from './MenuItems/MenuItems';
import DrawerToggle from "../../SideDrawer/DrawerToggle/DrawerToggle";
import BasketButton from "../AsideMenu/BasketButton/BasketButton";


const mainMenu = props => {
    let respLogo = window.matchMedia("(max-width: 700px)");
    let respBasket = null;
    let fontSize = '350%';
    if(respLogo.matches) {
        fontSize = '150%'
        respBasket = <BasketButton basket={props.basket}/>
    };
    return(
    <div className='mainMenu'>
        <div className='mainMenu_container'>
            <DrawerToggle clicked={props.drawerToggleClicked}/>    
            <Logo fontSize={fontSize}/>
            <MenuItems />
            {respBasket}
        </div>
    </div>
    )};

export default mainMenu;