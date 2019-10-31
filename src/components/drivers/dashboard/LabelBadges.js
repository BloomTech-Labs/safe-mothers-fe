import React from 'react';
import {CustomBadge} from "../../reusableParts/accordion/label/label-style";

export default function LabelBadges(props) {
    const {entity} = props;
    return (
        <>
            <div className="inline-badges">
                {entity.online ?
                    <CustomBadge width="9%" badgeColor="LimeGreen" badgeText="white" className="badge" color="secondary">
                        {"ONLINE"}
                    </CustomBadge>
                    :
                    <CustomBadge  width="9%" badgeColor="red" badgeText="white" className="badge" color="secondary">
                        {"OFFLINE"}
                    </CustomBadge>
                }

            </div>
        </>
    )
}


