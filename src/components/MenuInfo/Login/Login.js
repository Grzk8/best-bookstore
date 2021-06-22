import React, {Component} from 'react';

import Input from "../../Layout/Input/Input";
import Button from "../../Layout/Button/Button";

class Login extends Component {7
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
        },
        isSignup: true
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
    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true
            }
        };
        this.setState( { controls: updatedControls } );
    }

    getToken = (email, password) => {
        let loginData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyByjStsAv2JIOOQDv95alcaJH4cBhjod5Y'
        if (!this.state.isSignup) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyByjStsAv2JIOOQDv95alcaJH4cBhjod5Y'
        }
        fetch(url,{method: 'POST',
        body:JSON.stringify(loginData)
        })
        .then(response => {console.log(response)});
    }

    handleSubmitForm = (e) => {
        e.preventDefault();

        this.getToken(this.state.controls.email.value, this.state.controls.password.value)
    }
    switchLoginHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup};
        });
    };

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
                <h1 className="headerStyle">{this.state.isSignup ? 'Załóż konto' : 'Zaloguj się'}</h1>

                <form className="tableContainer" onSubmit={this.handleSubmitForm}>
                    {form}
                    <br/>
                    <Button>Dalej</Button>
                </form>

                <div className="tableContainer">
                    <Button clicked={this.switchLoginHandler}>{this.state.isSignup ? 'Zaloguj się' : 'Załóż konto'}</Button>
                </div>
                
            </>
        )
    }
}

export default Login;