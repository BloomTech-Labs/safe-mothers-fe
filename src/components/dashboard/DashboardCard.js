import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg/lib/index';
import Motorcyclist from './resources/Motorcyclist.svg';
import Pregnant from './resources/Pregnant.svg';
import {MOTHER} from "./dashboard-utils";
import {withRouter} from "react-router-dom";

export const CardContent = styled.div`
    margin: 2%;
    padding-bottom: 2%;
    display: flex;
    align-items: center;
    border: 1.5px solid ${props => props.theme.primary.darkGray};
    background: white;
    white-space: nowrap;
    cursor: pointer;
  
    .icon{
      width: 50%;
      fill: blue;
    }
    .grid-item{
        width: 33%;
    }
     .icon-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 20%;
    }
    .content-container{
        width: 80%;
        display: flex;
    }
`;

const DashboardCard = props => {
    const {cardState, val1, val2, val3} = props;
    return (
        <CardContent
            onClick={() => props.history.push(`/${cardState}`)}>
            <div className="icon-container">
                <h3>{cardState === MOTHER ? "Mothers" : "Drivers"}</h3>
                {cardState === MOTHER
                    ? <SVG src={Pregnant} className="icon"/>
                    : <SVG src={Motorcyclist} className="icon"/>
                }
            </div>
            <div className="content-container">
                <div className="grid-item" onClick={val1}>
                    <h1>{val1}</h1>
                    <p>{cardState === MOTHER ? "Due within 30 days" : "New Drivers"}</p>
                </div>
                <div className="grid-item" onClick={val2}>
                    <h1>{val2}</h1>
                    <p>{cardState === MOTHER ? "Late Due Day" : "Active Drivers"}</p>
                </div>
                <div className="grid-item" onClick={val3}>
                    <h1>{val3}</h1>
                    <p>{cardState === MOTHER ? "High Risk" : "Active 5 Stars"}</p>
                </div>
            </div>
        </CardContent>
    );
};

export default withRouter(DashboardCard);
