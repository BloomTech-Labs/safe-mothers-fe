import React from 'react';
import styled from 'styled-components';
import Info from './resources/Information.svg'
import {SVGBtn} from "./form-items";
const StyledTooltip = styled.div`
    position: absolute;
    left: 100%;
    bottom: 57px;
    
    .tooltip-text {
        display: none;
        width: 700%;
        background-color: #555;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 50%;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: -50%;
        margin-left: -60px;
        opacity: 0;
        transition: opacity 0.3s;
    }

    .tooltip-text::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
    }
     
    &:hover {
        .tooltip-text {
          display: block;
          opacity: 1;
        }
    }

`;

export default function Tooltip({tip}) {
    return (
        <StyledTooltip className="tooltip"><SVGBtn className="info-icon" bg="#8ceb9d" bgOnHover="#6eca7f" src={Info} />
            <span className="tooltip-text">{tip}</span>
        </StyledTooltip>
    )
}