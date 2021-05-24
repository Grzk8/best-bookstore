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
                     placeholder: 'imię',

                },
                value: ''
            },
            surname: {
                inputtype: 'input',
                elementConfig: {
                     type: 'text',
                     placeholder: 'nazwisko',

                },
                value: ''
            },
            street: {
                inputtype: 'input',
                elementConfig: {
                     type: 'text',
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
                     placeholder: "uwagi"
                },
                value: ''
            },
        },
        errorMsg: "",
        orderCompleted: false,
    }
    inputChangedHandler = (event, inputId) => {
        const updatedOrderForm = {...this.state.orderForm};
        const updatedFormElement = {...updatedOrderForm[inputId]};
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputId] = updatedFormElement;
        this.setState({orderForm: updatedOrderForm});
    };

    handleSubmitForm = (e) => {
        e.preventDefault();
        const formData = {};
        for (let formElementId in this.state.orderForm) {
            formData[formElementId] = this.state.orderForm[formElementId.value]
        };


        this.setState({
            errorMsg: ""
        });
        if (this.state.orderForm.mail.value.indexOf("@") === -1) {
            this.setState({
                errorMsg: "Błędny adres email"
            })

            return false;
        }else{
            fetch(`http://localhost:3000/orders`,{method: 'POST',
                body:JSON.stringify({value: formData}),headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(resp => resp.json())
                
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
                        ))};
                        <Button>Wyślij</Button>
                    </form>
                </>

        );
    }
}

export default Form;