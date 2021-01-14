import React from 'react';
import RegisterForm from '../FormComponents/RegisterForm';

const Register = () => {

    const handleRegisterClicked = () => {
        console.log("Triggered from RegisterForm")
    }

    return (
        <div>
            <h1>Register</h1>

            <RegisterForm click={handleRegisterClicked} />
        </div>
    )
}

export default Register;