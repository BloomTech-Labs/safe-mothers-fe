import React from 'react';
import {Card} from "../../reusableParts/accordion/content/content-style";
import {defineCarrier, defineOwnerPhone, NO_DATA} from "../mother-utils";

export default function ContactsCard({mother}) {
    return (
        <Card>
            <div className="card-content">
                <ul className="fields">
                    <li>Phone Owner:</li>
                    <li>Phone Carrier:</li>
                    <li>Phone Number:</li>
                </ul>
                <ul className="values">
                    <li>{defineOwnerPhone(mother)}</li>
                    <li>{defineCarrier(mother)}</li>
                    <li>{mother.phone_number ? mother.phone_number : NO_DATA}</li>
                </ul>
            </div>
        </Card>
    )
}