import React from 'react';
import {StyledLabel} from './mother-style'
import {Badge} from 'pcln-design-system';


export default function AccordionLabel(props) {
    const {mother} = props;
    return (
        <StyledLabel>
            <p className="label-left">
                {mother.name}
                <Badge className="badge" color="secondary">{mother.amt_saved ? mother.amt_saved : '$0'}</Badge>
                <Badge className="badge" color="error">RISK</Badge>
            </p>
            <p className="label-right">DUE DATE {mother.edd}</p>
        </StyledLabel>
    )
}
