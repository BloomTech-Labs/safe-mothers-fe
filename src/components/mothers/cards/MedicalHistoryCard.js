import React from 'react';
import {Card} from "../../reusableParts/accordion/content/content-style";
import {NO_DATA} from "../mother-utils";

export default function MedicalHistoryCard({mother}) {
    return (
        <Card>
            <div className="card-content">
                <ul className="fields">
                    <li>Number of pregnancies</li>
                    <li>Number of birth</li>
                    <li>Had twins or more</li>
                    <li>Living children</li>
                    <li>Children under five</li>
                    <li>Infant death</li>
                </ul>
                <ul className="values">
                    <li>{mother.no_pg ? mother.no_pg : NO_DATA}</li>
                    <li>{mother.no_birth ? mother.no_birth : NO_DATA}</li>
                    <li>{mother.no_stillbirths ? mother.no_stillbirths : NO_DATA}</li>
                    <li>{mother.no_children ? mother.no_children : NO_DATA}</li>
                    <li>{mother.no_under5 ? mother.no_under5 : NO_DATA}</li>
                    <li>{mother.no_childdeath ? mother.no_childdeath : NO_DATA}</li>
                </ul>
            </div>
        </Card>
    )
}