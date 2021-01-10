import React from 'react';
import {NavLink} from 'react-router-dom';
import MenuItems from '../Toolbar/MainMenu/MenuItems/MenuItems';
import AsideItems from '../Toolbar/AsideMenu/AsideItems/AsideItems';

const sideDrawer = (props) => {
    return (
        <>
            <p>Menu</p>
            < MenuItems />
            <p>Kategorie</p>
            <AsideItems />
        </>
        

    );
};
export default sideDrawer;