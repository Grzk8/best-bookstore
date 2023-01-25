import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import Categories from './Categories/Categories'
import { AuthContext } from '../../Layout/Auth/auth-context';

const menuItems = () => {
    const auth = useContext(AuthContext);
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
            {auth.isLoggedIn && <li className="menuItem"><NavLink to="/orders" activeClassName="active">Zamówienia</NavLink></li>}
            <li className="menuItem"><NavLink to="/search" activeClassName="active">Szukaj</NavLink></li>
            <li className="menuItem"><NavLink to="/contact" activeClassName="active">Kontakt</NavLink></li>
        </ul>
    );
};

export default menuItems;