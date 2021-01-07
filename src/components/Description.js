import React, {Component} from 'react';
import Nav from '../components/Nav';
import {NavLink} from "react-router-dom";

class Description extends Component {
    state={
        data: null
    }
    componentDidMount() {
        console.log(this.props);
        const{id}=this.props.match.params;
        fetch(`https://api.npoint.io/f350e77249ffe02ebd33/books/`+id)
            .then(resp => resp.json())
            .then(data => {
               // console.log(data, "from API");

                //let dataid = data.map(a => a.id)
                console.log(data);
                this.setState({
                    data:data
                })
            })
            }
            getBackUrl = () =>{
                if(this.state.data.category ==="s-f"){
                    return"/sf"
                }
                if(this.state.data.category ==="Popularnonaukowe"){
                    return"/popularsience"
                }
                if(this.state.data.category ==="Komiksy"){
                    return"/comic"
                }
                if(this.state.data.category ==="thiller"){
                    return"/thiller"
                }
            }
            render() {
        if(this.state.data===null){
            return null
        }
                return <>
                    <Nav basket={this.props.basket}>
                        <h1 className="headerStyle">{this.state.data.title}</h1>
                        <h2 className="headerStyle">{this.state.data.author}</h2>
                        <p className="headerStyle">{this.state.data.description}</p>
                        <button className="btn"><NavLink to={this.getBackUrl()} activeClassName="active">WRÓĆ</NavLink></button>
                    </Nav>
                </>;
            }
}


export default Description;