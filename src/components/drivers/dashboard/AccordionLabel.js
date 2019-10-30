import React from 'react';
import {StyledLabel} from '../../reusableParts/accordion/label/label-style';
import LabelStatus from "../../reusableParts/accordion/label/LabelStatus";
import LabelDate from "../../reusableParts/accordion/label/LabelDate";

import Fix from '../resources/Active.svg';
import Learn from '../resources/Active.svg';
import Active from '../resources/Active.svg';

import LabelBadges from "./LabelBadges";
import {Rating, ratings} from "../driver-style";

function AccordionLabel(props) {
    const {driver} = props;
    return (
        <StyledLabel>
            <span className="name">{driver.name}</span>
            <LabelBadges entity={driver}/>
            <LabelStatus icon={Active} text={"On duty"}/>
            <div className="icon-container">
                <Rating bg={ratings[7]}>{7}.0</Rating>
            </div>
            <LabelDate date={"2019-12-19"}/>
        </StyledLabel>
    )
}

export default AccordionLabel;
