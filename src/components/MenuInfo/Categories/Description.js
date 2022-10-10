import React, {Component} from 'react';
import Button from "../../Layout/Button/Button";

class Description extends Component {
    state={
        data: null
    }
    componentDidMount() {
        console.log(this.props);
        const{id}=this.props.match.params;
        console.log(id);
        fetch(`http://localhost:8000/api/items/description/${{id}}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    data:data
                })
            })
            }
            getBackUrl = () =>{
                this.props.history.goBack();
            };

            render() {
        if(this.state.data===null){
            return null
        }
                return <>
                    <div basket={this.props.basket}>
                        <h1 className="headerStyle">{this.state.data.title}</h1>
                        <h2 className="headerStyle">{this.state.data.author}</h2>
                        <p className="headerStyle">{this.state.data.description}</p>
                        <Button clicked={this.getBackUrl}>WRÓĆ</Button>
                    </div>
                </>;
            }
}


export default Description;

// http://localhost:8000/api/items/description/${id}