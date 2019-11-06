import React from 'react';
import {Card} from "../../reusableParts/accordion/content/content-style";

export default function PersonalCard() {
    return (
        <Card>
            <div className="card-content">
                    <ul className="align-left">
                        <li>Has Children:</li>
                        <li>Number of Children:</li>
                        <li>Children Info:</li>
                        <li>Reason for becomming a driver:</li>
                        <li>Dream for Future:</li>
                    
                    </ul>
                    <ul className="align-left values">
                        <li>Yes</li>
                        <li>3</li>
                        <li>
                            Jarret, M, 3
                            Bonnie, F, 2
                            Margaret, F, 1
                        </li>
                        <li>I would like to continue to help people!</li>
                        <li>I love to help people!</li>
                    </ul>
            </div>
        </Card>
    )
}