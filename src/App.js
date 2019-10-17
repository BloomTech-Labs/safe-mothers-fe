import React from 'react';
import './App.css';
import List from './components/List';
import Dashboard from './components/Dashboard';
import FormikLoginForm from './components/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthRoute from "./utilities/privateRoute";
import Registration from "./components/Registration";

function App() {
    return (
        <div className="App">
            <Router>
                <Route exact path="/" component={FormikLoginForm}/>
                <Route path="/registration" component={Registration}/>
                {/** PRIVATE ROUTE */}
                <Switch>
                    <AuthRoute
                        exact path="/dashboard"
                        component={Dashboard}
                    />
                    <AuthRoute
                        exact path="/list"
                        component={List}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
