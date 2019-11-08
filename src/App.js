import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import connect from "react-redux/es/connect/connect";

import Registration from "./components/auth/Registration";
import MenuBar from "./components/menubar/MenuBar";
import Dashboard from './components/dashboard/Dashboard';
import MothersList from './components/mothers/dashboard/MothersList';
import Settings from './components/settings/Settings'

import AuthRoute from "./utilities/privateRoute";

import FormikLoginForm from './components/auth/Login';
import {ThemeProvider} from 'pcln-design-system';
import {Grommet} from 'grommet';
import {Search} from "grommet-icons";
import {SearchWrapper} from './app-style';
import {Container} from "./app-style";
import DriversList from "./components/drivers/dashboard/DriversList";
import SingleMotherView from "./components/mothers/single-view/SingleMotherView";
import FormikMother from "./components/mothers/form/MotherForm";
import FormikEditDriver from "./components/drivers/form/EditDriver";
import {LINKS} from "./components/menubar/menu-utils";

export const theme = {
    primary: {
        lightGray: "#F9FBFC",
        darkGray: "#EEEEEF",
        gray: "#dadada",
    },
    secondary: {
        darkBlue: "#282E74",
        lightBlue: "#c3ccfa",
        blue: "#F9FBFC",
        darkTeal: "#3D689E",
        lightTeal: "#6B95BD"
    },
    navbar: {
        linkColor: "yellow"
    },
    palette: {
        red: "#F22222",
        blue: "#1337F1",
        yellow: "#FFF500",
        lightPink: "#FFCCCC",
        orange: "#FFAA00",
        deepPink: "#FF0099",
        green: "#00AA00",
        black: "#001833",
        plum: "#EECCFF",
        rebeccaPurple: "#7700BB",
        gray: "#C4C4C4",
    },
    darkPalette: {
        red: "#b21414",
        blue: "#0d26a8",
        yellow: "#ffc008",
        lightPink: "#f37f83",
        orange: "#c47019",
        deepPink: "#c50074",
        green: "#006400",
        black: "#0454a7",
        plum: "#d993e7",
        rebeccaPurple: "#47006e",
        gray: "#979797",
    }
};

const myTheme = {
    accordion: {
        border: {
            color: theme.primary.gray,
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
                        {/*<Route exact path="/login" component={FormikLoginForm}/>*/}
                        {/*<Route exact path="/registration" component={Registration}/>*/}
                        {props.isAuth && <MenuBar/>}
                        <Switch>
                            <Route path="/login" component={FormikLoginForm}/>
                            <SearchWrapper>
                              {/*  <div className="searchContainer">
                                    <p className="searchLabel">SEARCH FOR KEYWORDS</p>
                                    <Search className="searchIcon"/>
                                    <input type="text" className="search"/>
                                </div>*/}
                                <AuthRoute path="/dashboard" component={Dashboard}/>

                                <AuthRoute exact path="/mothers" component={MothersList}/>
                                <AuthRoute path="/mothers/:id" component={SingleMotherView}/>

                                <AuthRoute exact path="/mother-form" component={FormikMother}/>
                                <AuthRoute path="/mother-form/:id" component={FormikMother}/>

                                <AuthRoute exact path="/drivers" component={DriversList}/>
                                <AuthRoute  path="/edit-driver" component={FormikEditDriver}/>

                                <AuthRoute path="/admin" component={Settings}/>
                                <Route exact path="/"><Redirect to="/dashboard" /></Route>
                            </SearchWrapper>
                        </Switch>
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