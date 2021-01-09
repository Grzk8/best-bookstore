import React from 'react';
import Logo from '../../../Logo/Logo';
import MenuItems from './MenuItems/MenuItems';

const mainMenu = () => {
    return (
        <div className='mainMenu'>
            <div className='mainMenu_container'>
                <Logo fontSize={'3.8em'}/>
                <div className='menu'>
                    <MenuItems />
                </div>
            </div>
        </div>
    )
};

export default mainMenu;