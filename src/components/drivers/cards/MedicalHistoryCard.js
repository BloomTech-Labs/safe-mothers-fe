import React from 'react';
// import {Card} from '../mother-style';

export default function MedicalHistoryCard() {
    return (
        <div>
            <div className="card-content">
                <ul className="align-left">
                    <li>Total Birth Deliveries</li>
                    <li>Births at Hospital</li>
                    <li>Self Deleveries</li>
                    <li>Deliveries with Twins</li>
                </ul>
                <ul className="align-left values">
                    <li>4</li>
                    <li>2</li>
                    <li>2</li>
                    <li>2</li>      
                </ul>
            </div>
        </div>
    )
}