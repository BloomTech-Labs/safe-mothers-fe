import styled from "styled-components";

export const Container = styled.div`

    justify-items: center;
    display: flex;
    justify-content: center;
    background: #282E74;

    
    .map {
        width: 60%; 

        @media (max-width: 1024px) {
            visibility: hidden;
            width: 0%;
        }
        
    }

    .form-container{
        width: 40%;
        display: flex;
        flex-direction: column;
        height: 100vh;
        background: white;
        align-items: center;
        justify-content: flex-start;

        @media (max-width: 1024px) {
            width: 75%;
        }
    }

    .svg-logo{
        width: 90%;
        height: 30%;
    }

    .form-contents{
        font-family: 'Asap', sans-serif;
        display: flex;
        align-items: center;
        max-width: 300px;
        flex-direction: column;

        label{
            text-align: left;
            margin-bottom: 7%;
        }

    }

    .error-message{
        color: red;
        font-size: 0.7rem;
    }

    .btn-container {
        display:flex;
        justify-content: space-between;
    }

    .form-inputs{
        background:  ${props => props.theme.primary.darkGray};
        outline: none;
        width: 381px;
        height: 48px;
        border-radius: 2px;
        border-width:0px;
        border:none;
        padding-left: 12px;  
    }

    .submit-btn{
        color: black;
        width: 122px;
        height: 48px;
        margin: 40px;
        background:  ${props => props.theme.primary.darkGray};
        
        &:hover {
            background:  ${props => props.theme.primary.gray};
        }
    }
    .arrow{
        font-size: 35px;
        position: absolute;
        top: -20px;
        left: 62%;
    }
`;
