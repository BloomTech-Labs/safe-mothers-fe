import React from 'react';
import {StyledContents} from '../../reusableParts/accordion/content/content-style';
import DriverContent from './DriverContent';

export default function AccordionContent(props) {
    const {driver} = props;
    console.log("driver ", driver);
    return (
        <StyledContents>
            <div className="card">
                <div className="att-list">
                    <ul className="list">
                        <li>Name:</li>
                        <li>Marital Status:</li>
                        <li>Education:</li>
                        <li>Education Level:</li>
                        <li>District:</li>
                        <li>Subcounty:</li>
                        <li>Parish:</li>
                        <br/>
                    </ul>
                    <ul className="list-values">
                        <li>{driver.name}</li>
                        <li>Married</li>
                        <li>Yes</li>
                        <li>School</li>
                        <li>Iganga</li>
                        <li>Nawandala</li>
                        <li>Bugono Stage</li>
                        <br/>
                    </ul>
                </div>
            </div>
            <DriverContent driver={driver}/>
        </StyledContents>
    )
};