import React from 'react';
import {Card} from '../mother-style'

export default function FinanceAndInsuranceCard({mother}) {
    return (
        <Card>
            <div className="card-content">
                <ul className="align-left">
                    <li>Money saved</li>
                    <li>Money decision maker</li>
                    <li>Antenatal care visits</li>
                    <li>Location of delivery</li>
                    <li>Method of arriving</li>
                    <li>Health insurance</li>
                    <li>insurance type</li>
                </ul>
                <ul className="align-left values">
                    <li>{mother.saving_money}</li>
                    <li>{mother.saving_money}</li>
                    <li>Money decision maker</li>
                    <li>Antenatal care visits</li>
                    <li>{mother.deliver_place}</li>
                    <li>{mother.deliver_specific}</li>
                    <li>{mother.insurance}</li>
                    <li>{mother.insurance_type}</li>
                </ul>
            </div>
        </Card>
    )
}