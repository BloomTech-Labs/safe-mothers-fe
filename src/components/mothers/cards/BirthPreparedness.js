import React from 'react';
import {Card} from "../../reusableParts/accordion/content/content-style";
import {NO_DATA} from "../mother-utils";

export default function BirthPreparedness({mother}) {
    return (
        <Card>
            <div className="card-content">
                <ul className="fields">
                    <li>Antenatal Care Visits</li>
                    <li>Location Of Delivery</li>
                    <li>Method Of Arrival</li>
                    <li>Supplies Purchased</li>
                    <li>Money Saved</li>

                </ul>
                <ul className="values">
                    <li>{mother.number_anc ? mother.number_anc : NO_DATA}</li>
                    <li>{mother.deliver_place ? mother.deliver_place : NO_DATA}</li>
                    <li>{mother.plan_transport ? mother.plan_transport : NO_DATA}</li>
                    <li>{mother.purchase_supplies ? mother.purchase_supplies : NO_DATA}</li>
                    <li>{mother.saving_money ? mother.saving_money : NO_DATA}</li>
                </ul>
            </div>
        </Card>
    )
}