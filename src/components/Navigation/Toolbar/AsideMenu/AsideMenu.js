import React from 'react';
import BasketButton from '../MainMenu/BasketButton/BasketButton';
import AsideItems from './AsideItems/AsideItems';

const asideMenu = props => {
    return (
        <aside>
            <div className="asideMenu">
                <div className="asideItem">
                    
                </div>
                <AsideItems />
            </div>
        </aside>
    );
};

export default asideMenu;