import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import Button from "../Layout/Button/Button";

class Description extends Component {
    state={
        data: null
    }
    componentDidMount() {
        console.log(this.props);
        const{id}=this.props.match.params;
        fetch(`https://api.npoint.io/f350e77249ffe02ebd33/books/`+(id-1))
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
                    <div basket={this.props.basket}>
                        <h1 className="headerStyle">{this.state.data.title}</h1>
                        <h2 className="headerStyle">{this.state.data.author}</h2>
                        <p className="headerStyle">{this.state.data.description}</p>
                        <Button><NavLink to={this.getBackUrl()} activeClassName="active">WRÓĆ</NavLink></Button>
                    </div>
                </>;
            }
}


export default Description;