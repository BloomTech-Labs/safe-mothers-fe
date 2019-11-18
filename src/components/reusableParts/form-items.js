import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const FormItems = styled.div`
    li{
        padding-bottom: 48px;
        white-space: nowrap;
    }
    .labels{
       width: 100% !important;
    }
    
    .inline{
        display: flex;
        justify-content: center;
    }
    
    .regular-input{
        margin-left: 1%;
        min-width: 20px;
        margin-bottom: 20px;
        outline: none;
        
        width: 100%;
        height: 45px;
        border-radius: 2px;
        border-width: 0px;
        border: 1.5px solid ${props => props.theme.primary.darkGray};
        padding-left: 12px;  
         &:hover {
            border: 1.5px solid ${props => props.theme.primary.gray};
        }
    }
    
    .date{
        color: red;
    }
    
    .hidden-input {
        display: none;
    }
    .btn-container{
        margin-top: 25px;
        text-align: center;
    }
    .submit-btn{
        text-transform: uppercase;
        font-size: 16px;
        background: #e7f0fa;
        height: 48px;
        width: 25%;
        margin: 2%;
        border: none;
        border-radius: 2px;
        color: #1337F1;
        &:hover {
            color: #1337F1;
            background: #d8e6f6;
        }
    }
    
    .errormessage{
        color: red;
        position: absolute;
        bottom: 22px;
        left: 10px;
    }
    .errormessage_positioning{
        bottom: -14px;
        left: 15px;
    }
    
   .error-holder{
        position: relative;
   }
`;


export const Button = styled.div`
        text-transform: uppercase;
        white-space: nowrap;
        font-size: 16px;
        background: ${props => props.bg}
        height: ${props => props.height ? props.height : '48px'};
        font-weight: bold;
        width: ${props => props.width ? props.width : '25%'};
        cursor: pointer;
        min-width:  ${props => props.min_width ? props.min_width : '20px'};
        border: none;
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: ${props => props.margin ? props.margin : '2%'};
        color:  ${props => props.color };
        &:hover {
            color:  ${props => props.colorOnHover};
            background: ${props => props.bgOnHover};
        }
`;

export const SVGBtn = styled(SVG)`
    fill: ${props => props.bg};
    &:hover{ 
        fill: ${props => props.bgOnHover};
    }
`;

