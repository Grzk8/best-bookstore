import React, { useReducer } from 'react';

import { UPDATE_FORM, onInputChange } from '../../../../lib/formUtils';
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

const Signup = props => {

    const [formState, dispatch] = useReducer(formReducer, initialState)

    const signupSubmitHandler = async e => {
        e.preventDefault();
        //api sign
    }

    return <>
        <h1 className="headerStyle">Załóż konto</h1>
        <form onSubmit={signupSubmitHandler}>
            <p className="headerStyle">email</p>
            <Input
                className="input"
                inputtype="input"
                name="email"
                value={formState.email.value}
                id="email"
                changed={e => { onInputChange("email", e.target.value, dispatch, formState) }}
            />
            <p className="headerStyle">hasło</p>
            <Input
                className="input"
                inputtype="input"
                name="password"
                value={formState.password.value}
                id="password"
                changed={e => { onInputChange("password", e.target.value, dispatch, formState) }}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
            <p className="headerStyle">powtórz hasło</p>
            <Input
                className="input"
                inputtype="input"
                name="passwordRepead"
                value={formState.passwordRepead.value}
                id="password"
                changed={e => { onInputChange("passwordRepead", e.target.value, dispatch, formState) }}
            />

            <h2>Dane do wysyłki</h2>
            <p className="headerStyle">imię</p>
            <Input
                className="input"
                inputtype="input"
                name="firstName"
                value={formState.firstName.value}
                id="firstName"
                changed={e => { onInputChange("firstName", e.target.value, dispatch, formState) }}
            />
            <p className="headerStyle">nazwisko</p>
            <Input
                className="input"
                inputtype="input"
                name="lastName"
                value={formState.lastName.value}
                id="lastName"
                changed={e => { onInputChange("lastName", e.target.value, dispatch, formState) }}
            />
            <p className="headerStyle">ulica</p>
            <Input
                className="input"
                inputtype="input"
                name="street"
                value={formState.street.value}
                id="street"
                changed={e => { onInputChange("street", e.target.value, dispatch, formState) }}
            />
            <p className="headerStyle">nr mieszkania</p>
            <Input
                className="input"
                inputtype="input"
                name="houseNr"
                value={formState.houseNr.value}
                id="houseNr"
                changed={e => { onInputChange("houseNr", e.target.value, dispatch, formState) }}
            />
            <p className="headerStyle">kod pocztowy</p>
            <Input
                className="input"
                inputtype="input"
                name="postCode"
                value={formState.postCode.value}
                id="postCode"
                changed={e => { onInputChange("postCode", e.target.value, dispatch, formState) }}
            />
            <p className="headerStyle">miejscowość</p>
            <Input
                className="input"
                inputtype="input"
                name="town"
                value={formState.town.value}
                id="town"
                changed={e => { onInputChange("town", e.target.value, dispatch, formState) }}
            />
            <p className="headerStyle">nr domu</p>
            <Input
                className="input"
                inputtype="input"
                name="houseNr"
                value={formState.houseNr.value}
                id="houseNr"
                changed={e => { onInputChange("houseNr", e.target.value, dispatch, formState) }}
            />
            <p className="headerStyle">trlefon kontaktowy</p>
            <Input
                className="input"
                inputtype="input"
                name="phoneNr"
                value={formState.phoneNr.value}
                id="phoneNr"
                changed={e => { onInputChange("phoneNr", e.target.value, dispatch, formState) }}
            />

            <Button>Załóż konto</Button>
        </form>
    </>

}

export default Signup;