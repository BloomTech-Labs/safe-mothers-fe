import React from 'react';
import {StyledLabel} from './mother-style'
import {Badge} from 'pcln-design-system';
import SVG from 'react-inlinesvg/lib';
import Sun from './resources/Sun.svg';
import Rain from './resources/Rain.svg';
import Pregnant from './resources/Pregnant.svg';
import Baby from './resources/Baby.svg';
import Born from './resources/Born.svg';
import {HIGHT_RISK, defineRainSeason, defineDrySeason, RAIN_SEASON, DRY_SEASON} from "./mother-utils";

export default function AccordionLabel(props) {
    const {mother, risk} = props;
    const rain_season = defineRainSeason(mother.edd);
    const dry_season = defineDrySeason(mother.edd);
    return (
        <StyledLabel>
            <span className="name">{mother.name}</span>
            <div className="inline-badges">
                {
                    mother.amt_saved > 0 &&
                    <Badge className="badge" color="secondary">{mother.amt_saved ? mother.amt_saved : '$0'}</Badge>
                }

                {
                    risk === HIGHT_RISK &&
                    <Badge className="badge" color="error">
                        {HIGHT_RISK}
                    </Badge>
                }
            </div>
            <div className="inline">
                {false && <SVG src={Pregnant}/>}
                {false && <SVG src={Baby}/> }

                {true && <SVG src={Born}/>}
                {true && <p className="svg-text">Delivered</p>}

                {
                    rain_season === RAIN_SEASON &&
                    <SVG src={Rain} className="svg-icon"/>
                }
                {
                    dry_season === DRY_SEASON &&
                    <SVG src={Sun} className="svg-icon"/>
                }
                <span>DUE DATE {mother.edd}</span>
            </div>
        </StyledLabel>
    )
}
