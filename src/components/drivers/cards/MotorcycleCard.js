import React from 'react';
import {Card} from "../../reusableParts/accordion/content/content-style";

export default function MotorcycleCard() {
    return (
        <Card>
            <div className="card-content">
                <ul className="fields">
                    <li>Owns Vehicle:</li>
                    <li>Available at Night:</li>
                    <li>Worked for Mother-Boda:</li>
                    <li>Number of Drop-Offs:</li>
                    <li>Story:</li>
                </ul>
                <ul className="values">
                    <li>Yes</li>
                    <li>Yes</li>
                    <li>Yes</li>
                    <li>3</li>
                    <li>In 2018...</li>
                </ul>
            </div>
        </Card>
    )
}