import React from 'react';
import {Card} from "../../reusableParts/accordion/content/content-style";
import {defineCarrier} from "../form/driver-utils";


export default function ContactCard({driver}) {

    

    return (
        <Card>
            <div className="card-content">
                <ul className="fields">
                    <li>Primary Phone:</li>
                    <li>Secondary Phone:</li>
                    <li>Carrier:</li>
                </ul>

                <ul className="values">
                    <li>{ driver.phone ? driver.phone: 'N/A'}</li>
                    <li>{ driver.phone_2 ? driver.phone_2: 'N/A'}</li>
                    <li>{defineCarrier(driver)}</li>
                   
                </ul>
            </div>
        </Card>
    )
}