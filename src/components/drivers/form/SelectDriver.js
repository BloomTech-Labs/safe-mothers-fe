import React from 'react';


export default function SelectDriver(props) {
    const {list} = props;
    return (
        <>
            <option value=""> </option>
            {list.map((item, index) =>
                <option key={index} value={index}>{item}</option>
            )}
        </>
    )
}