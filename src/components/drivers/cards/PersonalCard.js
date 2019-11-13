import React from 'react';
import {Card} from "../../reusableParts/accordion/content/content-style";

export default function PersonalCard() {
    return (
        <Card>
            <div className="card-content">
                    <ul className="fields">
                        <li>Name:</li>
                        <li>Marital Status:</li>
                        <li>Education:</li>
                        <li>Education Level:</li>
                        <li>District:</li>
                        <li>Subcounty:</li>
                        <li>Parish:</li>
                    </ul>
                    <ul className="values">
                        <li>30</li>
                        <li>Married</li>
                        <li>Yes</li>
                        <li>School</li>
                        <li>Iganga</li>
                        <li>Nawandala</li>
                        <li>Bugono Stage</li>

                    </ul>
            </div>
        </Card>
    )
}