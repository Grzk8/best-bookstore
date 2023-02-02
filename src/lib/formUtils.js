export const UPDATE_FORM = "UPDATE_FORM"

export const formReducer = (state, action) => {
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

export const onInputChange = (name, value, dispatch, formState) => {
    const { hasError, error } = validateInput(name, value)
    let isFormValid = true
    for (const key in formState) {
        const item = formState[key]
        if (key === name && hasError) {
            isFormValid = false
            break
        } else if (key !== name && item.hasError) {
            isFormValid = false
            break
        }
    };

    dispatch({
        type: UPDATE_FORM,
        data: { name, value, hasError, error, touched: true, isFormValid },
    })
};

export const onFocusOut = (name, value, dispatch, formState) => {
    const { hasError, error } = validateInput(name, value)
    let isFormValid = true
    for (const key in formState) {
        const item = formState[key]
        if (key === name && hasError) {
            isFormValid = false
            break
        } else if (key !== name && item.hasError) {
            isFormValid = false
            break
        }
    }

    dispatch({
        type: UPDATE_FORM,
        data: { name, value, hasError, error, touched: true, isFormValid },
    })
}

export const validateInput = (name, value) => {
    let hasError = false,
        error = ""
    switch (name) {
        case "email":
            if (value.trim() === "") {
                hasError = true
                error = "Pole email nie może być puste"
            } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) ) {
                hasError = true
                error = "Niewłaściwy adres email"
            } else {
                hasError = false
                error = ""
            }
            break

        case "password":
            if (value.trim() === "") {
                hasError = true
                error = "Wpisz hasło"
            } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,12}$/.test(value)) {
                hasError = true
                error = "Hasło musi zawierać co najmniej 5 znaków, duże i małe litery oraz cyfry"
            } else {
                hasError = false
                error = ""
            }
            break
        case "passwordRepead":
            if (value.trim() === "") {
                hasError = true
                error = "Wpisz hasło"
            } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,12}$/.test(value)) {
                hasError = true
                error = "Hasło musi zawierać co najmniej 5 znaków, duże i małe litery oraz cyfry"
            } else {
                hasError = false
                error = ""
            }
            break
        case "firstName":
            if (value.trim() === "") {
                hasError = true
                error = "Wpisz imię"
            } else {
                hasError = false
                error = ""
            }
            break
        case "lastName":
            if (value.trim() === "") {
                hasError = true
                error = "Wpisz nazwisko"
            } else {
                hasError = false
                error = ""
            }
            break
        case "street":
            if (value.trim() === "") {
                hasError = true
                error = "Wpisz nzwę ulicy"
            } else {
                hasError = false
                error = ""
            }
            break
        case "houseNr":
            if (value.trim() === "") {
                hasError = true
                error = "Wpisz numer domu"
            } else {
                hasError = false
                error = ""
            }
            break
        case "town":
            if (value.trim() === "") {
                hasError = true
                error = "Wpisz nazwę miejscowości"
            } else {
                hasError = false
                error = ""
            }
            break
        case "postCode":
            if (value.trim() === "") {
                hasError = true
                error = "Wpisz kod pocztowy"
            } else if (!/^[0-9]{2}-[0-9]{3}$/.test(value)) {
                hasError = true
                error = "Niewłaściwy kod pocztowy"
            } else {
                hasError = false
                error = ""
            }
            break
        case "phoneNr":
            if (value.trim() === "") {
                hasError = true
                error = "Wpisz numer telefonu"
            } else if (!/^[0-9\+]{9,13}$/.test(value)) {
                hasError = true
                error = "Niewłaściwy numer telefonu"
            } else {
                hasError = false
                error = ""
            }
            break
        default:
            break
    }
    return { hasError, error }
}