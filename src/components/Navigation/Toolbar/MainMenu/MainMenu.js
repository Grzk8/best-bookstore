import React from 'react';
import Logo from '../../../Logo/Logo';
import MenuItems from './MenuItems/MenuItems';
import DrawerToggle from "../../SideDrawer/DrawerToggle/DrawerToggle";

const mainMenu = () => (
    <div className='mainMenu'>
        <div className='mainMenu_container'>
            <DrawerToggle />    
            <Logo fontSize={'350%'}/>
            <MenuItems />
        </div>
    </div>
);

export default mainMenu