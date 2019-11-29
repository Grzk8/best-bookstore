import React, {Component} from 'react';
import Nav from './Nav';
import Form from './Form';

class Bascet extends Component {
        state = {
            basket: [],
            showform: false
        };

        showForm = () =>{

            this.setState({
                    showform: this.state.showform ? false : true
        }
            )};
    handleRemove = (id) =>{
        this.props.removeBook(id)
    }
    render(

    ) {
        return <>
            <Nav basket={this.props.basket}>
                <h1 className="headerStyle">KOSZYK</h1>
                {
                    this.props.basket.map(b=>
                            <table className="tableContainer">
                                <tr>
                                        <td>{b.title}</td>
                                        <td>{b.author}</td>
                                        <td>{b.price}<button className="btn" onClick={()=>this.handleRemove(b.id)}>USUŃ Z LISTY</button></td>
                                </tr>
                            </table>
                    )
                }
                <p className="totalprice">Łącznie do zapłaty :<span> {this.props.basket ? this.props.basket.reduce((x, y) => x+y.price, 0).toFixed(2):0} zł</span></p>
                <button onClick={this.showForm} className="btn btn2">KUPUJĘ</button>

                {this.state.showform && <Form></Form> }

            </Nav>
        </>;
    }
}


export default Bascet;