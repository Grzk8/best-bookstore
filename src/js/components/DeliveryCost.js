import React, {Component} from 'react';
import Nav from './Nav';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class DeliveryCost extends Component {
    render(

    ) {
        return <>
            <Nav basket={this.props.basket}>
                <p>koszty dostawy</p>
            </Nav>
        </>;
    }
}

export default DeliveryCost;