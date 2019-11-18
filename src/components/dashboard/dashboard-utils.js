import {pregnancy_choices} from "../mothers/form/PregnancyComplication";
import React from "react";
import {risks} from "../mothers/mother-utils";

export const MOTHER = 'mothers';
export const DRIVER = 'drivers';


export function defineHighRisk(mothers) {
    let hr_mothers = mothers.filter(mother => defineMotherRisk(mother));
    return hr_mothers.length;
}

function defineMotherRisk(mother) {
    let hr_mother = risks.filter(risk => {
        return (mother[risk] === pregnancy_choices.EXPERIENCED_WITH_THIS_PREGNANCY ||
            mother[risk] === pregnancy_choices.EXPERIENCED_WITH_PRIOR_PREGNANCY ||
            mother[risk] === pregnancy_choices.EXPERIENCED_WITH_BOTH)
    });
    return (hr_mother.length > 0)
}

export function defineBestDrivers(drivers) {
    return drivers.filter(driver => driver.reliability === 5).length;

}