import React from 'react';
import {Card} from "../../reusableParts/accordion/content/content-style";

export default function MotorcycleCard({driver}) {
    return (
        <Card>
            <div className="card-content">
                <ul className="fields">
                    <li>Owns Vehicle:</li>
                    <li>Available at Night:</li>
                    <li>Number of Drop-Offs:</li>
                </ul>
                <ul className="values">
                    <li>{driver.own_boda ? driver.own_boda: 'N/A'}</li>
                    <li>{driver.boda_night ? driver.boda_night: 'N/A'}</li>
                    <li>{driver.transfers ? driver.transfers: 'N/A'}</li>
                </ul>
            </div>
        </Card>
    )
}