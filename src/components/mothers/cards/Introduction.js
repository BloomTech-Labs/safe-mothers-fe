import React from 'react';
import {Card} from "../../reusableParts/accordion/content/content-style";
import {defineInterviewer, NO_DATA, YES, yesNoIDN} from "../mother-utils";

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
                    <li>{defineInterviewer(mother)}</li>
                    <li>{mother.current_pg ? YES : NO_DATA}</li>
                    <li>{yesNoIDN(mother.due_now)}</li>
                    <li>{yesNoIDN(mother.deliver_elsewhere)}</li>
                    <li>{yesNoIDN(mother.hx_cesarean)}</li>
                    <li>{yesNoIDN(mother.hx_complication)}</li>
                    <li>{yesNoIDN(mother.current_multip)}</li>
                </ul>
            </div>
        </Card>
    )
}