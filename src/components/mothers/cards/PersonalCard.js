import React from 'react';
import {Card} from '../mother-style'

export default function PersonalCard({mother}) {
    return (
        <Card>
            <div className="card-content">
                    <ul className="align-left">
                        <li>Age:</li>
                        <li>Marital Status:</li>
                        <li>Wife Order:</li>
                        <li>Education:</li>
                        <li>Education Level:</li>
                        <li>Pregnant:</li>
                        <li>Due Date:</li>
                        <li>Village:</li>
                    </ul>
                    <ul className="align-left values">
                        <li>{mother.age ? mother.age : 'N/A'}</li>
                        <li>{mother.marital_status ? mother.marital_status : 'N/A'}</li>
                        <li>{mother.wife_order ? mother.wife_order : 'N/A'}</li>
                        <li>{mother.attend_school ? mother.attend_school : 'N/A'}</li>
                        <li>{mother.education ? mother.education : 'N/A'}</li>
                        <li>Unknown_DB_Value</li>
                        <li>{mother.edd ? mother.edd : 'N/A'}</li>
                        <li>{mother.villiage ? mother.villiage : 'N/A'}</li>
                    </ul>
            </div>
        </Card>
    )
}