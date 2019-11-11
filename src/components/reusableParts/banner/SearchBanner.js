import React, {useEffect, useState} from 'react';
import {Button} from "../form-items"
import {withRouter} from "react-router-dom";
import {StyledBanner} from "./banner-style";
import StyledSearch from "./Search";

const SearchBanner = props => {
    const {btn_name, title, path, items} = props;
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
                    <StyledSearch items={items}/>
                </div>
            </div>
        </StyledBanner>
    );
};

export default withRouter(SearchBanner);