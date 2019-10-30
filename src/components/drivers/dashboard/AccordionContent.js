import React from 'react';
import {StyledContents} from "../../reusableParts/accordion/label/label-style";
import DriverContent from "./DriverContent";

export default function AccordionContent(props) {
    const {driver} = props;

    return (
        <StyledContents>
            <div className="card">
                <div className="att-list">
                    <ul className="list">
                        <li>Age:</li>
                        <li>Marital Status:</li>
                        <li>Wife Order:</li>
                        <li>Education:</li>
                        <li>Education Level:</li>
                        <li>Pregnant:</li>
                        <li>Due Date:</li>
                        <li>Village:</li>
                        <br/>
                    </ul>
                    <ul className="list-values">
                        <li> 'N/A'</li>
                        <li> 'N/A'</li>
                        <li>'N/A'</li>
                        <li>'N/A'</li>
                        <li>'N/A'</li>
                        <li>'N/A'</li>
                        <li>'N/A'</li>
                        <li>'N/A'</li>
                        <br/>
                    </ul>
                </div>
            </div>
            <DriverContent driver={driver}/>
        </StyledContents>
    )
};