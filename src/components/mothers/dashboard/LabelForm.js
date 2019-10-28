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

function LabelForm(props) {
    const defineColor = (color, darkColor, textColor) => {
        props.setValues({ label_name: props.values.label_name, color: color, dark_color: darkColor, text_color: textColor})
    };

    return (
        <>
            <FormItems>
                {props.labels.length < 4 ?
                    <Form className="form-contents">
                        <label>
                            Label name:
                            <Field className="regular-input"
                                   type="text"
                                   name="label_name"
                                   placeholder="Type phrase here"
                            />
                        </label>
                        {props.touched.label_name && props.errors.label_name && (
                            <p className="error-message">{props.errors.label_name}</p>
                        )}
                        <Field className="regular-input"
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
                            <button onClick={(e) => props.modal(e)} className="submit-btn" type="submit">CREATE</button>
                        </div>
                    </Form>
                    :
                    <BadgeLimit>
                        <SVG className="limit-icon" src={Cry}/>
                        <p className="limit-text">You can`t create more than 4 labels on one mother</p>
                    </BadgeLimit>
                }
            </FormItems>
        </>
    )
}

const FormikLabelForm = withFormik({
    mapPropsToValues({label_name, color, dark_color, text_color}) {
        return {
            label_name: label_name || '',
            color: color || 'black',
            dark_color: dark_color || 'red',
            text_color: text_color || 'white',
        };
    },

    validationSchema: Yup.object().shape({
        label_name: Yup.string().max(10).required('Please enter a label_name'),
    }),

    handleSubmit(values, {props}) {
        values.mother_id = props.mother_id;
        props.createLabel(values);

    }
})(LabelForm);

const mapStateToProps = state => {
    return {
        labels: state.mothersReducer.labels
    };
};

export default connect(mapStateToProps, {createLabel})(FormikLabelForm);