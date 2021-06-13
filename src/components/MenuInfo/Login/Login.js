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