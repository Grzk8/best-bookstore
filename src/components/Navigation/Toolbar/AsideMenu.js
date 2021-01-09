import React from 'react';
import {NavLink} from 'react-router-dom';

const asideMenu = props => {

    return (
        <aside>
        <div className="containerAside">
            <ul className="asideList">
                <li className="asideItem bascet">
                    <NavLink to="/basket" activeClassName="active">Koszyk
                    <div className="basketLogo"></div>
                    <p className="inBasket">{props.basket? props.basket.length : 0} produktów</p>
                    <p className="inBasket"> {props.basket ? props.basket.reduce((x, y) => x+y.price, 0).toFixed(2):0} zł</p>
                    </NavLink></li>
                <li className="asideItem itemList"><NavLink to="/sf" activeClassName="active">Sience - fiction</NavLink></li>
                <li className="asideItem itemList"><NavLink to="/popularSience" activeClassName="active">Popularnonaukowe</NavLink></li>
                <li className="asideItem itemList"><NavLink to="/comic" activeClassName="active">Komiksy</NavLink></li>
                <li className="asideItem itemList"><NavLink to="/thiller" activeClassName="active">Kryminał</NavLink></li>
            </ul>
        </div>
    </aside>
    );
};

export default asideMenu;