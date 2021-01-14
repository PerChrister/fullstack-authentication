import React from 'react'
import Login from './components/AuthComponents/Login'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        My React App
        <Login />
      </div>
    </React.Fragment>
  );
}

export default App;