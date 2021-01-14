import React, { useState } from 'react';

const RegisterForm = (props) => {

    //props -> parent to child
    //those who have the props is the child

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onRegisterClicked = (ev) => {
        console.log("EVENT: ", ev.target);
        props.click();
        console.log(username)
        console.log(password)
    }

    const onUsernameChanged = ev => {
        setUsername(ev.target.value.trim())
    }

    const onPasswordChanged = ev => {
        setPassword(ev.target.value.trim())
    }

    return (
        <form>
            <div>
            <label>Username</label>
                <input type="text" placeholder="Enter your username" onChange={onUsernameChanged}/>
            </div>
            <div>
            <label>Password</label>
                <input type="password" placeholder="Enter your password" onChange={onPasswordChanged} />
            </div>
            <div>
                <button type="button" onClick={onRegisterClicked}>Register</button>
            </div>
        </form>
    )
}

export default RegisterForm;