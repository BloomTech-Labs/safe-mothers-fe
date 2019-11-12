import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import FormikLabelForm from "./LabelForm";
import {CustomBadge} from '../../reusableParts/accordion/label/label-style'
import {Modal} from 'pcln-modal';
import {HIGH_RISK, lightenColor} from "../mother-utils";
import {getLabels, deleteLabel} from "../../../actions/mothersActions";
import Add from '../../reusableParts/resources/Add.svg';
import CloseCircle from '../../reusableParts/resources/CloseCircle.svg'
import {SVGBtn} from "../../reusableParts/form-items";
import {BadgeLimit} from "../mother-style";
import SVG from "react-inlinesvg";
import Cry from "../resources/Group.svg";

export const LABEL_LIMIT = 4;

export function defineMothersLabels(labels, mother) {
    if (labels) {
        const labels_array = labels.filter(item => {
            return item.mother_id === mother.id
        });
        return labels_array;
    }
    return [];
}


function LabelBadges(props) {
    const {entity, risk, labels} = props;
    const [active, setActive] = useState(false);

    useEffect(() => {
        props.getLabels();
    }, []);

    const modal = event => {
        if (event) {
            event.stopPropagation();
            setActive(!active);
        } else {
            setActive(!active);
        }
    };

    const deleteLabel = (event, label) => {
        if (event) {
            event.stopPropagation();
            props.deleteLabel(label.id)
        } else {
            props.deleteLabel(label.id);
        }
    };

    return (
        <div className="inline-badges">
            <CustomBadge width={"8%"} badgeColor="#32CD32" badgeText="white" className="badge hide" color="secondary">
                {entity.amt_saved ? entity.amt_saved : '$0'}
            </CustomBadge>
            {risk === HIGH_RISK &&
            <CustomBadge min_width="40px" width={"8%"} badgeColor="red" badgeText="white" className="hide" >
                {HIGH_RISK}
            </CustomBadge>}

            {labels && labels.map((label, index) => {
                if (entity.id === label.mother_id) {
                    return <CustomBadge key={index}
                                        badgeColor={label.color}
                                        badgeText={label.text_color}
                                        badgeDark={label.dark_color}>
                        <div className="badge-content">
                            {label.label_name}
                            <SVGBtn bgOnHover={label.dark_color}
                                    bg={`#${lightenColor(label.dark_color, 10)}`}
                                    className="label-icon" onClick={(e) => deleteLabel(e, label)}
                                    src={CloseCircle}/>
                        </div>
                    </CustomBadge>
                }
            })}
            <Modal
                width={[1, "440px"]}
                enableOverflow
                isOpen={active}
                className="modal"
                onClose={(e) => modal(e)}>
                {(defineMothersLabels(labels, entity).length < LABEL_LIMIT) &&
                <h2 className="modal-title">Create badge</h2>}
                {(defineMothersLabels(labels, entity).length < LABEL_LIMIT) ?
                    <FormikLabelForm modal={modal} labels={labels} mother={entity}/>
                    :
                    <BadgeLimit>
                        <SVG className="limit-icon" src={Cry}/>
                        <p className="limit-text">You can`t create more than 4 labels on one mother</p>
                    </BadgeLimit>
                }
            </Modal>
            <div className="add-icon-container"><SVGBtn className="add-icon" onClick={(e) => modal(e)} src={Add}
                                                        bg="#5bdf72" bgOnHover="#44c25a"/></div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        labels: state.mothersReducer.labels
    };
};

export default connect(mapStateToProps, {getLabels, deleteLabel})(LabelBadges);
