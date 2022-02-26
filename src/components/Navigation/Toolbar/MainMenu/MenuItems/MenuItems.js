import React from 'react';
import {NavLink} from 'react-router-dom';
import AsideItems from '../../AsideMenu/AsideItems/AsideItems'

const menuItems = () => {
    return (
        <ul className='menuItems'>
            <li className="menuItem"><NavLink to="" activeClassName="active">Kategorie</NavLink>
                <ul  class="sublist">
                <NavLink to="/sf" activeClassName="active"><li className="asideItem itemList">Sience - fiction</li></NavLink>
                <NavLink to="/popularSience" activeClassName="active"><li className="asideItem itemList">Popularnonaukowe</li></NavLink>
                <NavLink to="/comic" activeClassName="active"><li className="asideItem itemList">Komiksy</li></NavLink>
                <NavLink to="/thiller" activeClassName="active"><li className="asideItem itemList">Kryminał</li></NavLink>
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