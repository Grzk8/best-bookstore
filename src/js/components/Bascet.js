import React, {Component} from 'react';
import Nav from './Nav';

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
                                <th>Autor</th>
                                <th>Tytuł</th>
                                <th>Cena</th>
                            </tr>
                            <tr>
                                <td>{b.title}</td>
                                <td>{b.author}</td>
                                <td>{b.price}</td>
                            </tr>
                        </table>
                    )

                }
            </Nav>
        </>;
    }
}


export default Bascet;