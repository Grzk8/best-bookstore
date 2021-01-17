import React from 'react';
import MenuItems from '../Toolbar/MainMenu/MenuItems/MenuItems';
import AsideItems from '../Toolbar/AsideMenu/AsideItems/AsideItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
let attachedClasses = ['drawer', 'close'];
if (props.open) {
    attachedClasses = ['drawer', 'open']
}
    return (
    <>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
        <p>Menu</p>
            < MenuItems />
            <p>Kategorie</p>
            <AsideItems />
        </div>
    </>      
    );
};
export default sideDrawer;