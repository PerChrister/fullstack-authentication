import React from 'react';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';
import firebase from '../utils/FirebaseUtils/firebase';

const RegisterForm = ({ history }) => {

    const handleRegister = async event => {
        event.preventDefault();
        let { username, email, password, firstname, lastname } = event.target.elements;
        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then(userData => {
                history.push("/login")
            })
            .catch(err => {
                alert(err.message);
            });
    }

    return (
        <Form onSubmit={handleRegister}>
            <Form.Group controlId="formFirstName">
                <Form.Label>First Name: </Form.Label>
                <Form.Control name="firstname" type="text" placeholder="First Name" required />
            </Form.Group>

            <Form.Group controlId="formLastName">
                <Form.Label>Last Name: </Form.Label>
                <Form.Control name="lastname" type="text" placeholder="Last Name" required />
            </Form.Group>

            <Form.Group controlId="formUserName">
                <Form.Label>User Name: </Form.Label>
                <Form.Control name="username" type="text" placeholder="Username" required />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Password: </Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email: </Form.Label>
                <Form.Control name="email" type="email" placeholder="Email" required />
            </Form.Group>

            <button type="submit">Register</button>
            <Link to="/login">
                <button>Cancel</button>
            </Link>
        </Form>

    )
}

export default RegisterForm;