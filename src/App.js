import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import connect from "react-redux/es/connect/connect";
import MenuBar from "./components/menubar/MenuBar";
import Dashboard from './components/dashboard/Dashboard';
import MothersList from './components/mothers/dashboard/MothersList';
import Settings from './components/settings/Settings'
import AuthRoute from "./utilities/privateRoute";
import FormikLoginForm from './components/auth/Login';
import {ThemeProvider} from 'pcln-design-system';
import {Grommet} from 'grommet';
import { Wrapper} from './app-style';
import {Container} from "./app-style";
import DriversList from "./components/drivers/dashboard/DriversList";
import SingleMotherView from "./components/mothers/single-view/SingleMotherView";
import FormikMother from "./components/mothers/form/MotherForm";
import FormikEditDriver from "./components/drivers/form/EditDriver";


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
        red: "#970c0c",
        blue: "#102074",
        yellow: "#ff9a00",
        lightPink: "#f37f83",
        orange: "#c47019",
        deepPink: "#a70065",
        green: "#006400",
        black: "#0454a7",
        plum: "#cb6ae7",
        rebeccaPurple: "#3a0057",
        gray: "#656565",
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
                        {props.isAuth && <MenuBar/>}
                        <Switch>
                            <Route path="/login" component={FormikLoginForm}/>
                            <Wrapper>
                                <AuthRoute path="/dashboard" component={Dashboard}/>

                                <AuthRoute exact path="/mothers" component={MothersList}/>
                                <AuthRoute path="/mothers/:id" component={SingleMotherView}/>

                                <AuthRoute exact path="/mother-form" component={FormikMother}/>
                                <AuthRoute path="/mother-form/:id" component={FormikMother}/>

                                <AuthRoute exact path="/drivers" component={DriversList}/>
                                <AuthRoute  path="/edit-driver" component={FormikEditDriver}/>

                                <AuthRoute path="/admin" component={Settings}/>
                                <Route exact path="/"><Redirect to="/dashboard" /></Route>
                            </Wrapper>
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