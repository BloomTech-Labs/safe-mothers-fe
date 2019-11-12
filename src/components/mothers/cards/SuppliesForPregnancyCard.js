import React from 'react';
import {Card} from "../../reusableParts/accordion/content/content-style";
import {yesNoIDN, returnValue} from "../mother-utils";

export default function SuppliesForPregnancyCard({mother}) {
    return (
        <Card>
            <div className="card-content single">
                <ul className="fields">
                    <li>Mama kit</li>
                    <li>Mackintosh</li>
                    <li>Razor</li>
                    <li>Pad</li>
                    <li>Cotton</li>
                    <li>Soap</li>
                    <li>Gloves</li>
                    <li>Medication</li>
                    <li>Baby clothes</li>
                    <li>Blanket</li>
                    <li>Sheets</li>
                    <li>Supplies other</li>
                </ul>
                <ul className="supply-values">
                    <li>{yesNoIDN(mother.mama_kit)}</li>
                    <li>{yesNoIDN(mother.mackintosh)}</li>
                    <li>{yesNoIDN(mother.razor)}</li>
                    <li>{yesNoIDN(mother.pad)}</li>
                    <li>{yesNoIDN(mother.cotton)}</li>
                    <li>{yesNoIDN(mother.soap)}</li>
                    <li>{yesNoIDN(mother.gloves)}</li>
                    <li>{yesNoIDN(mother.medication)}</li>
                    <li>{yesNoIDN(mother.baby_clothes)}</li>
                    <li>{yesNoIDN(mother.blanket)}</li>
                    <li>{yesNoIDN(mother.sheets)}</li>
                    <li>{returnValue(mother.supplies_other)}</li>
                </ul>
            </div>
        </Card>
    )
}