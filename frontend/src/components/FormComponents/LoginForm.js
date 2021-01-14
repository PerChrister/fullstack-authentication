import React from 'react';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';
import firebase from '../utils/FirebaseUtils/firebase';

const LoginForm = ({ history }) => {

    const handleLogin = async event => {

        event.preventDefault();
        const { email, password } = event.target.elements;
        firebase
            .auth()
            .signInWithEmailAndPassword(email.value, password.value)
            .catch(err => {
                alert(err.message)
                history.push("/")
            });

    }

    return (
        <Form onSubmit={handleLogin} name="loginForm">
            <Form.Group controlId="formEmail">
                <Form.Label>Email: </Form.Label>
                <Form.Control name="email" type="email" placeholder="Email" required />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Password: </Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            <button type="submit">Log in</button>
        </Form>
    )
}

export default LoginForm;