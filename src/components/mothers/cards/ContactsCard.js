import React from 'react';
import {Card} from '../mother-style'

export default function ContactsCard({mother}) {
    return (
        <Card>
            <div className="card-content">
                <ul className="align-left">
                    <li>Phone Owner:</li>
                    <li>Phone Carrier:</li>
                    <li>Phone Number:</li>
                </ul>
                <ul className="align-left values">
                    <li>{mother.owner_phone ? mother.owner_phone : 'N/A'}</li>
                    <li>{mother.carrier ? mother.carrier : 'N/A'}</li>
                    <li>{mother.phone_number ? mother.phone_number : 'N/A'}</li>
                </ul>
            </div>
        </Card>
    )
}