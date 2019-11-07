import React from 'react';


export default function Select(props) {
    const {list} = props;
    return (
        <>
            <option value=""> </option>
            {list.map((item, index) =>
                <option key={index} value={index + 1}>{item}</option>
            )}
        </>
    )
}