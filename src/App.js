import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import FormikLoginForm from './components/auth/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthRoute from "./utilities/privateRoute";
import Registration from "./components/auth/Registration";
import {ThemeProvider} from 'pcln-design-system'
import {Grommet} from 'grommet';

function App() {
    return (
        <Grommet plain>
            <ThemeProvider>
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
                        </Switch>
                    </Router>
                </div>
            </ThemeProvider>
        </Grommet>
    );
}

export default App;
