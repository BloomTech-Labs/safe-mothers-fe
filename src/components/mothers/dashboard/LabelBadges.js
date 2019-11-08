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

export const LABEL_LIMIT = 4;

export const defineMothersLabels = (labels, mother) => {
    console.log("LABELS ", labels);
    const labels_array = labels.filter(item =>{
        console.log("item.mother_id ", item.mother_id, " mother.id ", mother.id, "; ",  item.mother_id === mother.id);
        return item.mother_id === mother.id});
    console.log("LABELS OF SPECIFIC MOTHER ", labels);
    return 0;
        // return labels.filter(item => item.mother_id === mother.id)
    }
;

function LabelBadges(props) {
    const {entity, risk, labels} = props;
    const [active, setActive] = useState(false);

    useEffect(() => {
        props.getLabels(entity.id);
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

            <Modal
                width={[1, "440px"]}
                enableOverflow
                isOpen={active}
                className="modal"
                onClose={(e) => modal(e)}>
                {defineMothersLabels(labels, entity) < LABEL_LIMIT &&
                <h2 className="modal-title">Create badge</h2>}
                <FormikLabelForm modal={modal} labels={labels} mother={entity}/>
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
