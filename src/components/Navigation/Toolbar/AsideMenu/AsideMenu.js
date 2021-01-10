import React from 'react';
import {NavLink} from 'react-router-dom';
import BasketButton from './BasketButton/BasketButton';
import AsideItems from './AsideItems/AsideItems';

const asideMenu = props => {
    return (
        <aside>
            <div className="asideMenu">
                <div className="asideItem">
                    <BasketButton basket={props.basket} />
                </div>
                <AsideItems />
            </div>
        </aside>
    );
};

export default asideMenu;