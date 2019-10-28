import React from 'react';

function LabelDate(props) {
    const {date} = props;
    return (
        <div className="inline title-container">
            <span className="font">{date}</span>
        </div>
    )
}

export default LabelDate;