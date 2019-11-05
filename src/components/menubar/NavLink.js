import React from 'react';
import {Link, withRouter} from "react-router-dom";
import {LINKS} from "./menu-utils";


function NavLink(props) {
    const {path, tab} = props;
    const key = path.slice(1);
    return (
        <Link className={"link " + (props.location.pathname === LINKS[key] ? "focus-link" : "")}
            to={path}>{tab}<div className="dash-button"> </div>
            <div className={props.location.pathname === LINKS[key] ? "focus" : ""}>
            </div>
        </Link>
    )
}

export default withRouter(NavLink);