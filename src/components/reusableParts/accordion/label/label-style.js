import styled from "styled-components";


export const StyledLabel = styled.div`
    font-family: 'Asap', sans-serif;
    display: flex;
    align-items: center;
    width: 100%;
    font-weight: bold;
    border-radius:3px;
    font-size:1vw;
    padding: 1% 0;
    .name{
        width: 20%; 
        text-align: left;
        padding-left: 1%;
    }
    
    .inline-badges{
        display: flex;
        justify-content: flex-start;
        margin: 0 20px;
        width: 55%; 
    }
    
    .inline{
        display: flex;
        align-items: center;
        width: 7%;
        
    }
    
    .status-icon{
        width: 40%;
        height: 40%;
    }
     
    .status-text{
        padding-left: 5%;
    }     
     
    .icon-container{
        width: 8%;
        height: 8%;
    }
    
    .icon{
        width: 30%;
        height: 30%;
        margin: 0 1%;
    }
    
    .modal{
        background: red;
        border-radius: 5px; !important
    }
     
    .add-btn{
        margin-left: 2%;
        position: relative;
        border-radius: 50%;
        height: 28px;
        width: 28px;
        border: none;
        outline: none;
        background: ${props => props.theme.primary.gray};
        &:hover{
            background: gray;
            .add-icon{ 
                color: white;
            }
        }
    }
    
    .add-icon{ 
        color: black;
        position: absolute;
        font-size: 30px; 
        top: -32%;
        left: 20%;
    }
     
    p{
        justify-content: space-between;
        width: 33%;
    }
        
    .svg-icon{
        width: 3%;
        height: 3%;
        margin: 0 1%;
    }
    
    .svg-text{
        font-weight: normal;
        text-align: left;
        padding-left: 3%;
    }
     .modal-title{
        font-family: 'Asap', sans-serif;
   }    
`;

export const CustomBadge = styled.div`
    font-family: 'Asap', sans-serif;
    font-size:1vw;
    text-transform: uppercase;
    margin-left: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    background:  ${props => props.badgeColor}
    border-radius: 20px;
    color:  ${props => props.badgeText}
    width: 18%;
    height: 100%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
    position: relative;
    
    .delete-badge{
        border: none;
        background: ${props => props.badgeDark};
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;    
        font-size:1vw;
        color:  ${props => props.badgeText}
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        padding-bottom: 7%;
        left: 77%;
        height: 100%;
    
       &:hover{
            width: 25%;
            filter: brightness(85%);
       }
       .delete-icon{
            font-size:1vw;
            position: absolute;
            top: 5%;
       }
    }
    
    
    
`;
