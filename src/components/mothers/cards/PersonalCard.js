import React from 'react';
import {Card} from "../../reusableParts/accordion/content/content-style";
import {defineCarrier, defineOwnerPhone, NO_DATA} from "../mother-utils";

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
                        <li>{mother.villiage ? mother.villiage : 'N/A'}</li>
                        <li>{mother.own_phone ? mother.own_phone : 'N/A'}</li>
                        <li>{mother.phone_number ? mother.phone_number : NO_DATA}</li>
                        <li>{defineCarrier(mother)}</li>
                        <li>{mother.other_phone ? mother.other_phone : 'N/A'}</li>
                        <li>{defineOwnerPhone(mother)}</li>
                        <li>{mother.want_education ? mother.want_education : 'N/A'}</li>
                    </ul>
            </div>
        </Card>
    )
}