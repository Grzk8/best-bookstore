import React from 'react';
import {NavLink} from 'react-router-dom';
import MenuItems from '../Toolbar/MainMenu/MenuItems/MenuItems';
import AsideItems from '../Toolbar/AsideMenu/AsideItems/AsideItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
let attachedClasses = [drawer, Close];
if (props.open) {
    attachedClasses = [drawer, Open]
}
    return (
    <>
        <Backdrop />
        <div className="attachedClasses">
        <p>Menu</p>
            < MenuItems />
            <p>Kategorie</p>
            <AsideItems />
        </div>
    </>      
    );
};
export default sideDrawer;