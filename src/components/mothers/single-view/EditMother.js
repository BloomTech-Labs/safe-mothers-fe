import React from 'react';
import {Form, Field, withFormik} from 'formik/dist/index';
import * as Yup from "yup";
import {Button, FormItems} from "../../reusableParts/form-items";
import styled from 'styled-components';
import SVG from 'react-inlinesvg/lib/index';
import Pregnant from '../resources/Pregnant.svg';

const EditMotherForm = styled.div`
    width: 100%;
    min-width: 718px;
    
    ul{
      position: relative;
    }
    
    .edit-personal{
        display: flex;
        justify-content: flex-start;
        margin-left: 1%;
        margin-bottom: 50px;
    }
    .personal-name{
        font-weight: bold;
        line-height: 16px;
    }
    
    .edit-title{
        position: absolute;
        top: -50px;
    }
    
    .edit-form{
      margin-top: 60px;
    }
    
    .inline{
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
      padding-top: 24px;
    }
  
  li{
    padding-bottom: 42px;
    white-space: nowrap;
  }
  
  .column{
    padding: 1%;
  }
  
  .inline-label{
    display: flex;
    align-items: center;
  }
  
  .input{
    margin-left: 1%;
    min-width: 20px;
    margin-bottom: 10px;
  }

  .label-value{
    text-align: left;
    width: 33%;
  }
    
    .toggle-check-container{
      position: relative;
      margin-bottom: 36px;
    }
   
    .toggle-check-input {
        position: absolute;
        top: 1px;
        left: 10px;
        opacity: 0;
    }
    
    .toggle-check-text {
        display: inline-block;
        position: relative;
        text-transform: uppercase;
        background: #CCC;
        padding: 0.25em 0.5em 0.25em 2em;
        border-radius: 1em;
        min-width: 2em;
        color: #FFF;
        cursor: pointer;
        transition: background-color 0.15s;
    }

    .toggle-check-text:after {
        content: ' ';
        display: block;
        background: #FFF;
        width: 1.1em;
        height: 1.1em;
        border-radius: 1em;
        position: absolute;
        left: 0.3em;
        top: 0.25em;
        transition: 1s;
    }

    .toggle-check-text:before {
        content: 'No';
    }

    .toggle-check-input:checked ~ .toggle-check-text {
        background: #8ad869;
        padding-left: 0.5em;
        padding-right: 2em;
    }
    
    .toggle-check-input:checked ~ .toggle-check-text:before {
        content: 'Yes';
    }

    .toggle-check-input:checked ~ .toggle-check-text:after {
        left: 100%;
        margin-left: -1.4em;
    }

`;

function EditMother(props) {

    return (
        <>
            <FormItems>
                <EditMotherForm>
                    <Form className="form-contents edit-form">

                        <div className="edit-personal">
                            <h2 className="personal-name">{"Nancy Whitemoon"}</h2>
                            <SVG src={Pregnant} />
                            <div>
                                <div className="btn-container">
                                    <Button color="white" bg="blue" >Save</Button>
                                    {/*<button onClick={(e) => props.modal(e)} className="submit-btn" type="submit">CREATE</button>*/}
                                </div>

                            </div>
                        </div>

                        <div className="inline">
                            <div className="label-value inline">
                                <ul>
                                    <span className="column-title edit-title">Personal</span>
                                    <li>Age</li>
                                    <li>Marital status</li>
                                    <li>Wife order</li>
                                    <li>Schooled</li>
                                    <li>School level</li>
                                </ul>
                                <div className="column">
                                    <Field className="regular-input input"
                                           type="text"
                                           name="age"
                                    />
                                    {props.touched.age && props.errors.age && (
                                        <p className="error-message">{props.errors.age}</p>
                                    )}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="marital_status"
                                    />
                                    {props.touched.marital_status && props.errors.marital_status && (
                                        <p className="error-message">{props.errors.marital_status}</p>
                                    )}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="wife_order"
                                    />
                                    {props.touched.wife_order && props.errors.wife_order && (
                                        <p className="error-message">{props.errors.wife_order}</p>
                                    )}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="schooled"
                                    />
                                    {props.touched.schooled && props.errors.schooled && (
                                        <p className="error-message">{props.errors.schooled}</p>
                                    )}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="school_level"
                                    />
                                    {props.touched.school_level && props.errors.school_level && (
                                        <p className="error-message">{props.errors.school_level}</p>
                                    )}
                                </div>
                            </div>

                            <div className="label-value inline">
                                <ul>
                                    <li>Village</li>
                                    <li>Latitude</li>
                                    <li>Longitude</li>
                                    <li>Assigned Driver</li>
                                </ul>
                                <div className="column">
                                    <Field className="regular-input input"
                                           type="text"
                                           name="village"
                                    />

                                    {props.touched.village && props.errors.village && (
                                        <p className="error-message">{props.errors.village}</p>
                                    )}

                                    <Field className="regular-input input"
                                           type="text"
                                           name="latitude"
                                    />
                                    {props.touched.latitude && props.errors.latitude && (
                                        <p className="error-message">{props.errors.latitude}</p>
                                    )}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="longitude"
                                    />
                                    {props.touched.longitude && props.errors.longitude && (
                                        <p className="error-message">{props.errors.longitude}</p>
                                    )}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="assigned_driver"
                                    />

                                    {props.touched.assigned_driver && props.errors.assigned_driver && (
                                        <p className="error-message">{props.errors.assigned_driver}</p>
                                    )}
                                </div>
                            </div>

                            <div className="label-value inline">
                                <ul>
                                    <span className="column-title edit-title">Contact</span>
                                    <li>Phone Owner</li>
                                    <li>Phone Carrier</li>
                                    <li>Mobile Phone</li>
                                    <li>Contact Book</li>
                                </ul>
                                <div className="column">
                                    <Field className="regular-input input"
                                           type="text"
                                           name="phone_owner"
                                    />
                                    {props.touched.phone_owner && props.errors.phone_owner && (
                                        <p className="error-message">{props.errors.phone_owner}</p>
                                    )}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="phone_carrier"
                                    />
                                    {props.touched.phone_carrier && props.errors.phone_carrier && (
                                        <p className="error-message">{props.errors.phone_carrier}</p>
                                    )}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="mobile_phone"
                                    />
                                    {props.touched.mobile_phone && props.errors.mobile_phone && (
                                        <p className="error-message">{props.errors.mobile_phone}</p>
                                    )}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="contact_book"
                                    />
                                    {props.touched.contact_book && props.errors.contact_book && (
                                        <p className="error-message">{props.errors.contact_book}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="inline">
                            <div className="label-value inline">
                                <ul>
                                    <span className="column-title edit-title">finance and insurance</span>
                                    <li>Money Saved</li>
                                    <li>Decision Maker</li>
                                    <li>Antenatal Care Visits</li>
                                    <li>Location Of Delivery</li>
                                    <li>Method Of Arriving</li>
                                    <li>Health Insurance</li>
                                    <li>Insurance Type</li>
                                </ul>
                                <div className="column">
                                    <Field className="regular-input input"
                                           type="text"
                                           name="money_saved"
                                    />
                                    {props.touched.money_saved && props.errors.money_saved && (
                                        <p className="error-message">{props.errors.money_saved}</p>
                                    )}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="decision_maker"
                                    />
                                    {props.touched.decision_maker && props.errors.decision_maker && (
                                        <p className="error-message">{props.errors.decision_maker}</p>
                                    )}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="antenatal_care_visits"
                                    />
                                    {props.touched.antenatal_care_visits && props.errors.antenatal_care_visits && (
                                        <p className="error-message">{props.errors.antenatal_care_visits}</p>
                                    )}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="location_of_delivery"
                                    />
                                    {props.touched.location_of_delivery && props.errors.location_of_delivery && (
                                        <p className="error-message">{props.errors.location_of_delivery}</p>
                                    )}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="method_of_arriving"
                                    />
                                    {props.touched.method_of_arriving && props.errors.method_of_arriving && (
                                        <p className="error-message">{props.errors.method_of_arriving}</p>
                                    )}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="health_insurance"
                                    />
                                    {props.touched.health_insurance && props.errors.health_insurance && (
                                        <p className="error-message">{props.errors.health_insurance}</p>
                                    )}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="insurance_type"
                                    />
                                    {props.touched.insurance_type && props.errors.insurance_type && (
                                        <p className="error-message">{props.errors.insurance_type}</p>
                                    )}
                                </div>
                            </div>
                            <div className="label-value inline">
                                <ul>
                                    <span className="column-title edit-title">Medical History</span>
                                    <li>Number Of Pregnancies</li>
                                    <li>Number Of Birth</li>
                                    <li>Had Twins Or More</li>
                                    <li>Living Children</li>
                                    <li>Children Under Five</li>
                                    <li>Infant Death</li>
                                </ul>
                                <div className="column">
                                    <Field className="regular-input input"
                                           type="text"
                                           name="number_of_pregnancies"

                                    />
                                    {props.touched.number_of_pregnancies && props.errors.number_of_pregnancies && (
                                        <p className="error-message">{props.errors.number_of_pregnancies}</p>
                                    )}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="number_of_birth"

                                    />
                                    {props.touched.number_of_birth && props.errors.number_of_birth && (
                                        <p className="error-message">{props.errors.number_of_birth}</p>
                                    )}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="had_twins"

                                    />
                                    {props.touched.had_twins && props.errors.had_twins && (
                                        <p className="error-message">{props.errors.had_twins}</p>
                                    )}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="living_children"

                                    />
                                    {props.touched.living_children && props.errors.living_children && (
                                        <p className="error-message">{props.errors.living_children}</p>
                                    )}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="children_under_five"
                                    />
                                    {props.touched.children_under_five && props.errors.children_under_five && (
                                        <p className="error-message">{props.errors.children_under_five}</p>
                                    )}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="infant_death"
                                    />
                                    {props.touched.infant_death && props.errors.infant_death && (
                                        <p className="error-message">{props.errors.infant_death}</p>
                                    )}
                                </div>
                            </div>

                            <div className="label-value inline">
                                <ul>
                                    <span className="column-title edit-title">HIGH RISK</span>
                                    <li>C-SECTION</li>
                                    <li>Anemia</li>
                                    <li>Malaria</li>
                                    <li>Obstructed Labor</li>
                                    <li>Malpresentation</li>
                                    <li>Hemorrhage</li>
                                    <li>Retained Placenta</li>
                                    <li>Placenta Previa</li>
                                    <li>Stillbirth</li>
                                    <li>Other Complications</li>
                                </ul>
                                <div className="column">
                                    <div className="toggle-check-container">
                                        <label className="toggle-check">
                                            <Field className="toggle-check-input"
                                                   type="checkbox"
                                                   name="c_section"
                                            />
                                            <span className="toggle-check-text"></span>
                                        </label>
                                    </div>
                                    {props.touched.c_section && props.errors.c_section && (
                                        <p className="error-message">{props.errors.c_section}</p>
                                    )}
                                    <div className="toggle-check-container">
                                        <label className="toggle-check">
                                            <Field className="toggle-check-input"
                                                   type="checkbox"
                                                   name="anemia"
                                            />
                                            <span className="toggle-check-text"></span>
                                        </label>
                                    </div>
                                    {props.touched.anemia && props.errors.anemia && (
                                        <p className="error-message">{props.errors.anemia}</p>
                                    )}
                                    <div className="toggle-check-container">
                                        <label className="toggle-check">
                                            <Field className="toggle-check-input"
                                                   type="checkbox"
                                                   name="malaria"
                                            />
                                            <span className="toggle-check-text"></span>
                                        </label>
                                    </div>
                                    {props.touched.malaria && props.errors.malaria && (
                                        <p className="error-message">{props.errors.malaria}</p>
                                    )}
                                    <div className="toggle-check-container">
                                        <label className="toggle-check">
                                            <Field className="toggle-check-input"
                                                   type="checkbox"
                                                   name="obstructed_labor"
                                            />
                                            <span className="toggle-check-text"></span>
                                        </label>
                                    </div>
                                    {props.touched.obstructed_labor && props.errors.obstructed_labor && (
                                        <p className="error-message">{props.errors.obstructed_labor}</p>
                                    )}
                                    <div className="toggle-check-container">
                                        <label className="toggle-check">
                                            <Field className="toggle-check-input"
                                                   type="checkbox"
                                                   name="malpresentation"
                                            />
                                            <span className="toggle-check-text"></span>
                                        </label>
                                    </div>
                                    {props.touched.malpresentation && props.errors.malpresentation && (
                                        <p className="error-message">{props.errors.malpresentation}</p>
                                    )}
                                    <div className="toggle-check-container">
                                        <label className="toggle-check">
                                            <Field className="toggle-check-input"
                                                   type="checkbox"
                                                   name="hemorrhage"
                                            />
                                            <span className="toggle-check-text"></span>
                                        </label>
                                    </div>
                                    {props.touched.hemorrhage && props.errors.hemorrhage && (
                                        <p className="error-message">{props.errors.hemorrhage}</p>
                                    )}
                                    <div className="toggle-check-container">
                                        <label className="toggle-check">
                                            <Field className="toggle-check-input"
                                                   type="checkbox"
                                                   name="retained_placenta"
                                            />
                                            <span className="toggle-check-text"></span>
                                        </label>
                                    </div>
                                    {props.touched.retained_placenta && props.errors.retained_placenta && (
                                        <p className="error-message">{props.errors.retained_placenta}</p>
                                    )}
                                    <div className="toggle-check-container">
                                        <label className="toggle-check">
                                            <Field className="toggle-check-input"
                                                   type="checkbox"
                                                   name="placenta_previa"
                                            />
                                            <span className="toggle-check-text"></span>
                                        </label>
                                    </div>
                                    {props.touched.placenta_previa && props.errors.placenta_previa && (
                                        <p className="error-message">{props.errors.placenta_previa}</p>
                                    )}
                                    <div className="toggle-check-container">
                                        <label className="toggle-check">
                                            <Field className="toggle-check-input"
                                                   type="checkbox"
                                                   name="stillbirth"
                                            />
                                            <span className="toggle-check-text"></span>
                                        </label>
                                    </div>
                                    {props.touched.stillbirth && props.errors.stillbirth && (
                                        <p className="error-message">{props.errors.stillbirth}</p>
                                    )}
                                    <div className="toggle-check-container">
                                        <label className="toggle-check">
                                            <Field className="toggle-check-input"
                                                   type="checkbox"
                                                   name="other_complications"
                                            />
                                            <span className="toggle-check-text"></span>
                                        </label>
                                    </div>
                                    {props.touched.other_complications && props.errors.other_complications && (
                                        <p className="error-message">{props.errors.other_complications}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                    </Form>
                </EditMotherForm>
            </FormItems>
        </>
    );
}


const FormikEditMother = withFormik({
    mapPropsToValues(
        {
            age,
            marital_status,
            wife_order,
            schooled,
            school_level,
            village,
            latitude,
            longitude,
            assigned_driver,
            phone_owner,
            phone_carrier,
            mobile_phone,
            contact_book,
            money_saved,
            decision_maker,
            antenatal_care_visits,
            location_of_delivery,
            method_of_arriving,
            health_insurance,
            insurance_type,
            number_of_pregnancies,
            number_of_birth,
            had_twins,
            living_children,
            children_under_five,
            infant_death,
            c_section,
            anemia,
            malaria,
            obstructed_labor,
            malpresentation,
            hemorrhage,
            retained_placenta,
            placenta_previa,
            stillbirth,
            other_complications
        }) {
        return {
            age: age || '',
            marital_status: marital_status || '',
            wife_order: wife_order || '',
            schooled: schooled || '',
            school_level: school_level || '',
            village: village || '',
            latitude: latitude || '',
            longitude: longitude || '',
            assigned_driver: assigned_driver || '',
            phone_owner: phone_owner || '',
            phone_carrier: phone_carrier || '',
            mobile_phone: mobile_phone || '',
            contact_book: contact_book || '',
            money_saved: money_saved || '',
            decision_maker: decision_maker || '',
            antenatal_care_visits: antenatal_care_visits || '',
            location_of_delivery: location_of_delivery || '',
            method_of_arriving: method_of_arriving || '',
            health_insurance: health_insurance || '',
            insurance_type: insurance_type || '',
            number_of_pregnancies: number_of_pregnancies || '',
            number_of_birth: number_of_birth || '',
            had_twins: had_twins || '',
            living_children: living_children || '',
            children_under_five: children_under_five || '',
            infant_death: infant_death || '',
            c_section: c_section || '',
            anemia: anemia || '',
            malaria: malaria || '',
            obstructed_labor: obstructed_labor || '',
            malpresentation: malpresentation || '',
            hemorrhage: hemorrhage || '',
            retained_placenta: retained_placenta || '',
            placenta_previa: placenta_previa || '',
            stillbirth: stillbirth || '',
            other_complications: other_complications || '',
        };
    },

    validationSchema: Yup.object().shape({
        age: Yup.string().max(3).required('Please enter an age'),
        marital_status: Yup.string().required('Please enter a marital status'),
        wife_order: Yup.string().required('Please enter a wife order'),
        school_level: Yup.string().required('Please enter a school level'),

        village: Yup.string().required('Please enter a village'),
        latitude: Yup.string().required('Please enter a latitude'),
        longitude: Yup.string().required('Please enter a longitude'),
        assigned_driver: Yup.string().required('Please enter an assigned driver'),

        phone_owner: Yup.string().required('Please enter a phone owner'),
        phone_carrier: Yup.string().required('Please enter a phone carrier'),
        mobile_phone: Yup.string().required('Please enter a mobile phone'),
        contact_book: Yup.string().required('Please enter a contact book'),

        money_saved: Yup.string().required('Please enter money saved'),
        decision_maker: Yup.string().required('Please enter a decision maker'),
        antenatal_care_visits: Yup.string().required('Please enter visits'),
        location_of_delivery: Yup.string().required('Please enter a location of delivery'),
        method_of_arriving: Yup.string().required('Please enter method of arriving'),
        health_insurance: Yup.string().required('Please enter a health insurance'),
        insurance_type: Yup.string().required('Please enter insurance type'),

        number_of_pregnancies: Yup.string().required('Please enter number of pregnancies'),
        number_of_birth: Yup.string().required('Please enter number of birth'),
        had_twins: Yup.string().required('Please enter twins'),
        living_children: Yup.string().required('Please enter living children'),
        children_under_five: Yup.string().required('Please enter children under five'),
        infant_death: Yup.string().required('Please enter number of infant death'),

        c_section: Yup.string().required('Please enter c-section'),
        anemia: Yup.string().required('Please enter anemia'),
        malaria: Yup.string().required('Please enter malaria'),
        obstructed_labor: Yup.string().required('Please enter obstructed labor'),
        malpresentation: Yup.string().required('Please enter malpresentation'),
        hemorrhage: Yup.string().required('Please enter hemorrhage'),
        retained_placenta: Yup.string().required('Please enter retained placenta'),
        placenta_previa: Yup.string().required('Please enter placenta previa'),
        stillbirth: Yup.string().required('Please enter stillbirth'),
        other_complications: Yup.string().required('Please enter other complications'),
    }),

    handleSubmit(values, {props}) {
        values.mother_id = props.mother_id;
        props.createLabel(values);

    }
})(EditMother);


export default FormikEditMother;