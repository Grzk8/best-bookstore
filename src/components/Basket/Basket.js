import React, {Component} from 'react';
import Form from './Form/Form';
import Button from '../Layout/Button/Button';

class Basket extends Component {
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

                <h1 className="headerStyle">KOSZYK</h1>
                {
                    this.props.basket.map(b=>
                            <table className="tableContainer">
                                <tr>
                                        <td>{b.title}</td>
                                        <td>{b.author}</td>
                                        <td>{b.price}<Button clicked={()=>this.handleRemove(b.id)}>USUŃ Z LISTY</Button></td>
                                        
                                </tr>
                            </table>
                    )
                }
                <p className="totalprice">Łącznie do zapłaty :<span> {this.props.basket ? this.props.basket.reduce((x, y) => x+y.price, 0).toFixed(2):0} zł</span></p>
                
                <Button clicked={this.showForm}>KUPUJĘ</Button>

                {this.state.showform && <Form></Form> }

        </>;
    }
}


export default Basket;