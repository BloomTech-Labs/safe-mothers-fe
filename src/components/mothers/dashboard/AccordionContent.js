import React from 'react';
import MotherContent from '../MotherContent';
import {StyledContents} from "../../reusableParts/accordion/label/label-style";


export default function AccordionContent(props) {
    const {mother} = props;
    return (
        <StyledContents>
            {mother.id &&
            <>
                <div className="card">
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
                        </ul>
                        <ul className="list-values">
                            <li>{mother.age ? mother.age : 'N/A'}</li>
                            <li>{mother.marital_status ? mother.marital_status : 'N/A'}</li>
                            <li>{mother.wife_order ? mother.wife_order : 'N/A'}</li>
                            <li>{mother.attend_school ? mother.attend_school : 'N/A'}</li>
                            <li>{mother.education ? mother.education : 'N/A'}</li>
                            <li>Unknown_DB_Value</li>
                            <li>{mother.edd ? mother.edd : 'N/A'}</li>
                            <li>{mother.villiage ? mother.villiage : 'N/A'}</li>
                            <br/>
                        </ul>
                    </div>
                </div>
                <MotherContent className="mother-content" mother={mother}/>
            </>
            }
        </StyledContents>
    )
};