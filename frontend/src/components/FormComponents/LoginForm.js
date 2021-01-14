import React from 'react';

const LoginForm = () => {
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
                <button>Login</button>
            </div>
        </form>
    )
}

export default LoginForm;