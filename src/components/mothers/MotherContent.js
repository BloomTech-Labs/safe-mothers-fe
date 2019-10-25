import React from 'react';
import {Divider} from "pcln-design-system";
import {Content} from './mother-style'
import HighRiskCard from "./HightRiskCard";
import MedicalHistoryCard from "./MedicalHistoryCard";
import SuppliesForPregnancyCard from "./SuppliesForPregnancyCard";
import FinanceAndInsuranceCard from "./FinanceAndInsuranceCard";

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

