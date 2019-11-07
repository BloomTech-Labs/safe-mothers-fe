import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import FormikLabelForm from "./LabelForm";
import {CustomBadge} from '../../reusableParts/accordion/label/label-style'
// import {Modal} from 'pcln-modal';
import {HIGH_RISK} from "../mother-utils";
import {getLabels, deleteLabel} from "../../../actions/mothersActions";


function LabelBadges(props) {
    const {entity, risk, labels} = props;
    const [active, setActive] = useState(false);

    useEffect(() => {
        // props.getLabels(entity.id);
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
            <CustomBadge  width="12%" className="badge" color="secondary">
                {entity.amt_saved ? entity.amt_saved : '$0'}
            </CustomBadge>}
            {console.log("RISK ", risk)}
            {risk === HIGH_RISK &&
            <CustomBadge width="12%" badgeColor="red" badgeText="white">
                {HIGH_RISK}
            </CustomBadge>}
{/*
            {labels && labels.map((label, index) =>
                <CustomBadge key={index}
                             badgeColor={label.color}
                             badgeText={label.text_color}
                             badgeDark={label.dark_color}
                >
                    {label.label_name}
                    <div onClick={(e) => deleteLabel(e, label)} className="delete-badge"><span
                        className="delete-icon">&#215;</span>
                    </div>
                </CustomBadge>)}

            <Modal
                width={[1, "440px"]}
                enableOverflow
                isOpen={active}
                className="modal"
                onClose={(e) => modal(e)}>
                {props.labels.length < 4 && <h2 className="modal-title">Create badge</h2>}
                <FormikLabelForm modal={modal} mother_id={entity.id}/>
            </Modal>

            <div className="add-btn" onClick={(e) => modal(e)}>
                <span className="add-icon">&#43;</span>
            </div>*/}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        // labels: state.mothersReducer.labels
    };
};

export default connect(mapStateToProps, {getLabels, deleteLabel})(LabelBadges);
