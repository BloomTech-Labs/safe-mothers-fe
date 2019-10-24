import React from 'react';
import styled from 'styled-components';
import {Badge} from 'pcln-design-system';


export default function AccordionLabel (props) {
    const {mother} = props
    return (
        <StyledLabel>
        <p className="label-left">
        {mother.name}
        <Badge className="badge" color="secondary">{mother.amt_saved ? mother.amt_saved :'Null'}</Badge>
        <Badge className="badge" color="error">RISK</Badge>
        </p>
        <p className="label-right">DUE DATE {mother.edd}</p>
        </StyledLabel>
    )
}

const StyledLabel = styled.div`
    font-family: 'Asap', sans-serif;
    display: flex;
    width: 100%;
    justify-content: space-between;
    background:white;

    p{
        justify-content: space-between;
        width: 33%;
    }

    .badge{
        margin-left: 10%;
    }

    .label-left{
        text-align: left;
        justify-content: space-evenly;
    }

    .label-right{
        text-align: right;
    }
`