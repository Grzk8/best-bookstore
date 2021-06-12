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
    render () {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id:key,
                config: this.state.orderForm[key]
            })
        }
        return (
            <>
                
            </>
        )
    }
}

export default Login;