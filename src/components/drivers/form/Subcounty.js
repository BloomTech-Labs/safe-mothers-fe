import React from 'react'

export const subcounty = {
    Makuutu: 1,
    Nawwandala: 2,
    Other: 98
};

export default function Subcounty(props) {
    return (
        <>
            <option value=""> </option>
            <option value={subcounty.Nawwandala}>Nawwandala</option>
            <option value={subcounty.Makuutu}>Makuutu</option>
            <option value={subcounty.Other}>Other</option>
        </>
    )
}