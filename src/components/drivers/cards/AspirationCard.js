import React from 'react';
import {Card} from "../../reusableParts/accordion/content/content-style";

export default function AspirationCard({driver}) {
    return (
        <Card>
            <div className="card-content">
                    <ul className="fields">
                        <li>Number of Children:</li>
                        <li>Children Info:</li>
                        <li>Reason for becomming a driver:</li>
                        <li>Dream for Future:</li>
                    
                    </ul>
                    <ul className="values over-flow">
                        <li>{driver.number_kids ? driver.number_kids : 'N/A'}</li>
                        <li>{driver.kid_info ? driver.kid_info : 'N/A'}</li>
                        <li>{driver.motivation ? driver.motivation : 'N/A'}</li>
                        <li>{driver.dream ? driver.dream : 'N/A'}</li>
                    </ul>
            </div>
        </Card>
    )
}