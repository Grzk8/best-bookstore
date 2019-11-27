import React, {Component} from 'react';
import Nav from './Nav';
import Form from './Form';

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class Bascet extends Component {
    state = {
        basket: [],
    };

    render(

    ) {
        return <>
            <Nav basket={this.props.basket}>
                {
                    this.props.basket.map(b=>

                        <table>

                            <tr>
                                <td>{b.title}</td>
                                <td>{b.author}</td>
                                <td>{b.price}</td>
                            </tr>
                        </table>
                    )
                }
                <button className="btn btn2">KUPUJĘ</button>

                {this.props.children}

            </Nav>
        </>;
    }
}


export default Bascet;