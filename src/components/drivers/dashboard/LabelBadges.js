import React from 'react';
import {CustomBadge} from "../../reusableParts/accordion/label/label-style";

export default function LabelBadges() {

    return (
        <>
            <div className="inline-badges">
                <CustomBadge badgeColor="LimeGreen" badgeText="white" className="badge" color="secondary">
                   {"Teg text"}
                </CustomBadge>
            </div>
        </>
    )
}

