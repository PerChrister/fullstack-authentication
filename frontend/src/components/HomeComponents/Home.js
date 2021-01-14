import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>

            <Link to="/login">Have an account? Login here!</Link>
            <br />
            <Link to="/register">Don't have an account? Create one here!</Link>
        </div>
    )
}

export default Home;