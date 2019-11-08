import React from 'react';
import {Card} from "../../reusableParts/accordion/content/content-style";
import {NO_DATA} from "../mother-utils";

export default function Introduction({mother}) {
    return (
        <Card>
            <div className="card-content">
                <ul className="fields">
                    <li>Interviewer</li>
                    <li>Pregnant</li>
                    <li>Due Within 30 days</li>
                    <li>Deliver in Iganga Hospital</li>
                    <li>Sesarean Section</li>
                    <li>Complications During Delivery</li>
                    <li>Twins Pregnancy</li>
                </ul>
                <ul className="values">
                    <li>{mother.interviewer ? mother.interviewer: NO_DATA}</li>
                    <li>{mother.current_pg ? mother.current_pg : NO_DATA}</li>
                    <li>{mother.due_now ? mother.due_now : NO_DATA}</li>
                    <li>{mother.deliver_elsewhere ? mother.deliver_elsewhere : NO_DATA}</li>
                    <li>{mother.hx_cesarean ? mother.hx_cesarean : NO_DATA}</li>
                    <li>{mother.hx_complication ? mother.hx_complication : NO_DATA}</li>
                    <li>{mother.current_multip ? mother.current_multip : NO_DATA}</li>
                </ul>
            </div>
        </Card>
    )
}