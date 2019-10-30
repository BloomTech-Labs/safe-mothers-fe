import React from 'react';
import {choices} from "./YesNoDontknowDeclin";

const pregnancy_choices = {
    EXPERIENCED_WITH_THIS_PREGNANCY: "1",
    EXPERIENCED_WITH_PRIOR_PREGNANCY: "2",
    EXPERIENCED_WITH_BOTH: "3",
    NOT_EXPERIENCED: "0",
};
export default function PregnancyComplication(props) {
    const {name} = props;
    return (
        <select className="regular-input input" name={name}
                onChange={(e) => props.setFieldValue({name}, e.target.value)}>
            <option disabled selected value></option>
            <option value={pregnancy_choices.EXPERIENCED_WITH_THIS_PREGNANCY}>EXPERIENCED WITH THIS PREGNANCY</option>
            <option value={pregnancy_choices.EXPERIENCED_WITH_PRIOR_PREGNANCY}>EXPERIENCED WITH PRIOR PREGNANCY</option>
            <option value={pregnancy_choices.EXPERIENCED_WITH_BOTH}>EXPERIENCED WITH BOTH PREGNANCIES</option>
            <option value={pregnancy_choices.NOT_EXPERIENCED}>HAVE NOT EXPERIENCED WITH ANY PREGNANCY</option>
            <option value={choices.IDN}>I DON`T KNOW</option>
            <option value={choices.DECLINES_TO_ANSWER}>DECLINES TO ANSWER</option>
        </select>
    )
}