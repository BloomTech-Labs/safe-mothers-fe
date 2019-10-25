import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import {connect} from "react-redux";
import {logout} from "../../actions/authActions";
import {Link} from "react-router-dom";

const animateIn = keyframes`
  0%{
    width: 10%;
    left: 50%;
  }
  100% {
    width: 100%;
    left: 0%;
  }
`;

const BannerContainer = styled.div`
  font-family: 'Asap', sans-serif;
  display: flex;
  
  .text {
    font-size: 1.5rem;
  }
  
  .dash-button{
    color: white;
    border-bottom: 3px solid white;
    font-size: 1.2rem;
    margin: 10px;
    background: #282E74;
    border-bottom: white;
    position: absolute;
    left: 300px;
    top: 100px;
    width: 20px;
    height: 20px;
    
  &:hover {
    animation: ${animateIn} 2s ease-in-out
  }
  
`;

const Container = styled.div`
    background: #282E74;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 80px;
    
    .link{
        color: white;
        &:hover { 
            .dash-button{
                background: yellow;
                position: absolute;
                left: 50%;
                top: 44px;
                width: 10%;
                height: 7px;
                animation: ${animateIn} 300ms ease-in-out            
                animation-fill-mode: forwards; 
                transition: 1s;
            }  
        }
        &:hover {
            color: yellow;
        }
    }
    
    .focus{
        background: yellow;
        position: absolute;
        left: 0%;
        top: 44px;
        width: 100%;
        height: 7px;
     }  
     
     .focus-link{
        color: yellow;
     }
     
    .links{
        display: flex;
        justify-content: flex-end;
        width: 30%;
        margin-right: 2%;
    }
    
    .link-container{
        position: relative;
        margin-top: 30px;
        margin-left: 3%;
        margin-right: 3%;  
    }
    
`;

const MenuBar = (props) => {
    const [active, setActive] = useState();
    return (
        <>
            <Container>
                <div className="links">
                    <div className="link-container">
                        <Link onClick={() => setActive(1)} className={"link " + (active === 1 ? "focus-link" : "")}
                              to="/dashboard">
                            Home <div className="dash-button"></div>
                            <div className={active === 1 ? "focus" : ""}></div>
                        </Link>
                    </div>
                    <div className="link-container">
                        <Link onClick={() => setActive(2)} className={"link " + (active === 2 ? "focus-link" : "")}
                              to="/mothers">
                            Mom <div className="dash-button"></div>
                            <div className={active === 2 ? "focus" : ""}></div>
                        </Link>
                    </div>
                    <div className="link-container">
                        <Link onClick={() => setActive(3)} className={"link " + (active === 3 ? "focus-link" : "")}
                              to="/drivers">
                            Driver <div className="dash-button"></div>
                            <div className={active === 3 ? "focus" : ""}></div>
                        </Link>
                    </div>
                    <div className="link-container">
                        <Link onClick={() => setActive(4)} className={"link " + (active === 4 ? "focus-link" : "")}
                              to="/settings">
                            Settings
                            <div className="dash-button"></div>
                            <div className={active === 4 ? "focus" : ""}></div>
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
export default connect("", {logout})(MenuBar);
