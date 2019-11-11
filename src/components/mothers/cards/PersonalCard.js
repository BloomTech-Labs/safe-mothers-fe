import React from 'react';
import {Card} from "../../reusableParts/accordion/content/content-style";
import {defineCarrier, defineOwnerPhone, defineVillage, NO_DATA, yesNoIDN} from "../mother-utils";

export default function PersonalCard({mother}) {
    return (
        <Card>
            <div className="card-content">
                    <ul className="fields">
                        <li>Expected Due Date</li>
                        <li>Age</li>
                        <li>Village</li>
                        <li>Owns a phone</li>
                        <li>Primary Phone Number</li>
                        <li>Phone Carrier</li>
                        <li>Has Alternative Phone</li>
                        <li>Alternative Phone Owner</li>
                        <li>Has Interest in Education</li>
                    </ul>
                    <ul className="values">
                        <li>{mother.edd ? mother.edd : 'N/A'}</li>
                        <li>{mother.age ? mother.age : 'N/A'}</li>            
                        <li>{defineVillage(mother)}</li>
                        <li>{yesNoIDN(mother.own_phone)}</li>
                        <li>{mother.phone_number ? mother.phone_number : NO_DATA}</li>
                        <li>{defineCarrier(mother)}</li>
                        <li>{yesNoIDN(mother.other_phone)}</li>
                        <li>{defineOwnerPhone(mother)}</li>
                        <li>{yesNoIDN(mother.want_education)}</li>
                    </ul>
            </div>
        </Card>
    )
}