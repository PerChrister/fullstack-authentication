import React from 'react';

const RegisterForm = () => {
    return (
        <form>
            <div>
            <label>Username</label>
                <input type="text" placeholder="Enter your username" />
            </div>
            <div>
            <label>Password</label>
                <input type="password" placeholder="Enter your password" />
            </div>
            <div>
                <button>Register</button>
            </div>
        </form>
    )
}

export default RegisterForm;