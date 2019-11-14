import React, {useEffect, useState} from 'react';
import ConfirmDelete from '../ConfirmDelete';
import {SVGBtn} from '../form-items';
import Close from '../resources/Close.svg';
import Edit from '../resources/Edit.svg';
import {Button} from "../form-items"
import {withRouter} from "react-router-dom";
import {StyledBanner} from "./banner-style";

const Banner = props => {
    const {person, path, state, back} = props;
    const [scrollY, setScrollY] = useState(0);
    const [position, setPosition] = useState(-60);

    function logit() {

        if(scrollY > 120 && scrollY < 180){
            setPosition((window.pageYOffset - 120) + (-60))
        }
        if(scrollY > 180){
            setPosition(0);
        }
        if(scrollY < 120){
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
                <h1 className="banner-title">{person}</h1>
                <div className="btn-container">
                    {!state &&
                    <Button
                        onClick={() => props.history.push(path)}
                        bgOnHover={"#d8e6f6"}
                        bg={"#e7f0fa"}
                        color={"#4557dc"}
                        height="30px"
                    >
                        EDIT
                        <SVGBtn bg="#1337F1" className="edit-svg" src={Edit}/>
                    </Button>
                    }
                    {state &&
                    <button className="submit-btn" type="submit">Save</button>
                    }
                    {!state &&
                    <Button bgOnHover="#db4343" height="30px" bg="#EB5757"
                            color="white"
                            onClick={() => props.delete()}>
                        DELETE
                        <SVGBtn bg="#ffffff" className="del-svg" src={Close}/>
                    </Button>
                    }
                    <div className="back">
                        <p onClick={() => props.history.push(back)}>Back</p>
                    </div>
                </div>
            </div>
        </StyledBanner>
    );
};

export default withRouter(Banner);
