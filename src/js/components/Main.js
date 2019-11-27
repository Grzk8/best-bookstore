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
                <h1> Witaj na stronie naszej księgarni BooKStore</h1>
                <p> </p>
            </Nav>
        </>;
    }
}

export default Main;