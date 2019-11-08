import React from 'react';
import {Card} from "../../reusableParts/accordion/content/content-style";

export default function Demographics({mother}) {
    return (
        <Card>
            <div className="card-content">
                <ul className="fields">
                    <li>Educated</li>
                    <li>Money decision maker</li>
                    <li>Households</li>
                    <li>Marital Status</li>
                    <li>Partners Education</li>
                    <li>Polygamy</li>
                    <li>Number of Wives</li>
                    <li>Wife Order</li>
                    <li>insurance</li>
                    <li>Sell Assets</li>
                </ul>
                <ul className="values">
                    <li>{mother.attend_school}</li>
                    <li>{mother.money_control}</li>
                    <li>{mother.total_house}</li>
                    <li>{mother.marital_status}</li>
                    <li>{mother.spouse_school}</li>
                    <li>{mother.polygamy}</li>
                    <li>{mother.wife_order}</li>
                    <li>{mother.insurance_type}</li>
                    <li>{mother.sell_asset}</li>
                </ul>
            </div>
        </Card>
    )
}