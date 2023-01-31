import React from 'react';
import { NavLink } from 'react-router-dom';
import Categories from './Categories/Categories'

const menuItems = () => {



    return (
        <ul className='menuItems'>
            <div className='menuItem dropdown'>
                <li className=" dropbtn"><NavLink to="/" className="desktop-only" activeClassName="active">Kategorie</NavLink>
                    <ul className="dropdown-content">
                        <Categories />
                    </ul>
                </li>
            </div>
            <li className="menuItem"><NavLink to="/newest" className='menuItem_item' activeClassName="active">Nowości</NavLink></li>
            <li className="menuItem"><NavLink to="/sale" className='menuItem_item' activeClassName="active">Promocje</NavLink></li>
            <li className="menuItem"><NavLink to="/aboutUs" className='menuItem_item' activeClassName="active">O nas</NavLink></li>
            <li className="menuItem"><NavLink to="/selfPickup" className='menuItem_item' activeClassName="active">Odbiór osobisty</NavLink></li>
        </ul>
    );
};

export default menuItems;