import React from 'react';
import {Divider} from "pcln-design-system";
import {Content} from "../../reusableParts/accordion/content/content-style";
/*import {Content} from './mother-style'
import HighRiskCard from "./cards/HightRiskCard";
import MedicalHistoryCard from "./cards/MedicalHistoryCard";
import ContactsCard from "./cards/ContactsCard";*/
import {withRouter} from "react-router-dom";

function DriverContent(props) {
    const {driver} = props;
    return (
        <>
            <Content>
                {driver &&
                <>
                    <Divider borderColor={"black"} width={1} className="divider"/>
                    <div className="card">
                        <span className="title">Contacts</span>
                        {/*<ContactsCard mother={mother}/>*/}
                    </div>
                    <div className="card">
                        <span className="title">Medical history</span>
                        {/*<MedicalHistoryCard mother={mother}/>*/}
                    </div>
                    <div className="card">
                        <span className="title">High risk</span>
                        {/*<HighRiskCard mother={mother}/>*/}
                    </div>
                    <div className="see-more" onClick={() => props.history.push(`/drivers/${driver.id}`)}><p>See
                        more</p></div>
                </>
                }
            </Content>
        </>
    )
}

export default withRouter(DriverContent);