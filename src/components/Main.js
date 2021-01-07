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

                <div className="mainSide">
                    <h1 className="mainSide backgr">Witamy na stronie <br></br>naszej księgarni</h1>
                </div>
            </Nav>
        </>;
    }
}

export default Main;