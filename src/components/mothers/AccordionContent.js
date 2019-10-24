import React from 'react';
import MotherContent from './MotherContent';
import {StyledContents} from './mother-style'


export default function AccordionContent(props) {
    const {mother} = props;
    return (
        <StyledContents>
            <div className="att-list">
                <ul className="list">
                    <li>Age:</li>
                    <li>Marital Status:</li>
                    <li>Wife Order:</li>
                    <li>Education:</li>
                    <li>Education Level:</li>
                    <li>Pregnant:</li>
                    <li>Due Date:</li>
                    <li>Village:</li>
                    <br/>
                    <li>Phone Owner:</li>
                    <li>Phone Carrier:</li>
                    <li>Phone Number:</li>
                </ul>
                <ul className="list-values">
                    <li>{mother.age ? mother.age : 'N/A'}</li>
                    <li>{mother.marital_status ? mother.marital_status : 'N/A'}</li>
                    <li>{mother.wife_order ? mother.wife_order : 'N/A'}</li>
                    <li>{mother.attend_school ? mother.attend_school : 'N/A'}</li>
                    <li>{mother.education ? mother.education : 'N/A'}</li>
                    <li>Unknown DB Value</li>
                    <li>{mother.edd ? mother.edd : 'N/A'}</li>
                    <li>{mother.villiage ? mother.villiage : 'N/A'}</li>
                    <br/>
                    <li>{mother.owner_phone ? mother.owner_phone : 'N/A'}</li>
                    <li>{mother.carrier ? mother.carrier : 'N/A'}</li>
                    <li>{mother.phone_number ? mother.phone_number : 'N/A'}</li>
                </ul>
            </div>


            <MotherContent mother={mother}/>
        </StyledContents>
    )
};
