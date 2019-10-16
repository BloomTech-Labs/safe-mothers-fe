import React from 'react';
import './App.css';
import List from './components/List'
import Dashboard from './components/Dashboard'
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
    <Route
      path="/dashboard"
      render = {props => {
        return <Dashboard  history={props.history}/>
        }}
    />
    <Route
      path="/list"
      render = {props => {
        return <List history={props.history}/>
        }}
    />
    {/* <FormikLoginForm history = {props}/> */}

    </Router>
    </div>
  );
}

export default App;
