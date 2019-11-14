import React from 'react';
import {Card} from "../../reusableParts/accordion/content/content-style";
import {yesNoIDN} from "../form/driver-utils";
import {availableNight} from "../form/driver-utils";

export default function MotorcycleCard({driver}) {
    return (
        <Card>
            <div className="card-content">
                <ul className="fields">
                    <li>Owns Boda:</li>
                    <li>Available at Night:</li>
                    <li>Number of Drop-Offs:</li>
                </ul>
                <ul className="values">
                    <li>{yesNoIDN(driver.own_boda)}</li>
                    <li>{availableNight(driver)}</li>
                    <li>{driver.transfers ? driver.transfers: 'N/A'}</li>
                </ul>
            </div>
        </Card>
    )
}