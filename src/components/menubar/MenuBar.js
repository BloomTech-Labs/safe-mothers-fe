import React, {useState} from 'react';
import {connect} from "react-redux";
import {logout} from "../../actions/authActions";
import {Link, withRouter} from "react-router-dom";
import {Container} from "./menubar-style";

const MenuBar = (props) => {
    const [active, setActive] = useState();
    const [links, setLinks] = useState({
        dashboard: "/dashboard",
        mothers: "/mothers",
        drivers: "/drivers",
        settings: "/settings",
    });

    return (
        <>
            <Container>
                <div className="links">
                    <div className="link-container">
                        <Link onClick={() => setActive(1)}
                              className={"link " + (active === 1 || props.location.pathname === links.dashboard ? "focus-link" : "")}
                              to="/dashboard">
                            Home <div className="dash-button"></div>
                            <div
                                className={active === 1 || props.location.pathname === links.dashboard ? "focus" : ""}></div>
                        </Link>
                    </div>
                    <div className="link-container">
                        <Link onClick={() => setActive(2)}
                              className={"link " + (active === 2 || props.location.pathname === links.mothers ? "focus-link" : "")}
                              to="/mothers">
                            Mom <div className="dash-button"></div>
                            <div
                                className={active === 2 || props.location.pathname === links.mothers ? "focus" : ""}></div>
                        </Link>
                    </div>
                    <div className="link-container">
                        <Link onClick={() => setActive(3)}
                              className={"link " + (active === 3 || props.location.pathname === links.drivers ? "focus-link" : "")}
                              to="/drivers">
                            Driver <div className="dash-button"></div>
                            <div
                                className={active === 3 || props.location.pathname === links.drivers ? "focus" : ""}></div>
                        </Link>
                    </div>
                    <div className="link-container">
                        <Link onClick={() => setActive(4)}
                              className={"link " + (active === 4 || props.location.pathname === links.settings ? "focus-link" : "")}
                              to="/settings">
                            Settings
                            <div className="dash-button"></div>
                            <div
                                className={active === 4 || props.location.pathname === links.settings ? "focus" : ""}></div>
                        </Link>
                    </div>
                    <div className="link-container">
                        <Link onClick={() => props.logout()} className="link " to="/">
                            Sign Out
                            <div className="dash-button"></div>
                        </Link>
                    </div>
                </div>
            </Container>
        </>
    );
};
export default connect("", {logout})(withRouter(MenuBar));
