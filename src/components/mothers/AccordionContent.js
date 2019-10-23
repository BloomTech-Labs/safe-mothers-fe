import React from 'react';
import MotherContent from './MotherContent';


export default function AccordionContent (props) {
    const {mother} = props
    return (
        <>
        Age: {mother.age}

        <MotherContent mother={mother} />
        </>
    )
}