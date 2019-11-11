import React from 'react';

import {StyledLabel} from '../../reusableParts/accordion/label/label-style'

import SVG from 'react-inlinesvg/lib/index';
import Sun from '../resources/Sun.svg';
import Rain from '../resources/Rain.svg';

import SeeMore from '../../reusableParts/resources/eye.svg'

import {defineRainSeason, defineDrySeason, RAIN_SEASON, DRY_SEASON} from "../mother-utils";
import LabelBadges from "./LabelBadges";
import LabelDate from "../../reusableParts/accordion/label/LabelDate";
import {withRouter} from "react-router-dom";

function AccordionLabel(props) {
    const {mother, risk} = props;
    const rain_season = defineRainSeason(mother.edd);
    const dry_season = defineDrySeason(mother.edd);

    return (
        <StyledLabel>
            {mother.id &&
            <>
                <span className="name"><SVG onClick={() => props.history.push(`/mothers/${mother.id}`)} className="see-more" src={SeeMore}/>{mother.name}</span>
                <LabelBadges entity={mother} risk={risk}/>
                <div className="icon-container">
                    {rain_season === RAIN_SEASON && <SVG src={Rain} className="icon responsive-icon"/>}
                    {dry_season === DRY_SEASON && <SVG src={Sun} className="icon responsive-icon"/>}
                </div>
                <LabelDate date={mother.edd}/>
            </>
            }
        </StyledLabel>
    )
}

export default withRouter(AccordionLabel);
