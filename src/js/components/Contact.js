import React, {Component} from 'react';
import Nav from './Nav';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class Contact extends Component {
    render(

    ) {
        return <>
            <Nav basket={this.props.basket}>
                <p>kontakt</p>
            </Nav>
        </>;
    }
}

export default Contact;