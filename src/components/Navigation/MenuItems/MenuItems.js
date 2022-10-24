import React from 'react';
import { NavLink } from 'react-router-dom';
import Categories from './Categories/Categories'

const menuItems = () => {
    return (
        <ul className='menuItems'>
            <div className='dropdown'>
                <li className="menuItem dropbtn"><NavLink to="" className="desktop-only" activeClassName="active">Kategorie</NavLink>
                    <ul className="dropdown-content">
                        <Categories />
                    </ul>
                </li>
            </div>
            <li className="menuItem"><NavLink to="/aboutUs" activeClassName="active">O nas</NavLink></li>
            <li className="menuItem"><NavLink to="/selfPickup" activeClassName="active">Odbiór osobisty</NavLink></li>
            <li className="menuItem"><NavLink to="/search" activeClassName="active">Szukaj</NavLink></li>
            <li className="menuItem"><NavLink to="/login" activeClassName="active">Zaloguj się</NavLink></li>
            <li className="menuItem"><NavLink to="/contact" activeClassName="active">Kontakt</NavLink></li>
        </ul>
    );
};

export default menuItems;