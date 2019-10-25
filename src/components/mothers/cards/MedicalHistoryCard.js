import React from 'react';
import {Card} from '../mother-style'

export default function MedicalHistoryCard({mother}) {
    return (
        <Card>
            <div className="card-content">
                <ul className="align-left">
                    <li>Number of pregnancies</li>
                    <li>Number of birth</li>
                    <li>Had twins or more</li>
                    <li>Living children</li>
                    <li>Children under five</li>
                    <li>Infant death</li>
                </ul>
                <ul className="align-left values">
                    <li>{mother.no_pg}</li>
                    <li>{mother.no_birth}</li>
                    <li>{mother.no_stillbirths}</li>
                    <li>{mother.no_children}</li>
                    <li>{mother.no_under5}</li>
                    <li>{mother.no_childdeath}</li>
                </ul>
            </div>
        </Card>
    )
}