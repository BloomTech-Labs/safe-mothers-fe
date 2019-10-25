import React from 'react';
import {Card} from './mother-style'

export default function SuppliesForPregnancyCard({mother}) {
    return (
        <Card>
                <ul className="align-center values">
                    <li>{mother.mama_kit}</li>
                    <li>{mother.mackintosh}</li>
                    <li>{mother.razor}</li>
                    <li>{mother.pad}</li>
                    <li>{mother.cotton}</li>
                    <li>{mother.soap}</li>
                    <li>{mother.gloves}</li>
                    <li>{mother.medication}</li>
                    <li>{mother.baby_clothes}</li>
                    <li>{mother.blanket}</li>
                    <li>{mother.sheets}</li>
                    <li>{mother.supplies_other}</li>
                </ul>
        </Card>
    )
}