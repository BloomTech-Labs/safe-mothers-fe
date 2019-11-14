import React from 'react';
import {Card} from "../../reusableParts/accordion/content/content-style";
import {yesNoIDN} from "../form/driver-utils";
import {defineBasicValue} from "../form/driver-utils";

export default function PersonalCard({driver}) {
    return (
        <Card>
            <div className="card">
                <div className="card-content">
                    <ul className="fields">
                        <li>Marital Status:</li>
                        <li>District:</li>
                        <li>Subcounty:</li>
                        <li>Parish:</li>
                        <br/>
                    </ul>
                    <ul className="values">
                        <li>{yesNoIDN(driver.married)}</li>
                        <li>{ defineBasicValue(['Iganga'], driver.district, driver.district_other)}</li>
                        <li>{ defineBasicValue(['Makuutu','Nawwandala'],driver.subcounty, driver.subcounty_other)}</li>
                        <li>{ defineBasicValue(['Nabitende','Bugongo','Nawandala', 'Namusiisi', 'Itanda'],driver.stage, driver.parish_other)}</li>
                        <br/>
                    </ul>
                </div>
            </div>
        </Card>
    )
}