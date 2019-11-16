import React from 'react';

export const choices = {
    YES: 1,
    NO: 0,
    SMB: 97,
    IDN: 98,
    DECLINES_TO_ANSWER: 99,
    ENDS_INTERVIEW: -1,
    OTHER: 97,
};

export default function YesNoDontknowDeclin(props) {
    const {state} = props;
    return (
        <>
            <>
            <option value=""> </option>
                <option value={choices.YES}>YES</option>
                <option value={choices.NO}>NO</option>
                {
                    state &&
                    <>
                        <option value={choices.IDN}>I DON`T KNOW</option>
                        <option value={choices.DECLINES_TO_ANSWER}>DECLINES TO ANSWER</option>
                    </>
                }
            </>
        </>
    )
}