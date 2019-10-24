import React from 'react';
import styled from 'styled-components';


export default function AccordionLabel (props) {
    const {mother} = props
    return (
        <StyledLabel>
        <p>{mother.name}</p>
        <p>DUE DATE {mother.edd}</p>
        </StyledLabel>
    )
}

const StyledLabel = styled.div`
    font-family: 'Asap', sans-serif;
    display: flex;
    width: 100%;
    justify-content: space-between;
    background:white;
`