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
        width: 70%;
        text-align: left;
        margin: 0 2%;
    }
    .header-info{
        width: 5%;
         @media (max-width: 730px) {
            display: none;
        }
        @media (min-width: 730px) {
            width: 14%;
            text-align: right;
        }
        @media (min-width: 769px) {
            width: 12%;
            text-align: right;
        }
        @media (min-width: 850px) {
                width: 11%;
                text-align: right;
        }
    }
    .acc-data{
        width: 23%; 
        @media (min-width: 500px) {
            width: 15%;
            text-align: right;
        }  
        @media (min-width: 600px) {
            width: 17%;
            text-align: right;
        }  
        @media (min-width: 700px) {
            width: 19%;
            text-align: right;
        }  
         @media (min-width: 731px) {
             width: 6%;
             text-align: center;
        }
         @media (min-width: 769px) {
            width: 5%;
            text-align: right;
        }
        @media (min-width: 850px) {
                width: 8%;
                text-align: center;
        }
    }
`;

export default function Header(props) {
    const {info} = props;
    return(
        <StyledHeader>
            <div className="header-name">Name</div>
            <div className="header-info">{info}</div>
            <div className="acc-data">Data</div>
        </StyledHeader>
    )
}