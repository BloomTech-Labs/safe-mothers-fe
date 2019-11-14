import React from 'react';
import {Card} from "../../reusableParts/accordion/content/content-style";
import {
    defineBasicValue,
    defineDecisionMaker,
    defineEducation,
    defineMaritalStatus,
    returnNumberValue,
    returnValue,
    yesNoIDN
} from "../mother-utils";
import {wife_rank, wives_number} from "../form/lists";

export default function Demographics({mother}) {
    return (
        <Card>
            <div className="card-content">
                <ul className="fields">
                    <li>Educated:</li>
                    <li>School Level:</li>
                    <li>Money decision maker:</li>
                    <li>Households:</li>
                    <li>Marital Status:</li>
                    <li>Partners Education:</li>
                    <li>Partners Education Level:</li>
                    <li>Polygamy:</li>
                    <li>Number of Wives:</li>
                    <li>Wife Order:</li>
                    <li>insurance</li>
                    <li>Specified insurance:</li>
                    <li>Community-based insurance:</li>
                    <li>Private commercial insurance:</li>
                    <li>Insurance other:</li>
                    <li>Sell Assets:</li>
                </ul>
                <ul className="values">
                    <li>{yesNoIDN(mother.attend_school)}</li>
                    <li>{defineEducation(mother.education)}</li>
                    <li>{defineDecisionMaker(mother.money_control)}</li>
                    <li>{returnNumberValue(mother.total_house)}</li>
                    <li>{defineMaritalStatus(mother)}</li>
                    <li>{yesNoIDN(mother.spouse_school)}</li>
                    <li>{defineEducation(mother.spouse_education)}</li>
                    <li>{yesNoIDN(mother.polygamy)}</li>
                    <li>{defineBasicValue(wives_number, mother.no_wives, mother.no_wives_other)}</li>
                    <li>{defineBasicValue(wife_rank, mother.wife_order, mother.wife_order_other)}</li>
                    <li>{yesNoIDN(mother.insurance)}</li>
                    <li>{returnValue(mother.insurance_type_other)}</li>
                    <li>{yesNoIDN(mother.insurance_CBO)}</li>
                    <li>{yesNoIDN(mother.insurance_private)}</li>
                    <li>{yesNoIDN(mother.insurance_other)}</li>
                    <li>{yesNoIDN(mother.sell_asset)}</li>
                </ul>
            </div>
        </Card>
    )
}