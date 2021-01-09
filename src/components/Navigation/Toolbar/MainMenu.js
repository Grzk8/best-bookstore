import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../../Logo/Logo';

const mainMenu = () => {
    return (
        <header>
        <div className='headerMain'>
            <Logo fontSize={'2.8em'}/>
            <div className='menu'>
                <ul className='menuList'>
                    <li className="menuItem"><NavLink to="/aboutUs" activeClassName="active">O nas</NavLink></li>
                    <li className="menuItem"><NavLink to="/deliveryCost" activeClassName="active">Koszt dostawy</NavLink></li>
                    <li className="menuItem"><NavLink to="/selfPickup" activeClassName="active">Odbiór osobisty</NavLink></li>
                    <li className="menuItem"><NavLink to="/contact" activeClassName="active">Kontakt</NavLink></li>
                </ul>
            </div>
        </div>
    </header>
    )
};

export default mainMenu;