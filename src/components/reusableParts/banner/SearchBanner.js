import React, {useEffect, useState} from 'react';
import {Button} from "../form-items"
import {withRouter} from "react-router-dom";
import {StyledBanner} from "./banner-style";
import StyledSearch from "../search/Search";

const SearchBanner = props => {
    const {btn_name, title, path, items, searchPath} = props;
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
                <div className="search-container">
                    <Button
                        onClick={() => props.history.push(path)}
                        bgOnHover={"#d8e6f6"}
                        bg={"#e7f0fa"}
                        color={"#4557dc"}
                        height="30px"
                        width="8%"
                        min_width="100px"
                        margin={"0"}
                    >
                        {btn_name}
                    </Button>
                    <StyledSearch searchPath={searchPath} items={items}/>
                </div>
            </div>
        </StyledBanner>
    );
};

export default withRouter(SearchBanner);