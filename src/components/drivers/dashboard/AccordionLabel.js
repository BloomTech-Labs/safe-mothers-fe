import React from 'react';
import {StyledLabel} from '../../reusableParts/accordion/label/label-style';
import LabelDate from "../../reusableParts/accordion/label/LabelDate";
import LabelBadges from "./LabelBadges";
import {Rating, ratings} from "../driver-style";
import SVG from "react-inlinesvg";
import SeeMore from "../../reusableParts/resources/eye.svg";
import {withRouter} from "react-router-dom";

function AccordionLabel(props) {
    const {driver} = props;
    return (
        <StyledLabel>
            <span className="name"><SVG onClick={() => props.history.push(`/drivers/${driver.id}`)} className="see-more" src={SeeMore}/>{driver.driver_name}</span>
            <LabelBadges entity={driver}/>
            <div className="icon-container">
                <Rating className="responsive-icon" bg={ratings[driver.reliability]}>{driver.reliability}.0</Rating>
            </div>
            <LabelDate date={"2019-12-19"}/>
        </StyledLabel>
    )
}

export default withRouter(AccordionLabel);
