import React from 'react';
import {StyledContents} from '../../reusableParts/accordion/content/content-style';
import DriverContent from './DriverContent';
import {yesNoIDN} from "../form/driver-utils";

export default function AccordionContent(props) {
    const {driver} = props;
    console.log("driver ", driver);
    return (
        <StyledContents>
            <div className="card">
                <div className="att-list">
                    <ul className="list">
                        <li>Marital Status:</li>
                        <li>District:</li>
                        <li>Subcounty:</li>
                        <li>Parish:</li>
                        <br/>
                    </ul>
                    <ul className="list-values">
                        <li>{yesNoIDN(driver.married)}</li>
                        <li>{driver.district ? driver.district : 'N/A'}</li>
                        <li>{driver.subcounty ? driver.subcounty : 'N/A'}</li>
                        <li>{driver.stage ? driver.stage : 'N/A'}</li>
                        <br/>
                    </ul>
                </div>
            </div>
            <DriverContent driver={driver}/>
        </StyledContents>
    )
};