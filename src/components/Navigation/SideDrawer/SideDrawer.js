import React from 'react';
import MenuItems from '../MenuItems/MenuItems';
import Categories from '../MenuItems/Categories/Categories';
import Backdrop from '../../Layout/Backdrop/Backdrop';
import BasketButton from '../BasketButton/BasketButton';

const sideDrawer = (props) => {
    let attachedClasses = ['drawer', 'close'];
    if (props.open) {
        attachedClasses = ['drawer', 'open']
    };
    return (
        <div className="sideDrawer">
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <BasketButton basket={props.basket} height='2em' width='4em' />
                <hr className='horizontalLine' />
                <div className='sideDrawer_nav'>
                    <p className='sideDrawer_nav_title'>Menu</p>
                    < MenuItems />
                    <hr className='horizontalLine' />
                    <p className='sideDrawer_nav_title'>Kategorie</p>
                    <Categories />
                </div>
            </div>
        </div>
    );
};
export default sideDrawer;