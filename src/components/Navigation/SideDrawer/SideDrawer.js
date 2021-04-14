import React from 'react';
import MenuItems from '../Toolbar/MainMenu/MenuItems/MenuItems';
import AsideItems from '../Toolbar/AsideMenu/AsideItems/AsideItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import BasketButton from '../../Navigation/Toolbar/AsideMenu/BasketButton/BasketButton';
import Logo from '../../Logo/Logo'

const sideDrawer = (props) => {
let attachedClasses = ['drawer', 'close'];
if (props.open) {
    attachedClasses = ['drawer', 'open']
}
    return (
    <>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')} onClick={props.closed}>
            <Logo fontSize={'2em'}/>
            <br/>
            <BasketButton basket={props.basket} height='2em' width='4em'/>
            <br/>
            <div className='sideDrawer_nav'>
                <p className='sideDrawer_nav_title'>Menu</p>
                < MenuItems />
                <br/>
                <p className='sideDrawer_nav_title'>Kategorie</p>
                <AsideItems />
            </div>
        </div>
    </>      
    );
};
export default sideDrawer;