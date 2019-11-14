import React from 'react';
import {Divider} from "pcln-design-system";
import {Content} from "../../reusableParts/accordion/content/content-style";
import AspirationCard from "../cards/AspirationCard"
import ContactsCard from "../cards/ContactCard";
import MotorcycleCard from "../cards/MotorcycleCard";

function DriverContent(props) {
    const {driver} = props;
    return (
        <>
            <Content>
                {driver &&
                <>
                    <Divider borderColor={"black"} width={1} className="divider"/>
                    <div className="card">
                        <span className="title">Bio</span>
                        <AspirationCard driver ={driver} />
                    </div>
                    <div className="card">
                        <span className="title">Contacts</span>
                        <ContactsCard driver ={driver}/>
                    </div>
                    <div className="card">
                        <span className="title">Motorcycle</span>
                        <MotorcycleCard driver ={driver}/>
                    </div>
                </>
                }
            </Content>
        </>
    )
}

export default DriverContent;