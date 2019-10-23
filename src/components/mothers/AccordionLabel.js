import React from 'react';


export default function AccordionLabel (props) {
    const {mother} = props
    return (
        <>
        {mother.name}, Due Date: {mother.edd}
        </>
    )
}