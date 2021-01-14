import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../FormComponents/RegisterForm';

const Register = () => {

    return (
        <div>
            <h1>Register</h1>

            <RegisterForm />

            <Link to="/login">Already have an account? Login here.</Link>
        </div>
    )
}

export default Register;