import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import FormikLoginForm from './components/auth/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthRoute from "./utilities/privateRoute";
import Registration from "./components/auth/Registration";
import {ThemeProvider} from 'pcln-design-system';
<<<<<<< HEAD
import {Grommet} from 'grommet';
import styled from 'styled-components';
import "./App.css";
=======
import Mothers from './components/mothers/Mothers';
import {Grommet} from 'grommet';
import styled from 'styled-components';
import "./App.css";
import MenuBar from "./components/menubar/MenuBar";
import connect from "react-redux/es/connect/connect";
import {Search} from "grommet-icons";
>>>>>>> 370a5037f83ae164e4a7b8492475d2d5c54c8c78

const Container = styled.div`
    text-align: center;
`;

const SearchWrapper = styled.div`
    .search {
        width: 173px;
        height: 24px;
        background: #FFFFFF;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.08);
        border-radius: 15px;
        border-width:0px;
        border:none;
    };
    .searchLabel{
         font-size: 12px;
         margin-right: 15px;
    };
    .searchIcon{
        position:absolute;
        right:5px;
        width:17px;
    };
    .searchContainer{
         position: relative; 
         display: flex;
         justify-content: flex-end;
         margin: 20px;
         align-items: center;
    };
`;

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

function App(props) {
    return (
        <Grommet plain>
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
