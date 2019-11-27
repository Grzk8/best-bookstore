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
                <p>odbiór</p>
            </Nav>
        </>;
    }
}

export default SelfPickup;