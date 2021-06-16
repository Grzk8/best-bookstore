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
                    required: true,
                    minLenght: 2
                },
                valid: false,
                touched: false
            },
            surname: {
                inputtype: 'input',
                elementConfig: {
                     type: 'text',
                     placeholder: 'nazwisko',

                },
                value: '',
                validation: {
                    required: true,
                    minLenght: 2
                },
                valid: false,
                touched: false
            },
            street: {
                inputtype: 'input',
                elementConfig: {
                     type: 'text',
                     placeholder: 'ulica',
                },
                value: '',
                validation: {
                    required: true,
                    minLenght: 2
                },
                valid: false,
                touched: false
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
                    minLenght: 5,
                    maxLenght: 5,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            city: {
                inputtype: 'input',
                elementConfig: {
                     type: 'text',
                     placeholder: 'miejscowość',
                },
                value: '',
                validation: {
                    required: true,
                    minLenght: 2
                },
                valid: false,
                touched: false
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
                    mail: true
                },
                valid: false,
                touched: false
            },
            pickup: {
                inputtype: 'select',
                elementConfig: {
                     options: [
                         {value: 'odbiór osobisty', displayValue: 'Odbiór osobisty'},
                         {value: 'przesyłka', displayValue: 'Przesyłka'}
                     ]
                },
                value: 'fastest',
                valid: true
            },
            comments: {
                inputtype: 'textarea',
                elementConfig: {
                     type: 'text',
                     placeholder: "uwagi"
                },
                value: '',
                touched: true
            },
        },
        orderCompleted: false,
        formIsValid: false
    }
    checkValidity(value, rules) {
        let isValid = true;

        if ( !rules ) {
            return true;
        }
        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLenght) {
            isValid = value.length >= rules.minLenght && isValid;
        }
        if(rules.maxLenght) {
            isValid = value.length <= rules.maxLenght && isValid;
        }
        if(rules.mail) {
            const isMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = isMail.test(value) && isValid;
        }
        if (rules.isNumeric) {
            const numeric = /^\d+$/;
            isValid = numeric.test(value) && isValid
        }
        return isValid;
    }
    inputChangedHandler = (event, inputId) => {
        const updatedOrderForm = {...this.state.orderForm};
        const updatedFormElement = {...updatedOrderForm[inputId]};
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputId] = updatedFormElement;
        
        let updatedFormIsValid = true;
        for (let inputId in updatedOrderForm) {
            updatedFormIsValid = updatedOrderForm[inputId].valid && updatedFormIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: updatedFormIsValid});
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

        fetch(`https://best-bookstore-default-rtdb.firebaseio.com/orders.json`,{method: 'POST',
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
                                invalid={!formElement.config.valid}
                                shouldValidate={formElement.config.validation}
                                touched={formElement.config.touched}
                                changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                        ))}
                        <Button disabled={!this.state.formIsValid}>Wyślij</Button>
                    </form>
                </>

        );
    }
}

export default Form;