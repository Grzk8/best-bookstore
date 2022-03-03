import React from 'react';
import MenuItems from '../MenuItems/MenuItems';
import Categories from '../MenuItems/Categories/Categories';
import Backdrop from '../../Layout/Backdrop/Backdrop';
import BasketButton from '../BasketButton/BasketButton';
import Logo from '../../Logo/Logo'

const sideDrawer = (props) => {
let attachedClasses = ['drawer', 'close'];
if (props.open) {
    attachedClasses = ['drawer', 'open']
}
    return (
    <div className="sideDrawer">
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')} onClick={props.closed}>
            <Logo fontSize={'2em'}/>
            <br/>
            <BasketButton basket={props.basket} height='1em' width='1em'/>
            <hr className='horizontalLine'/>
            <div className='sideDrawer_nav'>
                <p className='sideDrawer_nav_title'>Menu</p>
                < MenuItems />
                <hr className='horizontalLine'/>
                <p className='sideDrawer_nav_title'>Kategorie</p>
                <Categories />
            </div>
        </div>
    </div>      
    );
};
export default sideDrawer;