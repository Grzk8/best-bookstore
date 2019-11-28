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
        showform: false
    };

    showForm = () =>{

        this.setState({
                showform: this.state.showform ? false : true
    }
        )}

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
                <p className="totalprice">Łącznie do zapłaty : {this.props.basket ? this.props.basket.reduce((x, y) => x+y.price, 0).toFixed(2):0} zł</p>
                <button onClick={this.showForm} className="btn btn2">KUPUJĘ</button>

                {this.state.showform && <Form></Form> }

            </Nav>
        </>;
    }
}


export default Bascet;