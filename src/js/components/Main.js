import React, {Component} from 'react';
import Nav from './Nav';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
class Main extends Component {
    render() {
        return <>
            <Nav basket={this.props.basket}>
                <p>main</p>
            </Nav>
        </>;
    }
}

export default Main;