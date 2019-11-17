import React from "react";
import styled from "styled-components";

const Error = (props) => {
    const {errMsg} = props
    return(
        <>
            {( typeof errMsg === 'string' && errMsg.length > 0) && 
                <StyledError className= "regular">
                <p className="error-holder" >{errMsg} </p>
                </StyledError>
            }
        </>
    )
}


export default Error;

const StyledError = styled.div`
    background: #fcf0f0;
    color: white;
    z-index: 50;
    border-radius: 2px;
    height: 48px;
    width: 60%;
    border-left: 5px solid #f50505;
    margin-bottom: 17px;
    

    .error-holder{
        width: 100%;
        color: red;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        padding: 0 3px;
    }
`
