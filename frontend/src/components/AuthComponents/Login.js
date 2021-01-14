import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../FormComponents/LoginForm';

const Login = () => {
    return (
        <div>
            <h1>Login</h1>

            <LoginForm />

            <Link to="/register">Don't have an account? Register here.</Link>
        </div>
    )
}

export default Login;