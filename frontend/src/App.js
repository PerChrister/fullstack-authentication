import React from 'react'
import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'

import Register from './components/AuthComponents/Register';
import Login from './components/AuthComponents/Login';
import Home from './components/HomeComponents/Home';
import Dashboard from './components/HomeComponents/Dashboard';
import NotFound from './components/StylingComponents/NotFound';

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="App">
          My React App
        </div>
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;