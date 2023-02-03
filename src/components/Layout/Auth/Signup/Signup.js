import React, { useReducer, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UPDATE_FORM, onInputChange, onFocusOut, validateInput, formReducer } from '../../../../lib/formUtils';
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import { AuthContext } from '../auth-context';

const Signup = () => {

    const [formState, dispatch] = useReducer(formReducer, {
        email: { value: "", touched: false, hasError: true, error: "" },
        password: { value: "", touched: false, hasError: true, error: "" },
        passwordRepead: { value: "", touched: false, hasError: true, error: "" },
        firstName: { value: "", touched: false, hasError: true, error: "" },
        lastName: { value: "", touched: false, hasError: true, error: "" },
        street: { value: "", touched: false, hasError: true, error: "" },
        houseNr: { value: "", touched: false, hasError: true, error: "" },
        town: { value: "", touched: false, hasError: true, error: "" },
        postCode: { value: "", touched: false, hasError: true, error: "" },
        phoneNr: { value: "", touched: false, hasError: true, error: "" },
        isFormValid: false,
    });
    const [showError, setShowError] = useState(false);
    const [fetchError, setFetchError] = useState(false);
    const auth = useContext(AuthContext);

    let history = useHistory();

    const clearError = e => {
        setShowError(false);
        setFetchError(false);
    };

    const signupSubmitHandler = e => {
        e.preventDefault();

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
        { formState.password !== formState.passwordRepead && setShowError(true) }
        if (isFormValid) {
            const fetchSignup = async () => {
                try {
                    const response = await fetch(`https://bestbookstore-backend.onrender.com/api/users/signup`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: formState.email.value,
                            password: formState.password.value,
                            firstName: formState.firstName.value,
                            lastName: formState.lastName.value,
                            street: formState.street.value,
                            houseNr: formState.houseNr.value,
                            postCode: formState.postCode.value,
                            town: formState.town.value,
                            phoneNr: formState.phoneNr.value
                        })
                    })
                    if (!response.ok) {
                        setShowError(true);
                        throw new Error('Użytkownik o podanym adresie Email istnieje');
                    }
                    response.json();
                    auth.login(response.userId, response.token);
                    if (!showError && !fetchError && formState.isFormValid) {
                        history.push('/login');
                    }
                } catch (err) {
                    setFetchError(err.message);
                    setShowError(true);
                }
            }
            fetchSignup();
        } else {
            setShowError(true)
        };
    }

    let swithToLogin = () => {
        history.push('/login');
    }

    return <>
        <h1 className="headerStyle">załóż konto</h1>
        {showError && !formState.isFormValid && (
            <div className="form_error">Wypełnij wszystkie pola</div>
        )}
        {fetchError && (<div className="form_error">{fetchError}</div>)}

        <div className='auth_container'>
            <div className='auth_container_auth'>
                <form className='auth_form' onSubmit={e => signupSubmitHandler(e)}>
                    <div className="auth_form-element">
                        <p className="">email</p>
                        <Input
                            className="input"
                            inputtype="input"
                            name="email"
                            value={formState.email.value}
                            id="email"
                            onClick={e => clearError(e)}
                            onChange={e => { onInputChange("email", e.target.value, dispatch, formState) }}
                            onBlur={e => { onFocusOut("email", e.target.value, dispatch, formState) }}
                        />
                        {formState.email.touched && formState.email.hasError && (
                            <div className="error">{formState.email.error}</div>
                        )}
                        {fetchError && (<div className="error">Zaloguj się lub wprowadz inny adres email</div>)}
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

                    <div className="auth_form-element">
                        <p>powtórz hasło</p>
                        <Input
                            className="input"
                            inputtype="input"
                            type="password"
                            name="passwordRepead"
                            value={formState.passwordRepead.value}
                            id="passwordRepead"
                            onChange={e => { onInputChange("passwordRepead", e.target.value, dispatch, formState) }}
                            onBlur={e => { onFocusOut("passwordRepead", e.target.value, dispatch, formState) }}
                        />
                        {formState.passwordRepead.touched && formState.passwordRepead.hasError && (
                            <div className="error">{formState.passwordRepead.error}</div>
                        )}
                        {formState.passwordRepead.touched && (formState.passwordRepead.value !== formState.password.value) && (
                            <div className="error">Nieprawidłowe hasło</div>
                        )}
                    </div>

                    <div className="auth_form-element">
                        <p>imię</p>
                        <Input
                            className="input"
                            inputtype="input"
                            name="firstName"
                            value={formState.firstName.value}
                            id="firstName"
                            onChange={e => { onInputChange("firstName", e.target.value, dispatch, formState) }}
                            onBlur={e => { onFocusOut("firstName", e.target.value, dispatch, formState) }}
                        />
                        {formState.firstName.touched && formState.firstName.hasError && (
                            <div className="error">{formState.firstName.error}</div>
                        )}
                    </div>

                    <div className="auth_form-element">
                        <p>nazwisko</p>
                        <Input
                            className="input"
                            inputtype="input"
                            name="lastName"
                            value={formState.lastName.value}
                            id="lastName"
                            onChange={e => { onInputChange("lastName", e.target.value, dispatch, formState) }}
                            onBlur={e => { onFocusOut("lastName", e.target.value, dispatch, formState) }}
                        />
                        {formState.lastName.touched && formState.lastName.hasError && (
                            <div className="error">{formState.lastName.error}</div>
                        )}
                    </div>

                    <div className="auth_form-element">
                        <p>ulica</p>
                        <Input
                            className="input"
                            inputtype="input"
                            name="street"
                            value={formState.street.value}
                            id="street"
                            onChange={e => { onInputChange("street", e.target.value, dispatch, formState) }}
                            onBlur={e => { onFocusOut("street", e.target.value, dispatch, formState) }}
                        />
                        {formState.street.touched && formState.street.hasError && (
                            <div className="error">{formState.street.error}</div>
                        )}
                    </div>

                    <div className="auth_form-element">
                        <p>nr mieszkania</p>
                        <Input
                            className="input"
                            inputtype="input"
                            name="houseNr"
                            value={formState.houseNr.value}
                            id="houseNr"
                            onChange={e => { onInputChange("houseNr", e.target.value, dispatch, formState) }}
                            onBlur={e => { onFocusOut("nhouseNr", e.target.value, dispatch, formState) }}
                        />
                        {formState.houseNr.touched && formState.houseNr.hasError && (
                            <div className="error">{formState.houseNr.error}</div>
                        )}
                    </div>

                    <div className="auth_form-element">
                        <p>kod pocztowy</p>
                        <Input
                            className="input"
                            inputtype="input"
                            name="postCode"
                            value={formState.postCode.value}
                            id="postCode"
                            onChange={e => { onInputChange("postCode", e.target.value, dispatch, formState) }}
                            onBlur={e => { onFocusOut("postCode", e.target.value, dispatch, formState) }}
                        />
                        {formState.postCode.touched && formState.postCode.hasError && (
                            <div className="error">{formState.postCode.error}</div>
                        )}
                    </div>

                    <div className="auth_form-element">
                        <p>miejscowość</p>
                        <Input
                            className="input"
                            inputtype="input"
                            name="town"
                            value={formState.town.value}
                            id="town"
                            onChange={e => { onInputChange("town", e.target.value, dispatch, formState) }}
                            onBlur={e => { onFocusOut("town", e.target.value, dispatch, formState) }}
                        />
                        {formState.town.touched && formState.town.hasError && (
                            <div className="error">{formState.town.error}</div>
                        )}
                    </div>

                    <div className="auth_form-element">
                        <p>telefon</p>
                        <Input
                            className="input"
                            inputtype="input"
                            name="phoneNr"
                            value={formState.phoneNr.value}
                            id="phoneNr"
                            onChange={e => { onInputChange("phoneNr", e.target.value, dispatch, formState) }}
                            onBlur={e => { onFocusOut("phoneNr", e.target.value, dispatch, formState) }}
                        />
                        {formState.phoneNr.touched && formState.phoneNr.hasError && (
                            <div className="error">{formState.phoneNr.error}</div>
                        )}
                    </div>

                    <div className='centered'>
                        <Button className="centered">Załóż konto</Button>
                    </div>
                </form>
            </div>
            <div className='auth_container_switch'>
                <div className='auth_container_switch_window'>
                    <p className='auth_container_switch_window-info_bold'>Posiadasz już konto w  BestBooKStore?</p>
                    <p className='auth_container_switch_window-info'>Jeżeli posiadasz już konto w naszym sklepie, możesz się zalogować. Posiadanie konta zapewnia składanie zamówień dostęp do statusów zamówień i programu rabatowego dla stałych klientów.</p>
                    <Button clicked={swithToLogin}>Zaloguj się</Button>
                </div>
            </div>
        </div>
    </>
};

export default Signup;