import React from 'react';
import {Card} from "../../reusableParts/accordion/content/content-style";
import {defineBasicValue, NO_DATA, returnNumberValue, returnValue, yesNoIDN} from "../mother-utils";
import {number_anc, place_deliver, transport_type} from "../form/lists";

export default function BirthPreparedness({mother}) {
    return (
        <Card>
            <div className="card-content">
                <ul className="fields">
                    <li>Antenatal Care Visits</li>
                    <li>Location Of Delivery</li>
                    <li>Specific delivery location</li>
                    <li>Method Of Arrival</li>
                    <li>Supplies Purchased</li>
                    <li>Money Saved</li>
                    <li>Amount Saved</li>
                </ul>
                <ul className="values">
                    <li>{defineBasicValue(number_anc, mother.no_anc)}</li>
                    <li>{defineBasicValue(place_deliver, mother.deliver_place, mother.deliver_place_other)}</li>
                    <li>{returnValue(mother.deliver_specific)}</li>
                    <li>{defineBasicValue(transport_type, mother.plan_transport, mother.plan_transport_other)}</li>
                    <li>{yesNoIDN(mother.purchase_supplies)}</li>
                    <li>{yesNoIDN(mother.saving_money)}</li>
                    <li>{returnNumberValue(mother.amt_saved)}</li>
                </ul>
            </div>
        </Card>
    )
}