import React from 'react'

export const interviewers = {
    Mukalu_Mohamed: 1000,
    Mikayla_Bryan: 1001,
    Barilaine_Joseph: 1002,
    Tatumwa_Desmond_Benjamine: 1003,
    Ssemambo_Peter_Mumbya: 1004,
    Other: 1097
};

export default function Interviewers(props) {
    return (
        <>
            <option value=''></option>
            <option value={interviewers.Mukalu_Mohamed}>Mukalu Mohamed</option>
            <option value={interviewers.Mikayla_Bryan}>Mikayla O’Bryan</option>
            <option value={interviewers.Barilaine_Joseph}>Barilaine Joseph Peter</option>
            <option value={interviewers.Tatumwa_Desmond_Benjamine}>Tatumwa Desmond Benjamine</option>
            <option value={interviewers.Ssemambo_Peter_Mumbya}>Ssemambo Peter Mumbya</option>
            <option value={interviewers.Other}>Other</option>
        </>
    )
}