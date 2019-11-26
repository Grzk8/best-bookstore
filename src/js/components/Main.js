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
            <Nav/>
        </>;
    }
}

export default Main;