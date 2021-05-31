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
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            surname: {
                inputtype: 'input',
                elementConfig: {
                     type: 'text',
                     placeholder: 'nazwisko',

                },
                value: '',
                validation: {
                    required: true 
                },
                valid: false
            },
            street: {
                inputtype: 'input',
                elementConfig: {
                     type: 'text',
                     placeholder: 'ulica',
                },
                value: '',
                validation: {
                    required: true 
                },
                valid: false
            },
            postalCode: {
                inputtype: 'input',
                elementConfig: {
                     type: 'text',
                     placeholder: 'kod pocztowy',
                },
                value: '',
                validation: {
                    required: true,
                    lengthM: 5
                },
                valid: false
            },
            city: {
                inputtype: 'input',
                elementConfig: {
                     type: 'text',
                     placeholder: 'miejscowość',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            mail: {
                inputtype: 'input',
                elementConfig: {
                     type: 'email',
                     placeholder: 'email',
                },
                value: '',
                validation: {
                    required: true,
                    mail: false
                },
                valid: false
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
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
        },
        orderCompleted: false,
    }
    checkValidity(value, rules) {
        let isValid = false;

        if(rules.required) {
            isValid = value.trim() !== '';
        }
        if(rules.lenghtM) {
            isValid = value.length <= rules.lengthM
        }
        if(rules.mail) {
            isValid = value.indexOf("@");
        }
        return isValid;
    }
    inputChangedHandler = (event, inputId) => {
        const updatedOrderForm = {...this.state.orderForm};
        const updatedFormElement = {...updatedOrderForm[inputId]};
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedOrderForm[inputId] = updatedFormElement;
        console.log(updatedFormElement)
        this.setState({orderForm: updatedOrderForm});
    };

    handleSubmitForm = (e) => {
        e.preventDefault();
        const formData = {};
        for (let formElementId in this.state.orderForm) {
            formData[formElementId] = this.state.orderForm[formElementId].value
        };

        let boo = [];
        const b = this.props.basket.map(b=> boo = [b.title, b.author, b.price])

        const order = {
            orderData: formData,
            orderedBooks: b,
            totalPrice: this.props.basket.reduce((x, y) => x+y.price, 0).toFixed(2)
        };

        fetch(`http://localhost:3000/orders`,{method: 'POST',
            body:JSON.stringify(order),headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(resp => resp.json(), this.setState({orderCompleted: true}));
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