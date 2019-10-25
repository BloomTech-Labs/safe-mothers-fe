import React from 'react';
import {Divider} from "pcln-design-system";
import {Content} from './mother-style'
import HighRiskCard from "./cards/HightRiskCard";
import MedicalHistoryCard from "./cards/MedicalHistoryCard";
import SuppliesForPregnancyCard from "./cards/SuppliesForPregnancyCard";
import FinanceAndInsuranceCard from "./cards/FinanceAndInsuranceCard";

export default function MotherContent(props) {
    const {mother} = props;
    return (
        <>
            <Content>
                <Divider borderColor={"black"} width={1} className="divider"/>
                <div className="card">
                    <span className="title">Finance and insurance</span>
                    <FinanceAndInsuranceCard mother={mother}/>
                </div>
                <div className="card">
                    <span className="title">Supplies for pregnancy</span>
                    <SuppliesForPregnancyCard mother={mother}/>
                </div>
                <div className="card">
                    <span className="title">Medical history</span>
                    <MedicalHistoryCard mother={mother}/>
                </div>
                <div className="card">
                    <span className="title">High risk</span>
                    <HighRiskCard mother={mother}/>
                </div>
            </Content>
        </>
    )
}

