import React from 'react'
import Dashboard from './components/HomeComponents/Dashboard'
import Home from './components/HomeComponents/Home'
import Login from './components/AuthComponents/Login'
import LoginPhone from './components/AuthComponents/Register'
import Register from './components/AuthComponents/LoginPhone'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        My React App
        <Dashboard />
        <Home />
        <Login />
        <LoginPhone />
        <Register />
      </div>
    </React.Fragment>
  );
}

export default App;