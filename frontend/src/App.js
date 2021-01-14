import React from 'react'
import './App.css';
import Register from './components/AuthComponents/Register';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        My React App
        <Register />
      </div>
    </React.Fragment>
  );
}

export default App;