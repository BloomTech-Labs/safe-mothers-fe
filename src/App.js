import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import connect from "react-redux/es/connect/connect";

import Registration from "./components/auth/Registration";
import MenuBar from "./components/menubar/MenuBar";
import Dashboard from './components/dashboard/Dashboard';
import Mothers from './components/mothers/Mothers';

import AuthRoute from "./utilities/privateRoute";

import FormikLoginForm from './components/auth/Login';
import {ThemeProvider} from 'pcln-design-system';
import {Grommet} from 'grommet';
import {Search} from "grommet-icons";
import {SearchWrapper} from './app-style';
import {Container} from "./app-style";

const theme = {
    primary: {
        lightGray: "#F9FBFC",
        darkGray: "#EEEEEF",
        gray: "#dadada",
    },
    secondary: {
        darkBlue: "#282E74",
        blue: "#F9FBFC",
    },
};

const myTheme = {
    accordion:{
        border:{
            color: "white",
            side: "bottom",
        },
        icons: {
            color: "black"
        },
    }
};

function App(props) {
    return (
        <Grommet theme={myTheme} plain>
            <ThemeProvider theme={theme}>
                <Container>

                    <Router>
                        <Route exact path="/" component={FormikLoginForm}/>
                        <Route path="/registration" component={Registration}/>

                        {/** PRIVATE ROUTE */}
                        {props.isAuth && <MenuBar />}
                        {
                            props.isAuth &&
                            <SearchWrapper>
                                <div className="searchContainer">
                                    <p className="searchLabel">SEARCH FOR KEYWORDS</p>
                                    <Search className="searchIcon"/>
                                    <input type="text" className="search"/>
                                </div>
                                <Switch>
                                    <AuthRoute
                                        exact path="/dashboard"
                                        component={Dashboard}
                                    />
                                    <AuthRoute
                                        exact path="/mothers"
                                        component={Mothers}
                                    />
                                </Switch>
                            </SearchWrapper>
                        }

                    </Router>
                </Container>
            </ThemeProvider>
        </Grommet>
    );
}

const mapPropsToState = state => {
    return {
        isAuth: state.authReducer.isAuth,
    };
};

export default connect(mapPropsToState, {})(App);
