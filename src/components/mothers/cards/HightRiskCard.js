import React from 'react';
import {Card} from "../../reusableParts/accordion/content/content-style";
import {defineHighRisk, yesNoIDN, returnValue, returnNumberValue} from "../mother-utils";

export default function HighRiskCard({mother, state}) {

    return (
        <Card>
            <div className="card-content ">
                <ul className="align-left">
                    <li>Anemia</li>
                    <li>Malaria</li>
                    <li>Obstructed labor</li>
                    <li>Malpresentation</li>
                    <li>Antepartum hemorrhage</li>
                    <li>Postpartum hemorrhage</li>
                    {state &&
                    <div className="list-break">
                        <li>Retained placenta</li>
                        <li>Placenta previa</li>
                        <li>Stillbirth</li>
                        <li>How many stillbirth</li>
                        <li>Other complication</li>
                        <li>Name of the complication</li>
                    </div>}
                </ul>
                <ul className="align-left values high-risk-card">
                    <li>{defineHighRisk(mother.anemia)}</li>
                    <li>{defineHighRisk(mother.malaria)}</li>
                    <li>{defineHighRisk(mother.obstructed_labor)}</li>
                    <li>{defineHighRisk(mother.malpresent)}</li>
                    <li>{defineHighRisk(mother.aph)}</li>
                    <li>{defineHighRisk(mother.pph)}</li>
                    {state &&
                    <div className="list-break-values">
                        <li>{defineHighRisk(mother.ret_placenta)}</li>
                        <li>{defineHighRisk(mother.placenta_previa)}</li>
                        <li>{yesNoIDN(mother.hx_stillbirth)}</li>
                        <li>{returnNumberValue(mother.no_stillbirths)}</li>
                        <li>{yesNoIDN(mother.other_complication)}</li>
                        <li>{returnValue(mother.complication_specify)}</li>
                    </div>
                    }

                </ul>
            </div>
        </Card>
    )
}