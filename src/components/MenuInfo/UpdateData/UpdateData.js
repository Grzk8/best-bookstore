import React, { useEffect, useState, useContext, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { UPDATE_FORM, onInputChange, onFocusOut, validateInput, formReducer } from '../../../lib/formUtils';
import Input from "../../Layout/Input/Input";
import Button from "../../Layout/Button/Button";
import { AuthContext } from '../../Layout/Auth/auth-context';

const UpdateData = () => {

    const [formState, dispatch] = useReducer(formReducer, {
        firstName: { value: "", touched: false, hasError: true, error: "" },
        lastName: { value: "", touched: false, hasError: true, error: "" },
        street: { value: "", touched: false, hasError: true, error: "" },
        houseNr: { value: "", touched: false, hasError: true, error: "" },
        town: { value: "", touched: false, hasError: true, error: "" },
        postCode: { value: "", touched: false, hasError: true, error: "" },
        phoneNr: { value: "", touched: false, hasError: true, error: "" },
        isFormValid: false,
    });
    const [userData, setUserData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [showError, setShowError] = useState(false);
    const [fetchError, setFetchError] = useState(false);
    const auth = useContext(AuthContext);

    let history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            const id = auth.userId;
            setIsLoading(true);
            try {
                const response = await fetch(`http://localhost:8000/api/users/userdata/${id}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const responseData = await response.json();
                setUserData(responseData);
                onInputChange("firstName", responseData.firstName, dispatch, formState);
                onInputChange("lastName", responseData.lastName, dispatch, formState);
                onInputChange("street", responseData.street, dispatch, formState);
                onInputChange("houseNr", responseData.houseNr, dispatch, formState);
                onInputChange("postCode", responseData.postCode, dispatch, formState);
                onInputChange("town", responseData.town, dispatch, formState);
                onInputChange("phoneNr", responseData.phoneNr, dispatch, formState);
                setIsLoading(false);
            } catch {
                (err) => console.log(err);
            }
        }
        fetchData();
    }, []);

    const updateSubmitHandler = e => {
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
        if (isFormValid) {
            const updateData = async () => {
                const userId = auth.userId
                try {
                    const response = await fetch(`http://localhost:8000/api/users/updatedata`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            id: userId,
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
                        throw new Error('Błąd podczas aktualizacji');
                    }
                    response.json();

                    if (!showError && !fetchError && formState.isFormValid) {
                        history.push('/');
                    }
                } catch (err) {
                    setFetchError(err.message);
                    setShowError(true);
                }
            }
            updateData();
        } else {
            setShowError(true)
        };
    }
    return (<>
        {isLoading && <div className="loader">Loading...</div>}
        {!isLoading && userData && <div>
            <h1 className="headerStyle">Edycja danych</h1>
            {showError && !formState.isFormValid && (
                <div className="form_error">Wypełnij wszystkie pola</div>
            )}
            {fetchError && (<div className="form_error">{fetchError}</div>)}
            <form className='auth_form  auth_update' onSubmit={e => updateSubmitHandler(e)}>

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
                <p>trlefon kontaktowy</p>
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
                    <Button className="centered">Edytuj dane</Button>
                </div>
            </form>
        </div>
        }
    </>
    );
};

export default UpdateData;