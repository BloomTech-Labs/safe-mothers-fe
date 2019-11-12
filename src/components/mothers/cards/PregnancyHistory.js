import React from 'react';
import {Card} from "../../reusableParts/accordion/content/content-style";
import {returnNumberValue, yesNoIDN} from "../mother-utils";

export default function Demographics({mother}) {
    return (
        <Card>
            <div className="card-content single">
                <ul className="fields">
                    <li>Number Of Pregnancies</li>
                    <li>Number of Births</li>
                    <li>Living Children</li>
                    <li>Children Under Five</li>
                    <li>Infant Death</li>
                    <li>Number of Children Lost</li>
                </ul>
                <ul className="supply-values">
                    <li>{returnNumberValue(mother.no_pg)}</li>
                    <li>{returnNumberValue(mother.no_birth)}</li>
                    <li>{returnNumberValue(mother.no_children)}</li>
                    <li>{returnNumberValue(mother.no_under5)}</li>
                    <li>{yesNoIDN(mother.hx_childdeath)}</li>
                    <li>{returnNumberValue(mother.no_childdeath)}</li>
                </ul>
            </div>
        </Card>
    )
}