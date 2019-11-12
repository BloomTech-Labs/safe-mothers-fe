import React from 'react';
import {Card} from "../../reusableParts/accordion/content/content-style";

export default function ContactCard() {
    return (
        <Card>
            <div className="card-content">
                <ul className="fields">
                    <li>Primary Phone:</li>
                    <li>Carrier:</li>
                    <li>Secondary Phone:</li>
                    <li>Carrier:</li>
                </ul>

                <ul className="values">
                    <li>5465465465465</li>
                    <li>UTL</li>
                    <li>5465162136515</li>
                    <li>UTL</li>
                </ul>
            </div>
        </Card>
    )
}