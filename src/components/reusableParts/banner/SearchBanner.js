import React, {useEffect, useState} from 'react';
import ConfirmDelete from '../ConfirmDelete';
import {SVGBtn} from '../form-items';
import Close from '../resources/Close.svg';
import Edit from '../resources/Edit.svg';
import {Button} from "../form-items"
import {withRouter} from "react-router-dom";
import {StyledBanner} from "./banner-style";
import {Search} from "grommet-icons";
import {SearchElement} from "./Search";

const SearchBanner = props => {
    const {btn_name, title, path} = props;
    const [scrollY, setScrollY] = useState(0);
    const [position, setPosition] = useState(-60);

    function logit() {

        if (scrollY > 120 && scrollY < 180) {
            setPosition((window.pageYOffset - 120) + (-60))
        }
        if (scrollY > 180) {
            setPosition(0);
        }
        if (scrollY < 120) {
            setPosition(-60);
        }
        setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
        }

        watchScroll();
        // Remove listener (like componentWillUnmount)
        return () => {
            window.removeEventListener("scroll", logit);
        };
    });


    return (
        <StyledBanner position={scrollY} banner_position={position}>
            <div className="banner">
                <h1 className="banner-title">{title}</h1>
                <div className="btn-container">
                    <Button
                        onClick={() => props.history.push(path)}
                        bgOnHover={"#5bff6c"}
                        bg={"#8eff9c"}
                        height="30px"
                        width="35%"
                        color={"#288a37"}
                    >
                        {btn_name}
                    </Button>
                    <SearchElement>
                        <div className="searchContainer">
                            {/*<p className="searchLabel">SEARCH FOR KEYWORDS</p>*/}
                            <Search className="searchIcon"/>
                            <input type="text" className="search" placeholder={"Type mother name"}/>
                        </div>
                    </SearchElement>

                </div>
            </div>
        </StyledBanner>
    );
};

export default withRouter(SearchBanner);