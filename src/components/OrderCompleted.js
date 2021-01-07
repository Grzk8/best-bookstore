import React, {Component} from 'react';
import Nav from './Nav';

class OrderCompleted extends Component {
    render(

    ) {
        return <>
            <Nav basket={this.props.basket}>
                <h1 className="headerStyle">Zamówienie zostało przyjęte</h1>
            </Nav>
        </>;
    }
}




export default OrderCompleted;