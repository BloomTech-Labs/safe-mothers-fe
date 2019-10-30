import React from 'react';

import {StyledLabel} from '../../reusableParts/accordion/label/label-style'

import SVG from 'react-inlinesvg/lib/index';
import Sun from '../resources/Sun.svg';
import Rain from '../resources/Rain.svg';

//SVG paths for mother states
import Pregnant from '../resources/Pregnant.svg';
import Baby from '../resources/Baby.svg';
import Born from '../resources/Born.svg';

import {defineRainSeason, defineDrySeason, RAIN_SEASON, DRY_SEASON} from "../mother-utils";
import LabelBadges from "./LabelBadges";
import LabelStatus from "../../reusableParts/accordion/label/LabelStatus";
import LabelDate from "../../reusableParts/accordion/label/LabelDate";

function AccordionLabel(props) {
    const {mother, risk} = props;
    const rain_season = defineRainSeason(mother.edd);
    const dry_season = defineDrySeason(mother.edd);

    return (
        <StyledLabel>
            {mother.id &&
            <>
                <span className="name">{mother.name}</span>
                <LabelBadges entity={mother} risk={risk}/>
                <LabelStatus icon={Born} text={"Delivered"}/>
                <div className="icon-container">
                    {rain_season === RAIN_SEASON && <SVG src={Rain} className="icon"/>}
                    {dry_season === DRY_SEASON && <SVG src={Sun} className="icon"/>}
                </div>
                <LabelDate date={mother.edd}/>
            </>
            }

        </StyledLabel>
    )
}

export default AccordionLabel;
