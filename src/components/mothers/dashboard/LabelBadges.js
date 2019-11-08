import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import FormikLabelForm from "./LabelForm";
import {CustomBadge} from '../../reusableParts/accordion/label/label-style'
import {Modal} from 'pcln-modal';
import {HIGH_RISK} from "../mother-utils";
import {getLabels, deleteLabel} from "../../../actions/mothersActions";
import Add from '../resources/Add.svg';
import CloseCircle from '../../reusableParts/resources/CloseCircle.svg'
import {SVGBtn} from "../../reusableParts/form-items";
import {BadgeLimit} from "../mother-style";
import SVG from "react-inlinesvg";
import Cry from "../resources/Group.svg";

export const LABEL_LIMIT = 4;

export function defineMothersLabels (labels, mother) {
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
            {entity.amt_saved > 0 &&
            <CustomBadge width="12%" className="badge" color="secondary">
                {entity.amt_saved ? entity.amt_saved : '$0'}
            </CustomBadge>}
            {risk === HIGH_RISK &&
            <CustomBadge width="12%" badgeColor="red" badgeText="white">
                {HIGH_RISK}
            </CustomBadge>}

            {labels && labels.map((label, index) => {
                if (entity.id === label.mother_id) {
                    return <CustomBadge key={index}
                                        left={"1%"}
                                        right={"0.2%"}
                                        top={"0.1%"}
                                        bottom={"0.1%"}
                                        badgeColor={label.color}
                                        badgeText={label.text_color}
                                        badgeDark={label.dark_color}>
                        {label.label_name}
                        <SVGBtn onClick={(e) => deleteLabel(e, label)} bg={label.dark_color} src={CloseCircle}/>
                    </CustomBadge>
                }
            })}
            {console.log("defineMothersLabels(labels, entity) ", defineMothersLabels(labels, entity).length < LABEL_LIMIT)}
            <Modal
                width={[1, "440px"]}
                enableOverflow
                isOpen={active}
                className="modal"
                onClose={(e) => modal(e)}>
                {(defineMothersLabels(labels, entity).length < LABEL_LIMIT) &&
                <h2 className="modal-title">Create badge</h2>}
                {(defineMothersLabels(labels, entity).length < LABEL_LIMIT) ?
                    <FormikLabelForm modal={modal} labels={labels} mother={entity} />
                    :
                    <BadgeLimit>
                        <SVG className="limit-icon" src={Cry}/>
                        <p className="limit-text">You can`t create more than 4 labels on one mother</p>
                    </BadgeLimit>
                }
            </Modal>
            <SVGBtn className="add-icon" onClick={(e) => modal(e)} src={Add} bg="#5bdf72" bgOnHover="#44c25a"/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        labels: state.mothersReducer.labels
    };
};

export default connect(mapStateToProps, {getLabels, deleteLabel})(LabelBadges);
