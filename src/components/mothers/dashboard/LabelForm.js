import React, {useState} from 'react';
import {Form, Field, withFormik} from 'formik/dist/index';
import * as Yup from "yup";
import {connect} from "react-redux";
import {createLabel} from "../../../actions/mothersActions";
import ColorPicker from "./ColorPicker";
import {FormItems} from "../../reusableParts/form-items";

import SVG from 'react-inlinesvg/lib/index';
import Cry from "../resources/Group.svg";
import {BadgeLimit} from "../mother-style";
import {defineMothersLabels, LABEL_LIMIT} from "./LabelBadges";
import Errors from "../../reusableParts/Errors";

function LabelForm(props, {mother}) {
    const defineColor = (color, darkColor, textColor) => {
        props.setValues({
            label_name: props.values.label_name,
            color: color,
            dark_color: darkColor,
            text_color: textColor
        })
    };

    return (
        <>
            <FormItems>
                <Form className="form-contents">
                      {props.touched.label_name && props.errors.label_name && (
                          <Errors errMsg = {props.errors.label_name}  />
                        )}
                    <label className="error-holder">
                        Label name:
                        <Field className="regular-input"
                               type="text"
                               name="label_name"
                               placeholder="Type phrase here"
                        />
                    </label>

                    <Field className="regular-input hidden-input"
                           type="text"
                           name="color"
                           placeholder="Type color here"
                    />
                    <Field className="regular-input hidden-input"
                           type="text"
                           name="dark_color"
                           placeholder="Type color here"
                    />
                    <Field className="regular-input hidden-input"
                           type="text"
                           name="text_color"
                           placeholder="Type color here"
                    />
                    <ColorPicker defineColor={defineColor}/>
                    <div className="btn-container">
                        <button className="submit-btn" type="submit">CREATE</button>
                    </div>
                </Form>
            </FormItems>
        </>
    )
}

const FormikLabelForm = withFormik({
    mapPropsToValues({label_name, color, dark_color, text_color}) {
        return {
            label_name: label_name || '',
            color: color || 'black',
            dark_color: dark_color || '#0454a7',
            text_color: text_color || 'white',
        };
    },

    validationSchema: Yup.object().shape({
        label_name: Yup.string().max(10).required('Please enter a label_name'),
    }),

    handleSubmit(values, {props}, e) {
        values.mother_id = props.mother.id;
        props.createLabel(values);
        props.modal(e);

    }
})(LabelForm);

const mapStateToProps = state => {
    return {
        labels: state.mothersReducer.labels
    };
};

export default connect(mapStateToProps, {createLabel})(FormikLabelForm);