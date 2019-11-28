import React, {Component} from 'react';
import Nav from './Nav';

class Description extends Component {
    componentDidMount() {

        fetch(`http://localhost:3000/books`)
            .then(resp => resp.json())
            .then(data => {
               // console.log(data, "from API");

                let dataid = data.map(a => a.id)
                console.log(dataid);

            })
            }


            render() {
                return <>
                    <Nav basket={this.props.basket}>
                        <h1> {this.a.id} </h1>
                        <p> </p>
                    </Nav>
                </>;
            }
}


export default Description;