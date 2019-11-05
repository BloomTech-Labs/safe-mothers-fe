import React from 'react';
import {choices} from "./YesNoDontknowDeclin";

const prior_choices = {
    NOT_EXPERIENCED: "0",
    EXPERIENCED_WITH_PRIOR_PREGNANCY: "1",
};
export default function PriorComplication(props) {
    const {name} = props;
    return (
        <select className="regular-input input" name={name}
                onChange={(e) => props.setFieldValue({name}, e.target.value)}>
            <option disabled selected value></option>
            <option value={prior_choices.EXPERIENCED_WITH_PRIOR_PREGNANCY}>EXPERIENCED WITH PRIOR PREGNANCY</option>
            <option value={prior_choices.NOT_EXPERIENCED}>DID NOT EXPERIENCE WITH PRIOR PREGNANCY</option>
            <option value={choices.IDN}>I DON`T KNOW</option>
            <option value={choices.DECLINES_TO_ANSWER}>DECLINES TO ANSWER</option>
        </select>
    )
}