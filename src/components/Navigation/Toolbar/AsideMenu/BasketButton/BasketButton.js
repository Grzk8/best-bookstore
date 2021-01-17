import React from 'react';
import {NavLink} from 'react-router-dom';

const basketButton = props => {
    return (
        <NavLink to="/basket" activeClassName="active" >Koszyk
            <div className="basketLogo" style={{height: props.height, width: props.width}}></div>
            <p className="inBasket">{props.basket? props.basket.length : 0} produktów</p>
            <p className="inBasket"> {props.basket ? props.basket.reduce((x, y) => x+y.price, 0).toFixed(2):0} zł</p>
        </NavLink>
    );
};

export default basketButton;