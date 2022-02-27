import React from 'react';
import MenuItems from '../Toolbar/MainMenu/MenuItems/MenuItems';
import AsideItems from '../MenuItems/AsideItems/AsideItems';
import Backdrop from '../../Layout/Backdrop/Backdrop';
import BasketButton from '../BasketButton/BasketButton';
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
            <hr className='horizontalLine'/>
            <div className='sideDrawer_nav'>
                <p className='sideDrawer_nav_title'>Menu</p>
                < MenuItems />
                <hr className='horizontalLine'/>
                <p className='sideDrawer_nav_title'>Kategorie</p>
                <AsideItems />
            </div>
        </div>
    </>      
    );
};
export default sideDrawer;