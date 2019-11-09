import React from 'react';
import {Divider} from "pcln-design-system";
import {Content} from "../../reusableParts/accordion/content/content-style";
import HighRiskCard from "../cards/HightRiskCard";
import MedicalHistoryCard from "../cards/MedicalHistoryCard";
import ContactsCard from "../cards/ContactsCard";
import {withRouter} from "react-router-dom";

function MotherContent(props) {
    const {mother} = props;
    return (
        <>
            <Content>
                {mother &&
                <>
                    <Divider borderColor={"black"} width={1} className="divider"/>
                    <div className="card">
                        <span className="title">Contacts</span>
                        <ContactsCard mother={mother}/>
                    </div>
                    <div className="card">
                        <span className="title">Medical history</span>
                        <MedicalHistoryCard mother={mother}/>
                    </div>
                    <div className="card">
                        <span className="title">High risk</span>
                        <HighRiskCard state={false} mother={mother}/>
                    </div>
                </>
                }
            </Content>
        </>
    )
}

export default withRouter(MotherContent);

