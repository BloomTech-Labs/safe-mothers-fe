import React from 'react';
// import {Card} from '../mother-style'

export default function PersonalCard() {
    return (
        <div>
            <div className="card-content">
                    <ul className="align-left">
                        <li>Age:</li>
                        <li>Marital Status:</li>
                        <li>Education:</li>
                        <li>Education Level:</li>
                        <li>Villiage:</li>
                    
                    </ul>
                    <ul className="align-left values">
                        <li>30</li>
                        <li>Married</li>
                        <li>Yes</li>
                        <li>School</li>
                        <li>N/A</li>
                    </ul>
            </div>
        </div>
    )
}