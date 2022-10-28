import React, { useReducer, useState } from 'react';

import { UPDATE_FORM, onInputChange, onFocusOut, validateInput } from '../../../../lib/formUtils';
import Input from "../../Input/Input";
import Button from "../../Button/Button";


const initialState = {

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
}

const formReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_FORM:
            const { name, value, hasError, error, touched, isFormValid } = action.data
            return {
                ...state,
                [name]: { ...state[name], value, hasError, error, touched },
                isFormValid,
            }
        default:
            return state
    }
};

const Signup = () => {

    const [formState, dispatch] = useReducer(formReducer, initialState)

    const [showError, setShowError] = useState(false)

    const signupSubmitHandler = async e => {
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
        if (!isFormValid) {
            setShowError(true)
        } else {
            // fetch post
        }
    }

    return <>
        <h1 className="headerStyle">Załóż konto</h1>
        {showError && !formState.isFormValid && (
            <div className="form_error">Wypełnij wszystkie pola</div>
        )}
        <form onSubmit={signupSubmitHandler}>
            <p className="headerStyle">email</p>
            <Input
                className="input"
                inputtype="input"
                name="email"
                value={formState.email.value}
                id="email"
                changed={e => { onInputChange("email", e.target.value, dispatch, formState) }}
                onBlur={e => { onFocusOut("email", e.target.value, dispatch, formState) }}
            />
            {formState.email.touched && formState.email.hasError && (
                <div className="error">{formState.email.error}</div>
            )}
            <p className="headerStyle">hasło</p>
            <Input
                className="input"
                inputtype="input"
                type="password"
                name="password"
                value={formState.password.value}
                id="password"
                changed={e => { onInputChange("password", e.target.value, dispatch, formState) }}
                onBlur={e => { onFocusOut("password", e.target.value, dispatch, formState) }}
            />
            {formState.password.touched && formState.password.hasError && (
                <div className="error">{formState.password.error}</div>
            )}
            <p className="headerStyle">powtórz hasło</p>
            <Input
                className="input"
                inputtype="input"
                type="password"
                name="passwordRepead"
                value={formState.passwordRepead.value}
                id="passwordRepead"
                changed={e => { onInputChange("passwordRepead", e.target.value, dispatch, formState) }}
                onBlur={e => { onFocusOut("passwordRepead", e.target.value, dispatch, formState) }}
            />
            {formState.passwordRepead.touched && formState.passwordRepead.hasError && (
                <div className="error">{formState.passwordRepead.error}</div>
            )}
            <h2 className="headerStyle">Dane do wysyłki</h2>
            <p className="headerStyle">imię</p>
            <Input
                className="input"
                inputtype="input"
                name="firstName"
                value={formState.firstName.value}
                id="firstName"
                changed={e => { onInputChange("firstName", e.target.value, dispatch, formState) }}
                onBlur={e => { onFocusOut("firstName", e.target.value, dispatch, formState) }}
            />
            {formState.firstName.touched && formState.firstName.hasError && (
                <div className="error">{formState.firstName.error}</div>
            )}
            <p className="headerStyle">nazwisko</p>
            <Input
                className="input"
                inputtype="input"
                name="lastName"
                value={formState.lastName.value}
                id="lastName"
                changed={e => { onInputChange("lastName", e.target.value, dispatch, formState) }}
                onBlur={e => { onFocusOut("lastName", e.target.value, dispatch, formState) }}
            />
            {formState.lastName.touched && formState.lastName.hasError && (
                <div className="error">{formState.lastName.error}</div>
            )}
            <p className="headerStyle">ulica</p>
            <Input
                className="input"
                inputtype="input"
                name="street"
                value={formState.street.value}
                id="street"
                changed={e => { onInputChange("street", e.target.value, dispatch, formState) }}
                onBlur={e => { onFocusOut("street", e.target.value, dispatch, formState) }}
            />
            {formState.street.touched && formState.street.hasError && (
                <div className="error">{formState.street.error}</div>
            )}
            <p className="headerStyle">nr mieszkania</p>
            <Input
                className="input"
                inputtype="input"
                name="houseNr"
                value={formState.houseNr.value}
                id="houseNr"
                changed={e => { onInputChange("houseNr", e.target.value, dispatch, formState) }}
                onBlur={e => { onFocusOut("nhouseNr", e.target.value, dispatch, formState) }}
            />
            {formState.houseNr.touched && formState.houseNr.hasError && (
                <div className="error">{formState.houseNr.error}</div>
            )}
            <p className="headerStyle">kod pocztowy</p>
            <Input
                className="input"
                inputtype="input"
                name="postCode"
                value={formState.postCode.value}
                id="postCode"
                changed={e => { onInputChange("postCode", e.target.value, dispatch, formState) }}
                onBlur={e => { onFocusOut("postCode", e.target.value, dispatch, formState) }}
            />
            {formState.postCode.touched && formState.postCode.hasError && (
                <div className="error">{formState.postCode.error}</div>
            )}
            <p className="headerStyle">miejscowość</p>
            <Input
                className="input"
                inputtype="input"
                name="town"
                value={formState.town.value}
                id="town"
                changed={e => { onInputChange("town", e.target.value, dispatch, formState) }}
                onBlur={e => { onFocusOut("town", e.target.value, dispatch, formState) }}
            />
            {formState.town.touched && formState.town.hasError && (
                <div className="error">{formState.town.error}</div>
            )}
            <p className="headerStyle">trlefon kontaktowy</p>
            <Input
                className="input"
                inputtype="input"
                name="phoneNr"
                value={formState.phoneNr.value}
                id="phoneNr"
                changed={e => { onInputChange("phoneNr", e.target.value, dispatch, formState) }}
                onBlur={e => { onFocusOut("phoneNr", e.target.value, dispatch, formState) }}
            />
            {formState.phoneNr.touched && formState.phoneNr.hasError && (
                <div className="error">{formState.phoneNr.error}</div>
            )}
            <div className='centered'>
            <Button className="centered">Załóż konto</Button>
            </div>
            
        </form>
    </>

}

export default Signup;