import React from 'react';
// import {Card} from '../mother-style';

export default function MotorcycleCard() {
    return (
        <div>
            <div className="card-content">
                <ul className="align-left">
                    <li>Owns Vehicle:</li>
                    <li>Available at Night:</li>
                    <li>Worked for Mother-Boda:</li>
                    <li>Number of Drop-Offs:</li>
                    <li>Story:</li>
                </ul>
                <ul className="align-left values">
                    <li>Yes</li>
                    <li>Yes</li>
                    <li>Yes</li>
                    <li>3</li>
                    <li>In 2018...</li>
                </ul>
            </div>
        </div>
    )
}