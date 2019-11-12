import styled from "styled-components";

export const StyledLabel = styled.div`
    font-family: 'Asap', sans-serif;
    display: flex;
    align-items: center;
    width: 100%;
    font-weight: bold;
    border-radius:3px;
    padding: 0.4% 0;
    @media (max-width: 500px) {
        padding-right: 3%;
    }  
    @media (max-width: 700px) {
        padding-top: 0;
        padding-bottom: 0;
    }
    
    .add-icon{
        @media (max-width: 700px) {
            height: 15px;
            width: 15px;
        }
    };
    
    .hide{
         @media (max-width: 600px) {
            display: none;
        }
    }
    
    .add-icon-container{
        height: 100%;
        display: flex;
        align-items: center;
    };
    
    .name{
        width: 15%; 
        min-width: 15%;
        text-align: left;
        padding-left: 1%;
        white-space: nowrap;
        display: flex;
        align-items: center;
    }
    .see-more{
        padding-right: 3%;
        fill: #ab7bff;
        width: 20%;
        min-width: 20px;
        &:hover{
            fill: #d896ff;
        }
    }
    
    .inline-badges{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0 20px;
        width: 65%; 
        @media (max-width: 900px) {
            visibility: hidden;
        }
    }
    
    .inline{
        display: flex;
        align-items: center;
        width: 7%;
        white-space: nowrap;
        @media (max-width: 700px) {
          justify-content: flex-end;
        }
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
    
    .responsive-icon{
        @media (max-width: 730px) {
            display: none;
        }
        @media (max-width: 850px) {
            margin-left: 40%;
        }
    }
    
    .modal{
        background: red;
        border-radius: 5px; !important
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
    white-space: nowrap;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.width};
    min-width: ${props => props.min_width};
    margin: 1% 1%;
    padding: 0.5% 0.1% 0.5% 0.5%;
    
    background:  ${props => props.badgeColor};
    border-radius: 20px;
    color:  ${props => props.badgeText};
    @media (max-width: 950px) { 
        font-size: 0.5rem;
    }
    .label-icon{
       height: 20px;
       width: 20px;
        @media (max-width: 950px) {
            height: 12px;
            width: 12px;
        }
   }
   
   .badge-content{
        display: flex;
        justify-content: center;
        align-items: center;
   }
`;

