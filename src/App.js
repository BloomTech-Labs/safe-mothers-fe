import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import connect from "react-redux/es/connect/connect";

import Registration from "./components/auth/Registration";
import MenuBar from "./components/menubar/MenuBar";
import Dashboard from './components/dashboard/Dashboard';
import MothersList from './components/mothers/dashboard/MothersList';

import AuthRoute from "./utilities/privateRoute";

import FormikLoginForm from './components/auth/Login';
import {ThemeProvider} from 'pcln-design-system';
import {Grommet} from 'grommet';
import {Search} from "grommet-icons";
import {SearchWrapper} from './app-style';
import {Container} from "./app-style";
import DriversList from "./components/drivers/DriversList";
import SingleMotherView from "./components/mothers/single-view/SingleMotherView";

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
    },
    navbar: {
        linkColor: "yellow"
    },
    palette: {
        red: "#F22222",
        blue: "#1337F1",
        yellow: "#FFF500",
        lightPink : "#FFCCCC",
        orange: "#FFAA00",
        deepPink : "#FF0099",
        green : "#00AA00",
        black : "#001833",
        plum : "#EECCFF",
        rebeccaPurple  : "#7700BB",
        gray  : "#C4C4C4",
    },
    darkPalette: {
        red: "#cb1818",
        blue: "#0d26a8",
        yellow: "#ffc008",
        lightPink : "#ffb2b0",
        orange: "#ff8100",
        deepPink : "#df0080",
        green : "#008a00",
        black : "#02366b",
        plum : "#eea2ff",
        rebeccaPurple  : "#5f0095",
        gray  : "#979797",
    }
};

const myTheme = {
    accordion:{
        border:{
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
                        <Route exact path="/" component={FormikLoginForm}/>
                        <Route path="/registration" component={Registration}/>

                        {/** PRIVATE ROUTE */}
                        {props.isAuth && <MenuBar />}
                        {
                            props.isAuth &&
                            <SearchWrapper >
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
                                        component={MothersList}
                                    />
                                    <AuthRoute
                                        exact path="/mothers/:id"
                                        component={SingleMotherView}
                                        />
                                    <AuthRoute
                                        exact path="/drivers"
                                        component={DriversList}
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
