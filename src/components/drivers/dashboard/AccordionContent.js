import React from 'react';
import {StyledContents} from '../../reusableParts/accordion/content/content-style';
import DriverContent from './DriverContent';
import {yesNoIDN, defineBasicValue} from "../form/driver-utils";


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
                        <li>Latitude:</li>
                        <li>Longitude:</li>
                        <br/>
                    </ul>
                    <ul className="list-values">
                        <li>{yesNoIDN(driver.married)}</li>
                        <li>{ defineBasicValue(['Iganga'], driver.district, driver.district_other)}</li>
                        <li>{ defineBasicValue(['Makuutu','Nawwandala'],driver.subcounty, driver.subcounty_other)}</li>
                        <li>{ defineBasicValue(['Nabitende','Bugongo','Nawandala', 'Namusiisi', 'Itanda'],driver.stage, driver.parish_other)}</li>
                        <li>{ driver.latitude ? driver.latitude: 'N/A'}</li>
                        <li>{ driver.longitude ? driver.longitude: 'N/A'}</li>
                        <br/>
                    </ul>
                </div>
            </div>
            <DriverContent driver={driver}/>
        </StyledContents>
    )
};