import React from 'react';
import {connect} from "react-redux";
import {logout} from "../../actions/authActions";
import {Link, withRouter} from "react-router-dom";
import {Container} from "./menubar-style";
import {LINKS} from "./menu-utils";
import NavLink from "./NavLink";

const MenuBar = (props) => {
    return (
        <>
            {props.location.pathname !== LINKS.login &&
            <Container>
                <div className="links">
                    <div className="link-container">
                        <NavLink path={LINKS.dashboard} tab={"Home"}/>
                    </div>
                    <div className="link-container">
                        <NavLink path={LINKS.mothers} tab={"Mother"}/>
                    </div>
                    <div className="link-container">
                        <NavLink path={LINKS.drivers} tab={"Driver"}/>
                    </div>
                    <div className="link-container">
                        <NavLink path={LINKS.admin} tab={"Admin"}/>
                    </div>
                    <div className="link-container">
                        <Link onClick={() => props.logout()} className="link " to="/login">
                            Sign Out
                            <div className="dash-button">
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
            }
        </>
    );
};
export default connect("", {logout})(withRouter(MenuBar));
