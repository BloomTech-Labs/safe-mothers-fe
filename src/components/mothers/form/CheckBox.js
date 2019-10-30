import React from 'react';

export default function CheckBox(props) {
    const {field} = props;

    return (
        <>
            <div className="toggle-check-container">
                <label className="toggle-check">
                    {field}
                    <span className="toggle-check-text"></span>
                </label>
            </div>
        </>
    )
}