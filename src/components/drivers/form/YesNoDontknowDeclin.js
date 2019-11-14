import React from "react";
import {choices} from "./driver-utils";

export default function YesNoDontknowDeclin(props) {
    const {state} = props;
    return (
        <>
            <>
                <option value=""> </option>
                <option value={choices.YES}>YES</option>
                <option value={choices.NO}>NO</option>
            </>
        </>
    )
}