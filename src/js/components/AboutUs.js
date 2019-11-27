import React, {Component} from 'react';
import Nav from './Nav';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class AboutUs extends Component {
    render(

    ) {
        return <>
            <Nav basket={this.props.basket}>
                <p>o nas</p>
            </Nav>
        </>;
    }
}

export default AboutUs;