export const NO_SEASON = "NO_SEASON";
//RAIN SEASONS
export const RAIN_SEASONS = ['09', '10', '11', '03', '04', '05'];
export const RAIN_SEASON = "RAIN_SEASON";
//DRY SEASONS
export const DRY_SEASONS = ['12', '01', '06', '07'];
export const DRY_SEASON = "DRY_SEASON";


//RISK
export const HIGHT_RISK = "high risk";
export const NO_RISK = "no risk";

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

export function defineHighRisk(mother) {
    if (mother.anemia || mother.malaria ||
        mother.obstructed_labor || mother.malpresent ||
        mother.placenta_previa || mother.other_complication
    ) return HIGHT_RISK;
    return NO_RISK;
}

export function defineDate() {
    let date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}