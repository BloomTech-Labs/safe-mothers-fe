import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    font-weight: bold;
    font-size: 0.9rem;
     @media (max-width: 500px) {
        padding-right: 3%;
    }  
    .header-name{
        width: 14%;
        text-align: left;
        margin: 0 2%;
        @media (max-width: 900px) {
            width: 70%;
        }
    }
    .header-info{
        width: 7%;
        margin: 0 -2%;
        @media (min-width: 1100px ) {
            width: 9%;
        }
    }
    .acc-data{
        width: 12%; 
        white-space: nowrap;
        margin: 0 8%; 
        @media (min-width: 600px ) and (max-width: 700px) {
            margin: 0 1% 0 6%;
        }
        @media (min-width: 700px ) and (max-width: 770px) {
            margin: 0 1% 0 8%;
        }
        @media (min-width: 770px ) and (max-width: 900px) {
            margin: 0 1% 0 6%;
        } 
        @media (min-width: 901px ) and (max-width: 1100px) {
            margin: 0 0 0 0;
        }
        @media (min-width: 1100px ) {
            width: 7%;
            margin: 0;
        }
    }
     
    .label-name{
        width: 63%;
        text-align: left;
         @media (max-width: 900px) {
                display: none;
        }
        
    }
`;

export default function Header(props) {
    const {info, label, label2} = props;
    return (
        <StyledHeader>
            <div className="header-name">Name</div>
            <div className="label-name">{label}</div>
            <div className="header-info">{info}</div>
            <div className="acc-data">{label2}</div>
        </StyledHeader>
    )
}