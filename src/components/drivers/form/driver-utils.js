import {returnValue} from "../../mothers/mother-utils";
import {carriers} from "../../mothers/form/lists";

export const choices = {
    YES: 1,
    NO: 2,
    OTHER: 98,
};

const NO_DATA = "N/A";
const YES = "yes";
const NO = "no";

export function yesNoIDN(item) {
    if (item === choices.YES) return YES;
    if (item === choices.NO) return NO;
    return NO_DATA;
}

export const defineBasicValue = (list, value, value2) => {
    const filtered_list = list.filter((item, index) => (index + 1) === value);
    if (filtered_list.length > 0) return filtered_list;
    if (value === choices.OTHER) return returnValue(value2);
    return NO_DATA;
};

export const defineCarrier = (driver) => {
    const carrier = driver.carrier;
    const filtered_carrier = carriers.filter((item, index) => (index + 1) === carrier);
    if (filtered_carrier.length > 0) return filtered_carrier;
    if (carrier === choices.OTHER) return driver.carrier_2;
    return NO_DATA;
};
