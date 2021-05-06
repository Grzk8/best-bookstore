import React, {Component} from "react";
import {
    Redirect
} from 'react-router-dom';
import Input from '../../Layout/Input/Input';

class Form extends Component {
    state = {
        name: "",
        surname: "",
        street: "",
        postalCode: "",
        city: "",
        mail: "",
        pickup:"Przesyłka",
        errorMsg: "",
        orderCompleted: false,

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handlepickup = (e) =>{
        this.setState(
            {
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
            })

            return false;
        }else{
            fetch(`https://api.npoint.io/f350e77249ffe02ebd33/orders`,{method: 'POST',
                body:JSON.stringify({name: this.state.name, surname: this.state.surname, street: this.state.street, postCode: this.state.postCode, city: this.state.city, mail: this.state.mail, pickup: this.state.pickup}),headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(resp => resp.json())
                .then(data => {
                    this.setState({
                        orderCompleted: true,
                    })

                })
        }

        console.log(this.state);
    }

    render() {
        if(this.state.orderCompleted){
            return<Redirect to="/orderCompleted"/>
        }
        return (

                <>
                    <form className="tableContainer" onSubmit={this.handleSubmitForm}>
                        <h1>Wpisz swoje dane</h1>
                        <span>{this.state.errorMsg}</span>

                        <Input inputtype="input" label="Imię:" type="text" name="name" value={this.state.name} placeholder="imię" onChange={this.handleChange}/>
                        <Input inputtype="input" label="Nazwisko:"  type="text" name="surname" value={this.state.surname} placeholder="nazwisko" onChange={this.handleChange}/>
                        <Input inputtype="input" label="Adres:"  type="text" name="street" value={this.state.street} placeholder="ulica i nr" onChange={this.handleChange}/>
                        <Input inputtype="input" type="text" name="postCode" value={this.state.postCode} placeholder="kod pocztowy" onChange={this.handleChange}/>
                        <Input inputtype="input" type="text" name="city" value={this.state.city} placeholder="miejscowość" onChange={this.handleChange}/>
                        <Input inputtype="input" label="Email:"  type="text" name="mail" value={this.state.mail} placeholder="Email" onChange={this.handleChange}/>
                        <Input inputtype="select" name="pickup"
                            value={this.state.pickup}
                            onChange={this.handleChange}
                            options={<>
                                <option value="ms">Odbiór osobisty</option>
                                <option value="mrs">Przesyłka</option>
                                </>} />
                        <Input inputtype="textarea" label="Uwagi:" name="description" value={this.state.description} onChange={this.handleChange}/>
                        <Input inputtype="input" className="btn btn3" type="submit" value="WYŚLIJ"/>
                    </form>
                </>

        );
    }
}

export default Form;