import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import ConfirmDelete from '../reusableParts/ConfirmDelete';
import {SVGBtn} from '../reusableParts/form-items';
import Close from '../reusableParts/resources/Close.svg';
import Edit from '../reusableParts/resources/Edit.svg';
import {Button} from "../reusableParts/form-items"
import {withRouter} from "react-router-dom";

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
                        bgOnHover="#d8e6f6"
                        bg="#e7f0fa"
                        height="30px"
                        color="#1337F1"
                    >
                        EDIT
                        <SVGBtn bg="#1337F1" className="edit-svg" src={Edit}/>
                    </Button>
                    }
                    {state &&
                    <button className="submit-btn" type="submit">Save</button>
                    }

                    <Button bgOnHover="#db4343" height="30px" bg="#EB5757" color="white">
                        DELETE
                        <SVGBtn bg="#ffffff" className="del-svg" src={Close}/>
                    </Button>
                    <div className="back">
                        <p onClick={() => props.history.push(back)}>Back</p>
                    </div>
                </div>
            </div>
        </StyledBanner>
    );
};

export default withRouter(Banner);


export const StyledBanner = styled.div`
    .banner{
        align-items: center;
        height: 60px;
        display: flex; 
        justify-content: space-between;
        text-align: center;
        color: white;
        background: #282E74;
        z-index: 10;
        width: 102%;
        right: -11px;
    /*    animation-fill-mode: forwards; 
        transition: 0.5s;*/
        position: ${props => props.position > 120 ? "fixed" : "absolute"};
        top: ${props =>{
            if(props.position > 120 && props.position < 179) return `${props.banner_position}px`;
            if(props.position > 180) return "0px";
            return "60px";
        }};
    }
    
    @media (max-width: 1024px){
        height: 60px;
       
        color: white;
        align-items: center;
        flex-direction: row;
        margin: 0 auto;
        justify-content: space-around;
    }

    .banner-title{
        margin-left: 3%;
    
        @media (max-width: 1024px){
            white-space: nowrap;
            text-align: center;
           
        }
    
    }
    
    .btn-container{
        
            display: flex;
            min-width: 350px;
            margin-top: 15px;
            margin-right: 2%;
            margin-bottom: 15px;
            justify-content: space-evenly;
            align-items: center;
            @media (max-width: 1024px){
                
                width: 60%
                
            }
    }
    
    .back{
            width: 10%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            cursor: pointer;
            p{
                font-size: 1rem;
                text-transform: uppercase;       
            }
        }
        
    .submit-btn{
        height: 30px;
    }
`;