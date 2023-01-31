import React, { useReducer, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UPDATE_FORM, onInputChange, onFocusOut, validateInput, formReducer } from '../../../../lib/formUtils';
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import { AuthContext } from '../auth-context';


const Login = () => {

    const [formState, dispatch] = useReducer(formReducer, {
        email: { value: "", touched: false, hasError: true, error: "" },
        password: { value: "", touched: false, hasError: true, error: "" },
        isFormValid: false,
    });

    const [showError, setShowError] = useState(false);
    const [fetchError, setFetchError] = useState();
    const [formSubmited, setformSubmited] = useState(false);
    const auth = useContext(AuthContext);

    let history = useHistory();

    const loginSubmitHandler = e => {
        e.preventDefault();
        history.push('/');
        let isFormValid = true
        for (const name in formState) {
            const item = formState[name]
            const { value } = item
            const { hasError, error } = validateInput(name, value)
            if (hasError) {
                isFormValid = false
            }
            if (name) {
                dispatch({
                    type: UPDATE_FORM,
                    data: {
                        name,
                        value,
                        hasError,
                        error,
                        touched: true,
                        isFormValid,
                    },
                })
            }
        }
        if (isFormValid) {
            const fetchLogin = async () => {
                try {
                    const response = await fetch(`http://localhost:8000/api/users/login`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: formState.email.value,
                            password: formState.password.value,
                        })
                    })
                    if (!response.ok) {
                        setShowError(true);
                        throw new Error('Błędny email lub hasło');
                    }
                    const responseData = await response.json();
                    setformSubmited(true);
                    auth.login(responseData.user, responseData.token, responseData.email);
                } catch (err) {
                    setFetchError(err.message);
                    setFetchError(err.message) && setShowError(true);
                }
            }
            fetchLogin();
        } else {
            setShowError(true)
        };
    }

    let swithToSignup = () => {
        history.push('/signup');
    }
    return <>
        {formSubmited && !showError && !fetchError && formState.isFormValid && (
            history.push('/')
        )}
        <h1 className="headerStyle">Zaloguj się</h1>
        {showError && !formState.isFormValid && (
            <div className="form_error">Wpisz login i hasło</div>
        )}

        <div className='auth_container'>
            <div className='auth_container_auth'>
                <form className='auth_form' onSubmit={e => loginSubmitHandler(e)}>

                    <div className="auth_form-element">
                        <p>email</p>
                        <Input
                            className="input"
                            inputtype="input"
                            name="email"
                            value={formState.email.value}
                            id="email"
                            onChange={e => { onInputChange("email", e.target.value, dispatch, formState) }}
                            onBlur={e => { onFocusOut("email", e.target.value, dispatch, formState) }}
                        />
                        {formState.email.touched && formState.email.hasError && (
                            <div className="error">{formState.email.error}</div>
                        )}
                    </div>

                    <div className="auth_form-element">
                        <p>hasło</p>
                        <Input
                            className="input"
                            inputtype="input"
                            type="password"
                            name="password"
                            value={formState.password.value}
                            id="password"
                            onChange={e => { onInputChange("password", e.target.value, dispatch, formState) }}
                            onBlur={e => { onFocusOut("password", e.target.value, dispatch, formState) }}
                        />
                        {formState.password.touched && formState.password.hasError && (
                            <div className="error">{formState.password.error}</div>
                        )}
                    </div>


                    <div className='centered'>
                        <Button className="centered">Zaloguj się</Button>
                    </div>

                </form>
            </div>
            <div className='auth_container_switch'>
                <div className='auth_container_switch_window'>
                    <p className='auth_container_switch_window-info_bold'>Posiadasz już konto w BestBooKStore ?</p>
                    <p className='auth_container_switch_window-info'>Jeżeli posiadasz już konto w naszym sklepie, możesz się zalogować.</p>
                    <p className='auth_container_switch_window-info_bold'>Nie masz jeszcze konta?</p>
                    <p className='auth_container_switch_window-info'>Załóż konto klienta, aby móc złorzyć zamówienie i mieć dostęp do statusów zamówień i programu rabatowego dla stałych klientów.</p>
                    <Button clicked={swithToSignup}>Załóż konto</Button>
                </div>
            </div>
        </div>


    </>

}

export default Login;