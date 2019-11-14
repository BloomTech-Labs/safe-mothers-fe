import React from 'react'

export const stage = {
    Nabitende_Stage: 1,
    Bugongo_Stage: 2,
    Nawandala_Stage: 3,
    Namusiisi_Stage: 4,
    Itanda_Stage: 5,
    Other: 98
};

export default function Stage(props) {
    return (
        <>
            <option value=""> </option>
            <option value={stage.Nabitende_Stage}>Nabitende</option>
            <option value={stage.Bugongo_Stage}>Bugungo</option>
            <option value={stage.Nawandala_Stage}>Nawandala</option>
            <option value={stage.Namusiisi_Stage}>Namusiisi</option>
            <option value={stage.Itanda_Stage}>Itanda</option>
            <option value={subcounty.Other}>Other</option>
        </>
    )
}