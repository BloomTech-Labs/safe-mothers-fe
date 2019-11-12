import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    font-family: 'Asap', sans-serif;
    min-width: 500px;
    height: 100vh;
    font-size: 0.8rem;
    background: #F9FBFC;
    color: #001833;
    position: relative;
     @media (max-width: 1024px) {
       font-size: 1rem;
    }
    @media (max-width: 1400px) {
       font-size: 0.7rem;
    }
    @media (min-width: 1800px) {
       font-size: 0.9rem;
    }
    @media (min-width: 1900px) {
       font-size: 1rem;
    }
    a {
        text-decoration: none;
        color: #001833;
    }
    ul{
       list-style-type: none; 
    }
    
    
    .column-title{
        text-transform: uppercase;
        margin-bottom: 10px;
        font-weight: bold;
        display: inline;
        line-height: 16px;
        min-width: 200px;
    }
    
`;

export const Wrapper = styled.div`
    max-width: 1500px;
    margin: 80px auto;
    .no_white_space{
        white-space: nowrap;
    }
`;
