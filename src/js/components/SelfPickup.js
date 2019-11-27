import React, {Component} from 'react';
import Nav from './Nav';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class SelfPickup extends Component {
    render(

    ) {
        return <>
            <Nav basket={this.props.basket}>
                <h1>Odbiór osobisty Księgarnia  oprócz sprzedaży wysyłkowej oferuje również możliwość bezpłatnego odbioru zamówień we własnych Punktach odbioru zamówień (płatność tylko gotówką): </h1>
                <ul>
                    <li>Warszawa ul. Słoneczna 2</li>
                    <li>Kraków ul. Długa 76A</li>
                    <li>Wrocław ul. Piękna 14/58</li>
                    <li>Gdańsk ul. Portowa 4</li>
                </ul>
            </Nav>
        </>;
    }
}

export default SelfPickup;