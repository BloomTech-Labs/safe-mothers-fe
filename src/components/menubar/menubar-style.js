import styled, {keyframes} from "styled-components";

export const animateIn = keyframes`
  0%{
    width: 10%;
    left: 50%;
  }
  100% {
    width: 100%;
    left: 0%;
  }
`;

export const Container = styled.div`
    background: #282E74;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 80px;

    @media (max-width: 1024px) {
        justify-content: center;
    }
    
    .link{
        color: white;
        &:hover { 
            .dash-button{
                background: ${props => props.theme.navbar.linkColor};
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
            color: ${props => props.theme.navbar.linkColor};
        }
    }
    
    .focus{
        background: ${props => props.theme.navbar.linkColor};
        position: absolute;
        left: 0%;
        top: 44px;
        width: 100%;
        height: 7px;
     }  
     
     .focus-link{
        color: ${props => props.theme.navbar.linkColor};
     }
     
    .links{
        display: flex;
        justify-content: flex-end;
        width: 35%;
        margin-right: 2%;


        @media (max-width: 1024px) {
            width: 90%;
            justify-content: center;
            margin-right: 0%;
        }
    }
    
    .link-container{
        position: relative;
        margin-top: 30px;
        margin-left: 3%;
        margin-right: 3%;
    }
    
`;