import React, { Component } from 'react';

import Input from "../../Input/Input";
import Button from "../../Button/Button";

const Login = props => {

    const loginSubmitHandler = async e => {
        e.preventDefault();
        //api login
    }

    return <>
        <h1 className="headerStyle">Zaloguj się</h1>
        <form onSubmit={loginSubmitHandler}>
            <p className="headerStyle">login</p>
            <Input
                className="input"
                inputtype="text"
                name="login"
                value=""
                label="login"
                changed=""
            />
            <p className="headerStyle">haslo</p>
            <Input
                className="input"
                inputtype="password"
                name="password"
                value=""
                label="password"
                changed=""
            />
            <Button>Zaloguj się</Button>
        </form>
    </>

}

export default Login;