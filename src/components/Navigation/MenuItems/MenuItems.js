import React from 'react';
import {NavLink} from 'react-router-dom';
import AsideItems from './AsideItems/AsideItems'

const menuItems = () => {
    return (
        <ul className='menuItems'>
            <li className="menuItem categories"><NavLink to="" className="desktop-only" activeClassName="active">Kategorie</NavLink>
                <ul  class="categories_sublist">
                    <AsideItems/>
                </ul>
            </li>
            <li className="menuItem"><NavLink to="/aboutUs" activeClassName="active">O nas</NavLink></li>
            <li className="menuItem"><NavLink to="/selfPickup" activeClassName="active">Odbiór osobisty</NavLink></li>
            <li className="menuItem"><NavLink to="/search" activeClassName="active">Szukaj</NavLink></li>
            <li className="menuItem"><NavLink to="/login" activeClassName="active">Zaloguj się</NavLink></li>
            <li className="menuItem"><NavLink to="/contact" activeClassName="active">Kontakt</NavLink></li>
        </ul>
    );
};

export default menuItems;