import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormikLoginForm from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

    <Router>

    <Route
      exact path="/"
      render = {props => {
        return <FormikLoginForm  history={props.history}/>
        }}
    />
    {/* <FormikLoginForm history = {props}/> */}

    </Router>
    </div>
  );
}

export default App;
