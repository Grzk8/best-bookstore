import React from 'react';
import Logo from '../../../Logo/Logo';
import MenuItems from './MenuItems/MenuItems';
import DrawerToggle from "../../SideDrawer/DrawerToggle/DrawerToggle";

const mainMenu = props => (
    <div className='mainMenu'>
        <div className='mainMenu_container'>
            <DrawerToggle clicked={props.drawerToggleClicked}/>    
            <Logo fontSize={'350%'}/>
            <MenuItems />
        </div>
    </div>
);

export default mainMenu