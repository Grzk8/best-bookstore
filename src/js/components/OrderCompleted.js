import React, {Component} from 'react';
import Nav from './Nav';
import DeliveryCost from "./DeliveryCost";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class OrderCompleted extends Component {
    render(

    ) {
        return <>
            <Nav basket={this.props.basket}>
                <h1 className="headerStyle">Zamówienie zostało przyjęte</h1>
            </Nav>
        </>;
    }
}




export default OrderCompleted;