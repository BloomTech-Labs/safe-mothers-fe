import React from 'react';
import MotherContent from './MotherContent';
import {StyledContents} from "../../reusableParts/accordion/content/content-style";
import {villages} from "../form/lists";
import {defineEducation, defineMaritalStatus, defineVillage, defineWifeOrder, NO, YES} from "../mother-utils";
import {choices} from "../form/YesNoDontknowDeclin";

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
                            {/*<li>Education:</li>*/}
                            <li>Education Level:</li>
                            <li>Pregnant:</li>
                            <li>Due Date:</li>
                            <li>Village:</li>
                            <br/>
                        </ul>
                        {console.log("mother ", mother.village)}
                        <ul className="list-values">
                            <li>{mother.age ? mother.age : 'N/A'}</li>
                            <li>{defineMaritalStatus(mother)}</li>
                            <li>{defineWifeOrder(mother)}</li>
                            {/*<li>{mother.attend_school ? mother.attend_school : 'N/A'}</li>*/}
                            <li>{defineEducation(mother.education)}</li>
                            <li>{mother.current_pg === choices.YES ? YES : NO}</li>
                            <li>{mother.edd ? mother.edd : 'N/A'}</li>
                            <li>{defineVillage(mother)}</li>
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