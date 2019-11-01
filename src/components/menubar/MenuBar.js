import React, {useState} from 'react';
import {connect} from "react-redux";
import {logout} from "../../actions/authActions";
import {Link, withRouter} from "react-router-dom";
import {Container} from "./menubar-style";

const MenuBar = (props) => {
    const [links, setLinks] = useState({
        dashboard: "/dashboard",
        mothers: "/mothers",
        drivers: "/drivers",
        admin: "/admin",
    });

    return (
        <>
            <Container>
                <div className="links">
                    <div className="link-container">
                        <Link
                            className={"link " + (props.location.pathname === links.dashboard ? "focus-link" : "")}
                              to="/dashboard">
                            Home <div className="dash-button">
                        </div>
                            <div className={props.location.pathname === links.dashboard ? "focus" : ""}>
                            </div>
                        </Link>
                    </div>
                    <div className="link-container">
                        <Link
                            className={"link " + (props.location.pathname === links.mothers ? "focus-link" : "")}
                              to="/mothers">
                            Mother <div className="dash-button">
                        </div>
                            <div className={props.location.pathname === links.mothers ? "focus" : ""}>
                            </div>
                        </Link>
                    </div>
                    <div className="link-container">
                        <Link
                            className={"link " + (props.location.pathname === links.drivers ? "focus-link" : "")}
                            to="/drivers">
                            Driver <div className="dash-button">
                        </div>
                            <div className={props.location.pathname === links.drivers ? "focus" : ""}>
                            </div>
                        </Link>
                    </div>
                    <div className="link-container">
                        <Link
<<<<<<< HEAD
                            className={"link " + (props.location.pathname === links.admin ? "focus-link" : "")}
                            to="/admin">
=======
                            className={"link " + (props.location.pathname === links.settings ? "focus-link" : "")}
                            to="/settings">
>>>>>>> c99329871f44729b405f53aec0b66cdefef18043
                            Admin
                            <div className="dash-button">
                            </div>
                            <div className={props.location.pathname === links.admin ? "focus" : ""}>
                            </div>
                        </Link>
                    </div>
                    <div className="link-container">
                        <Link onClick={() => props.logout()} className="link " to="/">
                            Sign Out
                            <div className="dash-button">
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
        </>
    );
};
export default connect("", {logout})(withRouter(MenuBar));
