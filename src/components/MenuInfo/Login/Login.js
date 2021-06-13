import React, {Component} from 'react';

import Input from "../../Layout/Input/Input";
import Button from "../../Layout/Button/Button";

class Login extends Component {
    state = {
        controls: {
            email: {
                inputtype: 'input',
                elementConfig: {
                     type: 'email',
                     placeholder: 'Adres email',
                },
                value: '',
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false
            },
            password: {
                inputtype: 'input',
                elementConfig: {
                     type: 'password',
                     placeholder: 'Hasło',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5
                },
                valid: false,
                touched: false
            }  
        }
    }

    checkValidity(value, rules) {
        let isValid = true;

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
    inputChangedHandler = (event, control) => {
        const updatedControls = {
            ...this.state.controls,
            [control]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[control].validation),
                touched: true
            }
        };
        this.setState({controls: updatedControls})
    };

    handleSubmitForm = (e) => {
        e.preventDefault();

        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyByjStsAv2JIOOQDv95alcaJH4cBhjod5Y`,{method: 'POST',
            body:JSON.stringify(token),headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
    }
    render () {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id:key,
                config: this.state.controls[key]
            })
        }

        const form = formElementsArray.map(el => (
            <Input
                key={el.id}
                inputtype={el.config.inputtype}
                elementConfig={el.config.elementConfig}
                value={el.config.value}
                label={el.config.label}
                invalid={!el.config.valid}
                shouldValidate={el.config.validation}
                touched={el.config.touched}
                changed={(event) => this.inputChangedHandler(event, el.id)}
            /> 
        ) );
        return (
            <>
                <h1 className="headerStyle">Zaloguj się lub załóż konto</h1>
                <form className="tableContainer">
                    {form}
                    <br/>
                    <Button >Dalej</Button>
                </form>
            </>
        )
    }
}

export default Login;