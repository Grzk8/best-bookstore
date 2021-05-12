import React, {Component} from "react";
import {
    Redirect
} from 'react-router-dom';
import Input from '../../Layout/Input/Input';
import Button from '../../Layout/Button/Button';

class Form extends Component {
    state = {
        orderForm: {
            name: {
                inputtype: 'input',
                elementConfig: {
                     type: 'text',
                     label: 'Imię:',
                     placeholder: 'imię',

                },
                value: ''
            },
            surname: {
                inputtype: 'input',
                elementConfig: {
                     type: 'text',
                     label: 'Nazwisko:',
                     placeholder: 'nazwisko',

                },
                value: ''
            },
            street: {
                inputtype: 'input',
                elementConfig: {
                     type: 'text',
                     label: 'Adres:',
                     placeholder: 'ulica',

                },
                value: ''
            },
            postalCode: {
                inputtype: 'input',
                elementConfig: {
                     type: 'text',
                     placeholder: 'kod pocztowy',

                },
                value: ''
            },
            city: {
                inputtype: 'input',
                elementConfig: {
                     type: 'text',
                     placeholder: 'miejscowość',

                },
                value: ''
            },
            mail: {
                inputtype: 'input',
                elementConfig: {
                     type: 'email',
                     label: 'Email:',
                     placeholder: 'email',

                },
                value: ''
            },
            pickup: {
                inputtype: 'select',
                elementConfig: {
                     options: [
                         {value: 'odbiór osobisty', displayValue: 'Odbiór osobisty'},
                         {value: 'przesyłka', displayValue: 'Przesyłka'}
                     ]
                },
                value: ''
            },
            comments: {
                inputtype: 'textarea',
                elementConfig: {
                     type: 'text',
                     label: "Uwagi:",
                     placeholder: "uwagi"
                },
                value: ''
            },
        },
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
    inputChangedHandler = (event, inputId) => {
        console.log(event.target.value)
        const updatedForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedForm[inputId]
        };
        updatedFormElement.value = event.target.value;
        updatedForm[inputId] = updatedFormElement;
        this.setState({orderForm: updatedForm});
    };
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
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id:key,
                config: this.state.orderForm[key]
            })
        }
        if(this.state.orderCompleted){
            return<Redirect to="/orderCompleted"/>
        }
        return (

                <>
                    <form className="tableContainer" onSubmit={this.handleSubmitForm}>
                        <h1>Wpisz swoje dane</h1>
                        <span>{this.state.errorMsg}</span>
                        {formElementsArray.map(formElement => (
                            <Input
                                key={formElement.id}
                                inputtype={formElement.config.inputtype}
                                elementConfig={formElement.config.elementConfig}
                                value={formElement.config.value}
                                label={formElement.config.label}
                                changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                        ))}
                        <Button clicked={this.handleSubmitForm}>Wyślij</Button>
                    </form>
                </>

        );
    }
}

export default Form;