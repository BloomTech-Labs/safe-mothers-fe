import React from 'react';
import {Form, Field, withFormik} from 'formik/dist/index';
import * as Yup from "yup";
import {Button, FormItems} from "../../reusableParts/form-items";
import styled from 'styled-components';
import SVG from 'react-inlinesvg/lib/index';
import Pregnant from '../resources/Pregnant.svg';
import YesNoDontknowDeclin, {choices} from "./YesNoDontknowDeclin";
import CheckBox from "./CheckBox";
import {defineDate} from "../mother-utils";
import Select from "./Select";
import {carriers, number_anc, phone_owner, place_deliver, transport_type, villages} from "./lists";
import PregnancyComplication from "./PregnancyComplication";
import PriorComplication from "./PriorComplication";

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
    const [supplies, setSuppliesForPregnancy] = React.useState(false);
    return (
        <>
            <FormItems>
                <EditMotherForm>
                    <Form className="form-contents edit-form">

                        <div className="edit-personal">
                            <h2 className="personal-name">{"Nancy Whitemoon"}</h2>
                            <SVG src={Pregnant}/>
                            <div>
                                <div className="btn-container">
                                    {/*<Button color="white" nu="blue" >Save</Button>*/}
                                    <button className="submit-btn" type="submit">CREATE</button>
                                </div>

                            </div>
                        </div>

                        <div className="inline">
                            <div className="label-value inline">
                                <ul>
                                    <span className="column-title edit-title">Introduction</span>
                                    <li>Pregnancy</li>
                                    <li>Due date</li>
                                    <li>Deliver in Iganga Hospital</li>
                                    <li>Cesarean section</li>
                                    <li>Complications during delivery</li>
                                    <li>Twins pregnancy</li>
                                </ul>
                                <div className="column">

                                    {/*  current_pg*/}
                                    <YesNoDontknowDeclin {...props} name={"current_pg"} state={false}/>

                                    {/*due_now*/}
                                    <YesNoDontknowDeclin  {...props} name={"due_now"} state={true}/>

                                    {/*deliver_elsewhere*/}
                                    <YesNoDontknowDeclin {...props} name={"deliver_elsewhere"} state={true}/>

                                    {/*hx_cesarean*/}
                                    <YesNoDontknowDeclin {...props} name={"hx_cesarean"} state={true}/>

                                    {/*hx_complication*/}
                                    <YesNoDontknowDeclin {...props} name={"hx_complication"} state={true}/>

                                    {/*current_multip*/}
                                    <YesNoDontknowDeclin {...props} name={"current_multip"} state={true}/>

                                </div>
                            </div>
                            <div className="label-value inline">
                                <ul>
                                    <span className="column-title edit-title">Personal</span>
                                    <li>Name</li>
                                    <li>Expected due date</li>
                                    <li>Age</li>
                                    <li>Village</li>
                                </ul>
                                <div className="column">

                                    {/*name*/}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="name"
                                    />
                                    {props.touched.name && props.errors.name && (
                                        <p className="error-message">{props.errors.name}</p>
                                    )}

                                    {/*edd*/}
                                    <Field className="regular-input input"
                                           type="date"
                                           name="edd"
                                    />
                                    {props.touched.edd && props.errors.edd && (
                                        <p className="error-message">{props.errors.edd}</p>
                                    )}

                                    {/*age*/}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="age"
                                    />
                                    {props.touched.age && props.errors.age && (
                                        <p className="error-message">{props.errors.age}</p>
                                    )}

                                    {/*village*/}
                                    <select className="regular-input input" name="village"
                                            onChange={(e) => props.setFieldValue("village", e.target.value)}>
                                        <Select list={villages}/>
                                        <option value="97">Other</option>
                                    </select>

                                </div>
                            </div>
                            <div className="label-value inline">
                                <ul>
                                    <li>Own phone</li>
                                    <li>Other phone</li>
                                    <li>Phone number</li>
                                    <li>Carrier</li>
                                    <li>Phone owner</li>
                                    <li>Want education</li>
                                </ul>
                                <div className="column">

                                    {/*own_phone*/}
                                    <YesNoDontknowDeclin  {...props} name={"own_phone"} state={false}/>

                                    {/*other_phone*/}
                                    <YesNoDontknowDeclin  {...props} name={"other_phone"} state={false}/>

                                    {/*phone_number*/}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="phone_number"
                                    />
                                    {props.touched.phone_number && props.errors.phone_number && (
                                        <p className="error-message">{props.errors.phone_number}</p>
                                    )}

                                    {/*carrier*/}
                                    <select className="regular-input input" name="carrier"
                                            onChange={(e) => props.setFieldValue("carrier", e.target.value)}>
                                        <Select list={carriers}/>
                                        <option value={choices.OTHER}>Other</option>
                                        <option value={choices.IDN}>Don`t know</option>
                                        <option value={choices.DECLINES_TO_ANSWER}>Decline to answer</option>
                                    </select>

                                    {/*owner_phone*/}
                                    <select className="regular-input input" name="owner_phone"
                                            onChange={(e) => props.setFieldValue("owner_phone", e.target.value)}>
                                        <Select list={phone_owner}/>
                                        <option value={choices.OTHER}>Other</option>
                                    </select>

                                    {/*want_education*/}
                                    <YesNoDontknowDeclin  {...props} name={"want_education"} state={false}/>
                                </div>
                            </div>
                        </div>

                        <div className="inline">

                            <div className="label-value inline">
                                <ul>
                                    <span className="column-title edit-title">Birth Preparedness</span>
                                    <li>purchase_supplies</li>
                                    <li>Decision Maker</li>
                                    <li>Antenatal Care Visits</li>
                                    <li>Location Of Delivery</li>
                                    <li>Method Of Arriving</li>
                                    <li>Health Insurance</li>
                                    <li>Insurance Type</li>
                                </ul>
                                <div className="column">

                                    {/*purchase_supplies*/}
                                    <select className="regular-input input" name="purchase_supplies"
                                            onChange={(e) => {
                                                props.setFieldValue("purchase_supplies", e.target.value);
                                                if (e.target.value === "1") setSuppliesForPregnancy(true)
                                            }}>
                                        <option disabled selected value></option>
                                        <option value={choices.YES}>YES</option>
                                        <option value={choices.NO}>NO</option>
                                        <option value={choices.IDN}>I DON`T KNOW</option>
                                        <option value={choices.DECLINES_TO_ANSWER}>DECLINES TO ANSWER</option>
                                    </select>
                                    {props.touched.purchase_supplies && props.errors.purchase_supplies && (
                                        <p className="error-message">{props.errors.purchase_supplies}</p>
                                    )}


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


                                    {/*no_anc*/}
                                    <select className="regular-input input" name="no_anc"
                                            onChange={(e) => props.setFieldValue("no_anc", e.target.value)}>
                                        <Select list={number_anc}/>
                                        <option value={choices.NO}>ZERO VISITS (NO ANC)</option>
                                        <option value={choices.IDN}>DON'T KNOW</option>
                                        <option value={choices.DECLINES_TO_ANSWER}>DECLINES TO ANSWER</option>
                                    </select>

                                    {/*deliver_place*/}
                                    <select className="regular-input input" name="deliver_place"
                                            onChange={(e) => props.setFieldValue("deliver_place", e.target.value)}>
                                        <Select list={place_deliver}/>
                                        <option value={choices.IDN}>DON'T KNOW</option>
                                        <option value={choices.DECLINES_TO_ANSWER}>DECLINES TO ANSWER</option>
                                        <option value={choices.OTHER}>OTHER</option>
                                    </select>

                                    {/*plan_transport*/}
                                    <select className="regular-input input" name="plan_transport "
                                            onChange={(e) => props.setFieldValue("plan_transport", e.target.value)}>
                                        <Select list={transport_type}/>
                                        <option value={choices.IDN}>DON'T KNOW</option>
                                        <option value={choices.DECLINES_TO_ANSWER}>DECLINES TO ANSWER</option>
                                        <option value={choices.OTHER}>OTHER</option>
                                    </select>
                                    {props.touched.plan_transport && props.errors.plan_transport && (
                                        <p className="error-message">{props.errors.plan_transport}</p>
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
                            {supplies &&
                            <div className="label-value inline">
                                <ul>
                                    <span className="column-title edit-title">Supplies</span>
                                    <li>"mama kit"</li>
                                    <li>"mackintosh"</li>
                                    <li>"razor"</li>
                                    <li>"pad"</li>
                                    <li>"cotton"</li>
                                    <li>"soap"</li>
                                    <li>"gloves"</li>
                                    <li>"medication"</li>
                                    <li>"baby_clothes"</li>
                                    <li>"blanket"</li>
                                    <li>"sheets"</li>
                                    <li>"supplies_other"</li>
                                </ul>
                                <div className="column">

                                    <>
                                        <CheckBox field={
                                            <Field className="toggle-check-input"
                                                   type="checkbox"
                                                   name="other_complications"
                                            />
                                        }/>

                                        <CheckBox field={
                                            <Field className="toggle-check-input"
                                                   type="checkbox"
                                                   name="other_complications"
                                            />
                                        }/>

                                    </>

                                </div>
                            </div>
                            }
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


                                    {/*no_anc*/}
                                    <select className="regular-input input" name="no_anc"
                                            onChange={(e) => props.setFieldValue("no_anc", e.target.value)}>
                                        <Select list={number_anc}/>
                                        <option value={choices.NO}>ZERO VISITS (NO ANC)</option>
                                        <option value={choices.IDN}>DON'T KNOW</option>
                                        <option value={choices.DECLINES_TO_ANSWER}>DECLINES TO ANSWER</option>
                                    </select>

                                    {/*deliver_place*/}
                                    <select className="regular-input input" name="deliver_place"
                                            onChange={(e) => props.setFieldValue("deliver_place", e.target.value)}>
                                        <Select list={place_deliver}/>
                                        <option value={choices.IDN}>DON'T KNOW</option>
                                        <option value={choices.DECLINES_TO_ANSWER}>DECLINES TO ANSWER</option>
                                        <option value={choices.OTHER}>OTHER</option>
                                    </select>

                                    {/*plan_transport*/}
                                    <select className="regular-input input" name="plan_transport "
                                            onChange={(e) => props.setFieldValue("plan_transport", e.target.value)}>
                                        <Select list={transport_type}/>
                                        <option value={choices.IDN}>DON'T KNOW</option>
                                        <option value={choices.DECLINES_TO_ANSWER}>DECLINES TO ANSWER</option>
                                        <option value={choices.OTHER}>OTHER</option>
                                    </select>
                                    {props.touched.plan_transport && props.errors.plan_transport && (
                                        <p className="error-message">{props.errors.plan_transport}</p>
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

                            {/*HIGHT_RISK READY*/}
                            <div className="label-value inline">
                                <ul>
                                    <span className="column-title edit-title">HIGH RISK</span>
                                    <li>Anemia</li>
                                    <li>Malaria</li>
                                    <li>Obstructed Labor</li>
                                    <li>Malpresentation</li>
                                    <li>Antepartum hemorrhage</li>
                                    <li>Postpartum hemorrhage</li>
                                    <li>Retained Placenta</li>
                                    <li>Placenta Previa</li>
                                    <li>Stillbirth</li>
                                    <li>How many stillbirth</li>
                                    <li>Other complications</li>
                                </ul>
                                <div className="column">

                                    {/*anemia*/}
                                    <PregnancyComplication  {...props} name={"anemia"}/>

                                    {/*malaria*/}
                                    <PregnancyComplication  {...props} name={"malaria"}/>

                                    {/*obstructed_labor*/}
                                    <PriorComplication  {...props} name={"obstructed_labor"}/>

                                    {/*malpresent*/}
                                    <PriorComplication  {...props} name={"malpresent"}/>

                                    {/*aph*/}
                                    <PregnancyComplication  {...props} name={"aph"}/>

                                    {/*pph*/}
                                    <PriorComplication  {...props} name={"pph"}/>

                                    {/*ret_placenta*/}
                                    <PriorComplication  {...props} name={"ret_placenta"}/>

                                    {/*placenta_previa*/}
                                    <PregnancyComplication  {...props} name={"placenta_previa"}/>

                                    {/*ho_stillbirth*/}
                                    <YesNoDontknowDeclin  {...props} name={"no_stillbirth"} state={true}/>

                                    {/*hx_stillbirth*/}

                                    <Field className="regular-input input"
                                           type="text"
                                           name="hx_stillbirth"
                                    />

                                    {/*BP_note*/}
                                    <YesNoDontknowDeclin  {...props} name={"BP_note"} state={true}/>


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
            current_pg,
            due_now,
            deliver_elsewhere,
            hx_cesarean,
            hx_complication,
            current_multip,

            name,
            edd,
            age,
            village,

            own_phone,
            other_phone,
            phone_number,
            carrier,
            owner_phone,
            want_education,

            marital_status,
            wife_order,
            schooled,
            school_level,

            assigned_driver,

            mobile_phone,
            contact_book,
            money_saved,
            decision_maker,

            no_anc,
            deliver_place,
            plan_transport,
            purchase_supplies,

            health_insurance,
            insurance_type,
            number_of_pregnancies,
            number_of_birth,
            had_twins,
            living_children,
            children_under_five,
            infant_death,

            anemia,
            malaria,
            obstructed_labor,
            malpresent,
            aph,
            pph,
            ret_placenta,
            placenta_previa,
            hx_stillbirth,
            no_stillbirth,
            BP_note
        }) {
        return {
            current_pg: current_pg || '',
            due_now: due_now || '',
            deliver_elsewhere: deliver_elsewhere || '',
            hx_cesarean: hx_cesarean || '',
            hx_complication: hx_complication || '',
            current_multip: current_multip || '',

            name: name || '',
            edd: edd || defineDate(),
            age: age || '',
            village: village || '',

            own_phone: own_phone || '',
            other_phone: other_phone || '',
            phone_number: phone_number || '',
            carrier: carrier || '',
            owner_phone: owner_phone || '',
            want_education: want_education || '',
            // complications_note

            marital_status: marital_status || '',
            wife_order: wife_order || '',
            schooled: schooled || '',
            school_level: school_level || '',


            assigned_driver: assigned_driver || '',

            money_saved: money_saved || '',
            decision_maker: decision_maker || '',
            no_anc: no_anc || '',
            deliver_place: deliver_place || '',

            plan_transport: plan_transport || '',
            purchase_supplies: purchase_supplies || '',

            health_insurance: health_insurance || '',
            insurance_type: insurance_type || '',
            number_of_pregnancies: number_of_pregnancies || '',
            number_of_birth: number_of_birth || '',
            had_twins: had_twins || '',
            living_children: living_children || '',
            children_under_five: children_under_five || '',
            infant_death: infant_death || '',


            anemia: anemia || '',
            malaria: malaria || '',
            obstructed_labor: obstructed_labor || '',
            malpresent: malpresent || '',
            aph: aph || '',
            pph: pph || '',
            ret_placenta: ret_placenta || '',
            placenta_previa: placenta_previa || '',
            hx_stillbirth: hx_stillbirth || '',
            no_stillbirth: no_stillbirth || '',
            BP_note: BP_note || '',
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().max(30).required('Please enter name'),
        age: Yup.string().max(3).required('Please enter age'),

        marital_status: Yup.string().required('Please enter a marital status'),
        wife_order: Yup.string().required('Please enter a wife order'),
        school_level: Yup.string().required('Please enter a school level'),


        assigned_driver: Yup.string().required('Please enter an assigned driver'),

        mobile_phone: Yup.string().required('Please enter a mobile phone'),
        contact_book: Yup.string().required('Please enter a contact book'),

        money_saved: Yup.string().required('Please enter money saved'),
        decision_maker: Yup.string().required('Please enter a decision maker'),

        no_anc: Yup.string().required('Please enter visits'),
        deliver_place: Yup.string().required('Please choose something from a list'),
        purchase_supplies: Yup.string().required('Please choose something from a list'),

        method_of_arriving: Yup.string().required('Please enter method of arriving'),
        health_insurance: Yup.string().required('Please enter a health insurance'),
        insurance_type: Yup.string().required('Please enter insurance type'),

        number_of_pregnancies: Yup.string().required('Please enter number of pregnancies'),
        number_of_birth: Yup.string().required('Please enter number of birth'),
        had_twins: Yup.string().required('Please enter twins'),
        living_children: Yup.string().required('Please enter living children'),
        children_under_five: Yup.string().required('Please enter children under five'),
        infant_death: Yup.string().required('Please enter number of infant death'),


        hx_stillbirth: Yup.string().required('Please enter number of stillbirths'),
        BP_note: Yup.string().required('Please choose something from a list'),

    }),

    handleSubmit(values, {props}) {
        console.log("values ", values);
    }
})(EditMother);


export default FormikEditMother;


/*

own_phone - just a phone don`t worry about that



interviewer_other (string) from db



1. interviewer

Mukalu Mohamed
Mikayla O’Bryan
Barilaine Joseph Peter
Tatumwa Desmond Benjamine
Ssemambo Peter Mumbya
Other

2. current_pg  (current_pg -be)(Are you currently pregnant?)

3.due date  - (due_now -be)
1	YES
0	NO
98	DON'T KNOW
99	DECLINES TO ANSWER
-1	ENDS INTERVIEW

4.



plan_transport

WALKING
BICYCLE TAXI
MOTORCYCLE TAXI
MATATU
BICYCLE MY HOUSEHOLD OWNS
MOTORCYCLE MY HOUSEHOLD OWNS
AUTOCAR MY HOUSEHOLD OWNS
SAFE MOTORCYCLE AMBULANCE
OTHER
DON'T KNOW
DECLINES TO ANSWER
ENDS INTERVIEW




*supplies

* MAMA KIT
MACKINTOSH
RAZOR
SANITARY PAD
COTTON ROLL
SOAP
GLOVES
MEDICATION
BABY CLOTHES
BABY BLANKET
SHEETS
OTHER
DECLINES TO ANSWER
ENDS INTERVIEW
*/

