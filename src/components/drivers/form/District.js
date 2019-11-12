import React from 'react'

export const district = {
    Iganga: 1,
    Other: 98
};

export default function District(props) {
    return (
        <>
            <option value=""> </option>
            <option value={district.Iganga}>Iganga</option>
            <option value={district.Other}>Other</option>
        </>
    )
}