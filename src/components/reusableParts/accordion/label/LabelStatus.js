import React from 'react';
import SVG from 'react-inlinesvg/lib/index';

function LabelStatus(props) {
    const {icon} = props;
    return (
        <div className="inline">
            <SVG className="status-icon" src={icon}/>
            {props.text && <p className="status-text">{props.text}</p>}
        </div>
    )
}

export default LabelStatus;
