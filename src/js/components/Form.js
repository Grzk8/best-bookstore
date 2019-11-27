import React, {Component} from "react";
import Bascet from "./Bascet";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class Form extends Component {
    state = {
        name: "",
        surname: "",
        adress: "",
        mail: "",
        errorMsg: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        this.setState({
            errorMsg: ""
        });

        if (this.state.mail.indexOf("@") === -1) {
            this.setState({
                errorMsg: "Błędny adres email"
            });
            return false;
        }

        console.log(this.state);
    }

    render() {
        return (
            <Nav>
                {
                <>
                    <form onSubmit={this.handleSubmitForm}>
                        <h1>Wpisz swoje dane</h1>
                        <span>{this.state.errorMsg}</span>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                        <input type="text" name="surname" value={this.state.surname} onChange={this.handleChange}/>
                        <input type="text" name="adress" value={this.state.adress} onChange={this.handleChange}/>
                        <input type="text" name="mail" value={this.state.mail} onChange={this.handleChange}/>
                        <textarea name="description" value={this.state.description} onChange={this.handleChange}/>
                        <input type="submit"/>
                    </form>
                </>
            }
            </Nav>
        );
    }
}

export default Form;