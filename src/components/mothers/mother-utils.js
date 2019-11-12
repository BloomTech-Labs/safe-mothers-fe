import {marital_status, wives_number, education, phone_owner, carriers, villages, decision_maker} from "./form/lists";
import {choices} from "./form/YesNoDontknowDeclin";
import {pregnancy_choices} from "./form/PregnancyComplication";
import React from "react";
import {interviewers} from "./form/Interviewers";

export const NO_SEASON = "NO_SEASON";
//RAIN SEASONS
export const RAIN_SEASONS = ['09', '10', '11', '03', '04', '05'];
export const RAIN_SEASON = "RAIN_SEASON";
//DRY SEASONS
export const DRY_SEASONS = ['12', '01', '06', '07'];
export const DRY_SEASON = "DRY_SEASON";

export const defineRainSeason = (data) => {
    if (data) {
        const convertedData = data.split('-');
        const month = convertedData[1];
        if (RAIN_SEASONS.indexOf(month) !== -1) return RAIN_SEASON;
        return NO_SEASON;
    }
    return ""
};

export const defineDrySeason = (data) => {
    if (data) {
        const convertedData = data.split('-');
        const month = convertedData[1];
        if (DRY_SEASONS.indexOf(month) !== -1) return DRY_SEASON;
        return NO_SEASON;
    }
    return ""
};

export function defineDate() {
    let date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

//Reusable functions

export const defineBasicValue = (list, value, value2) => {
    const filtered_list = list.filter((item, index) => (index + 1) === value);
    if (filtered_list.length > 0) return filtered_list;
    if (value === choices.OTHER) return returnValue(value2);
    if (value === choices.IDN) return IDN;
    if (value === choices.DECLINES_TO_ANSWER) return DECLINES_TO_ANSWER;
    return NO_DATA;
};

export const returnNumberValue = (value) => {
    if(typeof value === 'number') return  value;
    return NO_DATA;
};

export const returnValue = (value) =>{
    if(value){
        return value.length > 0 ? value : NO_DATA;
    }
    return NO_DATA;
};


//Personal info
const DECLINES_TO_ANSWER = "Decline to answer";
const IDN = "I don`t know";
export const NO_DATA = 'N/A';
export const YES = "Yes";
export const NO = "No";

export const defineMaritalStatus = (mother) => {
    const status = marital_status.filter((item, index) => (index + 1) === mother.marital_status);
    if (status.length > 0) return status;
    if (mother.marital_status === choices.OTHER) return returnValue(mother.marital_status_other);
    if (mother.marital_status === choices.DECLINES_TO_ANSWER) return DECLINES_TO_ANSWER;
    return NO_DATA;
};

export const defineVillage = (mother) =>{
    const village = villages.filter((item, index) => (index + 1) === mother.village);
    if(village.length > 0 ) return village;
    if(mother.village === choices.OTHER) return mother.village_other;
    return NO_DATA;
};

export const defineWifeOrder = (mother) => {
    const no_wives = mother.no_wives;
    const order = wives_number.filter((item, index) => (index + 1) === no_wives);
    if (order.length > 0) return order;
    if (no_wives === choices.OTHER) return mother.no_wives_other;
    if (no_wives === choices.DECLINES_TO_ANSWER) return DECLINES_TO_ANSWER;
    return NO_DATA;
};

export const defineEducation = (schooled) => {
    const education_level = schooled;
    const level = education.filter((item, index) => (index + 1) === education_level);
    if (level.length > 0) return level;
    if (education_level === choices.IDN) return IDN;
    if (education_level === choices.DECLINES_TO_ANSWER) return DECLINES_TO_ANSWER;
    return NO_DATA;
};

//Contact info

export const defineOwnerPhone = (mother) => {
    const owner_phone = mother.owner_phone;
    const owner = phone_owner.filter((item, index) => (index + 1) === owner_phone);
    if (owner.length > 0) return owner;
    if (owner_phone === choices.OTHER) return mother.owner_phone_other;
    return NO_DATA;
};

export const defineCarrier = (mother) => {
    const carrier = mother.carrier;
    const filtered_carrier = carriers.filter((item, index) => (index + 1) === carrier);
    if (filtered_carrier.length > 0) return filtered_carrier;
    if (carrier === choices.OTHER) return mother.carrier_other;
    if (carrier === choices.IDN) return IDN;
    if (carrier === choices.DECLINES_TO_ANSWER) return DECLINES_TO_ANSWER;
    return NO_DATA;
};

//High Risk

export function defineHighRisk(risk) {
    if (risk === pregnancy_choices.EXPERIENCED_WITH_THIS_PREGNANCY) return <p className="status-yes">"Exp w/ this
        pregnancy"</p>;
    if (risk === pregnancy_choices.EXPERIENCED_WITH_PRIOR_PREGNANCY) return <p className="status-yes">"Exp w/ prior
        pregnancy"</p>;
    if (risk === pregnancy_choices.EXPERIENCED_WITH_BOTH) return <p className="status-yes">"Exp w/ both"</p>;
    return <p className="status-no">"Not experienced"</p>
}

export function yesNoIDN(item) {
    if (item === choices.YES) return YES;
    if (item === choices.NO) return NO;
    if (item === choices.IDN) return IDN;
    if (item === choices.DECLINES_TO_ANSWER) return DECLINES_TO_ANSWER;
    return NO_DATA;
}

//Heigh Risk Label

const risks = [
    'anemia',
    'malaria',
    'obstructed_labor',
    'malpresent',
    'aph',
    'pph',
    'ret_placenta',
    'placenta_previa',
];

//RISK
export const HIGH_RISK = "high risk";
export const NO_RISK = "no risk";

export function highRisk(mother) {
    const risk_array = risks.filter(item =>
        (mother[item] === pregnancy_choices.EXPERIENCED_WITH_THIS_PREGNANCY ||
            mother[item] === pregnancy_choices.EXPERIENCED_WITH_PRIOR_PREGNANCY ||
            mother[item] === pregnancy_choices.EXPERIENCED_WITH_BOTH)
    );
    if (risk_array.length > 0) return HIGH_RISK;
    if (mother.hx_stillbirth === choices.YES) return HIGH_RISK;
    if (mother.no_stillbirths) return HIGH_RISK;
    if (mother.other_complication === choices.YES) return HIGH_RISK;
    if (mother.complication_specify === 'string' &&
        mother.complication_specify.length > 0) return HIGH_RISK;
    return NO_RISK;
}

//Introduction

export function defineInterviewer(mother) {
    if (mother.interviewer === interviewers.Mukalu_Mohamed) return "Mukalu Mohamed";
    if (mother.interviewer === interviewers.Mikayla_Bryan) return "Mikayla O’Bryan";
    if (mother.interviewer === interviewers.Barilaine_Joseph) return "Barilaine Joseph Peter";
    if (mother.interviewer === interviewers.Tatumwa_Desmond_Benjamine) return "Tatumwa Desmond Benjamine";
    if (mother.interviewer === interviewers.Ssemambo_Peter_Mumbya) return "Ssemambo Peter Mumbya";
    if (mother.interviewer === interviewers.Other) return "Other";
    return NO_DATA;
}

//Demographics


export function defineDecisionMaker(money_control) {
    const money_decision_maker = decision_maker.filter((item, index) => (index + 1) === money_control);
    if (money_decision_maker.length > 0) return money_decision_maker;
    if (money_control === choices.SMB) return "SOMEONE ELSE";
    if (money_control === choices.IDN) return IDN;
    if (money_control === choices.DECLINES_TO_ANSWER) return DECLINES_TO_ANSWER;
    return NO_DATA;
}





