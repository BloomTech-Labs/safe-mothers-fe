import React, {useState} from 'react';
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
import {
    carriers,
    number_anc,
    phone_owner,
    place_deliver,
    transport_type,
    villages,
    supplies_items,
    education, decision_maker, marital_status, wives_number, wife_rank
} from "./lists";
import PregnancyComplication from "./PregnancyComplication";
import PriorComplication from "./PriorComplication";
import Interviewers, {interviewers} from "./Interviewers";
import {connect} from "react-redux";
import {addMothers} from "../../../actions/mothersActions";
import {Link} from "react-router-dom";

const StyledMotherForm = styled.div`
    width: 100%;
    min-width: 718px;
    
    ul{
      position: relative;
    }
    
    .header-personal{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 50px;
        width: 100%;
        position: relative;
    }
    
    .arrow{
        position: absolute;
        bottom: 26px;
        width: 6%;
        left: 0;
        font-size: 35px;
        height: 40px;
    }
    
    .personal-name{
        width: 20%;
        font-weight: bold;
        line-height: 16px;
        text-align: left;
        white-space: nowrap;
    }
    
    .status{
      width: 40%;
    }
    
    .btn-container{
        width: 30%;
        display: flex;
        justify-content: center;
        margin: 0;
    }
    
    .back{
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        cursor: pointer;
        p{
            font-size: 1rem;
            text-transform: uppercase;       
        }
    }
    
    .form-title{
        position: absolute;
        top: -50px;
    }
    
    .position-form{
      margin-top: 60px;
      background: white;
      border: 1.5px solid #EEEEEF;
      padding-top: 30px;
      padding-left: 1%;
      padding-right: 1%;
    }
    
    .inline{
      margin-bottom: 30px;
      padding-top: 24px;
    }
  
    .column{
        padding: 1%;
    }
    
    .column-checkboxes{
        padding: 0;
        margin-top: 0;
        margin-left: 5%;
        li{
            padding-bottom: 20px;
        }
    }
 
    .inline-label{
        display: flex;
        align-items: center;
    }
  
    .input{ }

    .label-value{
        text-align: left;
        width: 33%;
    }
    
    .toggle-check-container{
        position: relative;
        margin-bottom: 13px;
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

function MotherForm(props) {
    const [supplies, setSuppliesForPregnancy] = useState(false);
    const [amtSaved, setAmtSaved] = useState(false);

    const handleSupplies = (name, value) => {
        if (typeof props.values[name] === 'number') {
            props.setFieldValue(name, '')
        } else {
            props.setFieldValue(name, parseInt(value))
        }
    };
    const resetValue = (name, value, name2, value2) => {
        props.setFieldValue(name, parseInt(value));
        if (value !== value2) {
            props.setFieldValue(name2, '')
        }
    };

    return (
        <>
            <FormItems>
                <StyledMotherForm>
                    <Form className="form-contents position-form">

                        <div className="header-personal">
                           {/* <p className="arrow">
                                <Link to="/">&#8592;</Link>
                            </p>*/}
                            <h2 className="personal-name">{"Nancy Whitemoon"}</h2>
                            <SVG src={Pregnant}/>
                            <div className="status"></div>
                            <div className="btn-container">
                                <button className="submit-btn" type="submit">Save</button>
                                <Button color="white" bgOnHover="#db4343" bg="#EB5757">Delete</Button>
                            </div>
                            <div className="back">
                                <p onClick={() => props.history.push("/mothers")} >Back</p>
                            </div>
                        </div>

                        {/*first line*/}
                        <div className="inline">
                            {/*introduction - ready*/}
                            <div className="label-value inline">
                                <ul>
                                    <span className="column-title form-title">Introduction</span>
                                    <li>Interviewer</li>
                                    {props.values.interviewer === interviewers.Other &&
                                    <li>Name of the Interviewer</li>}
                                    <li>Pregnancy</li>
                                    <li>Due date</li>
                                    <li>Deliver in Iganga Hospital</li>
                                    <li>Cesarean section</li>
                                    <li>Complications during delivery</li>
                                    <li>Twins pregnancy</li>
                                </ul>
                                <div className="column">
                                    {/*interviewer*/}
                                    <label className="error-holder">
                                        <select className="regular-input input" name="interviewer"
                                                onChange={(e) => resetValue("interviewer", e.target.value, "interviewer_other", interviewers.Other)}>
                                            <Interviewers/>
                                        </select>
                                        {props.touched.interviewer && props.errors.interviewer && (
                                            <p className="errormessage">{props.errors.interviewer}</p>
                                        )}
                                    </label>

                                    {/*interviewer_other*/}
                                    {props.values.interviewer === interviewers.Other &&
                                    <label className="error-holder">
                                        <Field className="regular-input input" type="text" name="interviewer_other"/>
                                        {props.touched.interviewer_other && props.errors.interviewer_other && (
                                            <p className="errormessage">{props.errors.interviewer_other}</p>
                                        )}
                                    </label>
                                    }

                                    {/*current_pg*/}
                                    <label className="error-holder">
                                        <select className="regular-input input" name="current_pg"
                                                onChange={(e) => props.setFieldValue("current_pg", parseInt(e.target.value))}>
                                            <YesNoDontknowDeclin state={false}/>
                                        </select>
                                        {props.touched.current_pg && props.errors.current_pg && (
                                            <p className="errormessage">{props.errors.current_pg}</p>
                                        )}
                                    </label>

                                    {/*due_now*/}
                                    <label className="error-holder">
                                        <select className="regular-input input" name="due_now"
                                                onChange={(e) => props.setFieldValue("due_now", parseInt(e.target.value))}>
                                            <YesNoDontknowDeclin state={true}/>
                                        </select>
                                        {props.touched.due_now && props.errors.due_now && (
                                            <p className="errormessage">{props.errors.due_now}</p>
                                        )}
                                    </label>

                                    {/*deliver_elsewhere*/}
                                    <label className="error-holder">
                                        <select className="regular-input input" name="deliver_elsewhere"
                                                onChange={(e) => props.setFieldValue("deliver_elsewhere", parseInt(e.target.value))}>
                                            <YesNoDontknowDeclin state={true}/>
                                        </select>
                                        {props.touched.deliver_elsewhere && props.errors.deliver_elsewhere && (
                                            <p className="errormessage">{props.errors.deliver_elsewhere}</p>
                                        )}
                                    </label>

                                    {/*hx_cesarean*/}
                                    <label className="error-holder">
                                        <select className="regular-input input" name="hx_cesarean"
                                                onChange={(e) => props.setFieldValue("hx_cesarean", parseInt(e.target.value))}>
                                            <YesNoDontknowDeclin state={true}/>
                                        </select>
                                        {props.touched.hx_cesarean && props.errors.hx_cesarean && (
                                            <p className="errormessage">{props.errors.hx_cesarean}</p>
                                        )}
                                    </label>

                                    {/*hx_complication*/}
                                    <label className="error-holder">
                                        <select className="regular-input input" name="hx_complication"
                                                onChange={(e) => props.setFieldValue("hx_complication", parseInt(e.target.value))}>
                                            <YesNoDontknowDeclin state={true}/>
                                        </select>
                                        {props.touched.hx_complication && props.errors.hx_complication && (
                                            <p className="errormessage">{props.errors.hx_complication}</p>
                                        )}
                                    </label>

                                    {/*current_multip*/}
                                    <label className="error-holder">
                                        <select className="regular-input input" name="current_multip"
                                                onChange={(e) => props.setFieldValue("current_multip", parseInt(e.target.value))}>
                                            <YesNoDontknowDeclin state={true}/>
                                        </select>
                                        {props.touched.current_multip && props.errors.current_multip && (
                                            <p className="errormessage">{props.errors.current_multip}</p>
                                        )}
                                    </label>

                                </div>
                            </div>

                            {/*registration p1 -ready */}
                            <div className="label-value inline">
                                <ul>
                                    <span className="column-title form-title">Personal</span>
                                    <li>Name</li>
                                    <li>Expected due date</li>
                                    <li>Age</li>
                                    <li>Village</li>
                                    {props.values.village === choices.OTHER &&
                                    <li>Name of the village</li>
                                    }
                                </ul>
                                <div className="column">

                                    {/*name*/}
                                    <label className="error-holder">
                                        <Field className="regular-input input" type="text" name="name"/>
                                        {props.touched.name && props.errors.name && (
                                            <p className="errormessage">{props.errors.name}</p>
                                        )}
                                    </label>

                                    {/*edd*/}
                                    <label className="error-holder">
                                        <Field className="regular-input input" type="date" name="edd"/>
                                        {props.touched.edd && props.errors.edd && (
                                            <p className="errormessage">{props.errors.edd}</p>
                                        )}
                                    </label>

                                    {/*age*/}
                                    <label className="error-holder">
                                        <Field className="regular-input input" type="number" name="age"/>
                                        {props.touched.age && props.errors.age && (
                                            <p className="errormessage">{props.errors.age}</p>
                                        )}
                                    </label>

                                    {/*village*/}
                                    <label className="error-holder">
                                        <select className="regular-input input" name="village"
                                                onChange={(e) => resetValue("village", e.target.value, "village_other", choices.OTHER)}>
                                            <Select list={villages}/>
                                            <option value="97">Other</option>
                                        </select>
                                        {props.touched.village && props.errors.village && (
                                            <p className="errormessage">{props.errors.village}</p>
                                        )}
                                    </label>

                                    {/*village_other*/}
                                    {props.values.village === choices.OTHER &&
                                    <label className="error-holder">
                                        <Field className="regular-input input" type="text" name="village_other"/>
                                        {props.touched.village_other && props.errors.village_other && (
                                            <p className="errormessage">{props.errors.village_other}</p>
                                        )}
                                    </label>}

                                </div>
                            </div>

                            {/*registration p2 -ready*/}
                            <div className="label-value inline">
                                <ul>
                                    <li>Own phone</li>
                                    <li>Other phone</li>
                                    <li>Phone number</li>
                                    <li>Carrier</li>
                                    {props.values.carrier === choices.OTHER &&
                                    <li>Name of the carrier</li>
                                    }
                                    <li>Phone owner</li>
                                    {props.values.owner_phone === choices.OTHER &&
                                    <li>Name of the phone owner</li>}
                                    <li>Want education</li>
                                </ul>
                                <div className="column">
                                    {/*own_phone*/}
                                    <label className="error-holder">
                                        <select className="regular-input input" name="own_phone"
                                                onChange={(e) => props.setFieldValue("own_phone", parseInt(e.target.value))}>
                                            <YesNoDontknowDeclin state={false}/>
                                        </select>
                                        {props.touched.own_phone && props.errors.own_phone && (
                                            <p className="errormessage">{props.errors.own_phone}</p>
                                        )}
                                    </label>

                                    {/*other_phone*/}
                                    <label className="error-holder">
                                        <select className="regular-input input" name="other_phone"
                                                onChange={(e) => props.setFieldValue("other_phone", parseInt(e.target.value))}>
                                            <YesNoDontknowDeclin state={false}/>
                                        </select>
                                        {props.touched.other_phone && props.errors.other_phone && (
                                            <p className="errormessage">{props.errors.other_phone}</p>
                                        )}
                                    </label>

                                    {/*phone_number*/}
                                    <label className="error-holder">
                                        <Field className="regular-input input" type="text" name="phone_number"/>
                                        {props.touched.phone_number && props.errors.phone_number && (
                                            <p className="errormessage">{props.errors.phone_number}</p>
                                        )}
                                    </label>

                                    {/*carrier*/}
                                    <label className="error-holder">
                                        <select className="regular-input input" name="carrier"
                                                onChange={(e) => resetValue("carrier", e.target.value, "carrier_other", choices.OTHER)}>
                                            <Select list={carriers}/>
                                            <option value={choices.OTHER}>Other</option>
                                            <option value={choices.IDN}>Don`t know</option>
                                            <option value={choices.DECLINES_TO_ANSWER}>Decline to answer</option>
                                        </select>
                                        {props.touched.carrier && props.errors.carrier && (
                                            <p className="errormessage">{props.errors.carrier}</p>
                                        )}
                                    </label>

                                    {/*carrier_other*/}
                                    {props.values.carrier === choices.OTHER &&
                                    <label className="error-holder">
                                        <Field className="regular-input input" type="text" name="carrier_other"/>
                                        {props.touched.carrier_other && props.errors.carrier_other && (
                                            <p className="errormessage">{props.errors.carrier_other}</p>
                                        )}
                                    </label>
                                    }

                                    {/*owner_phone*/}
                                    <label className="error-holder">
                                        <select className="regular-input input" name="owner_phone"
                                                onChange={(e) => resetValue("owner_phone", e.target.value, "owner_phone_other", choices.OTHER)}>
                                            <Select list={phone_owner}/>
                                            <option value={choices.OTHER}>Other</option>
                                        </select>
                                        {props.touched.owner_phone && props.errors.owner_phone && (
                                            <p className="errormessage">{props.errors.owner_phone}</p>
                                        )}
                                    </label>

                                    {/*owner_phone_other*/}
                                    {props.values.owner_phone === choices.OTHER &&
                                    <label className="error-holder">
                                        <Field className="regular-input input" type="text" name="owner_phone_other"/>
                                        {props.touched.owner_phone_other && props.errors.owner_phone_other && (
                                            <p className="errormessage">{props.errors.owner_phone_other}</p>
                                        )}
                                    </label>
                                    }

                                    {/*want_education*/}
                                    <label className="error-holder">
                                        <select className="regular-input input" name="want_education"
                                                onChange={(e) => props.setFieldValue("want_education", parseInt(e.target.value))}>
                                            <YesNoDontknowDeclin state={false}/>
                                        </select>
                                        {props.touched.want_education && props.errors.want_education && (
                                            <p className="errormessage">{props.errors.want_education}</p>
                                        )}
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/*second line*/}
                        <div className="inline">

                            {/*complications - ready*/}
                            <div className="label-value inline">
                                <ul>
                                    <span className="column-title form-title">HIGH RISK</span>
                                    <li>Anemia</li>
                                    <li>Malaria</li>
                                    <li>Obstructed Labor</li>
                                    <li>Malpresentation</li>
                                    <li>Antepartum hemorrhage</li>
                                    <li>Postpartum hemorrhage</li>
                                    <li>Retained Placenta</li>
                                    <li>Placenta Previa</li>
                                    <li>Stillbirth</li>
                                    {props.values.hx_stillbirth === choices.YES &&
                                    <li>How many stillbirth</li>}
                                    <li>Other complications</li>
                                    {props.values.other_complication === choices.YES &&
                                    <li>Name of the complication</li>
                                    }
                                </ul>
                                <div className="column">

                                    {/*complications_note*/}

                                    {/*anemia*/}
                                    <select className="regular-input input" name="anemia"
                                            onChange={(e) => props.setFieldValue("anemia", parseInt(e.target.value))}>
                                        <PregnancyComplication/>
                                    </select>

                                    {/*malaria*/}
                                    <select className="regular-input input" name="malaria"
                                            onChange={(e) => props.setFieldValue("malaria", parseInt(e.target.value))}>
                                        <PregnancyComplication/>
                                    </select>

                                    {/*obstructed_labor*/}
                                    <select className="regular-input input" name="obstructed_labor"
                                            onChange={(e) => props.setFieldValue("obstructed_labor", parseInt(e.target.value))}>
                                        <PriorComplication name={"obstructed_labor"}/>
                                    </select>

                                    {/*malpresent*/}
                                    <select className="regular-input input" name="malpresent"
                                            onChange={(e) => props.setFieldValue("malpresent", parseInt(e.target.value))}>
                                        <PriorComplication  {...props} name={"malpresent"}/>
                                    </select>

                                    {/*aph*/}
                                    <select className="regular-input input" name="aph"
                                            onChange={(e) => props.setFieldValue("aph", parseInt(e.target.value))}>
                                        <PregnancyComplication/>
                                    </select>

                                    {/*pph*/}
                                    <select className="regular-input input" name="pph"
                                            onChange={(e) => props.setFieldValue("pph", parseInt(e.target.value))}>
                                        <PriorComplication/>
                                    </select>

                                    {/*ret_placenta*/}
                                    <select className="regular-input input" name="ret_placenta"
                                            onChange={(e) => props.setFieldValue("ret_placenta", parseInt(e.target.value))}>
                                        <PriorComplication/>
                                    </select>

                                    {/*placenta_previa*/}
                                    <select className="regular-input input" name="placenta_previa"
                                            onChange={(e) => props.setFieldValue("placenta_previa", parseInt(e.target.value))}>
                                        <PregnancyComplication/>
                                    </select>

                                    {/*hx_stillbirth*/}
                                    <select className="regular-input input" name="hx_stillbirth"
                                            onChange={(e) => resetValue("hx_stillbirth", e.target.value, "no_stillbirths", choices.YES)}>
                                        <YesNoDontknowDeclin state={true}/>
                                    </select>

                                    {/*no_stillbirths*/}
                                    {props.values.hx_stillbirth === choices.YES &&
                                    <Field className="regular-input input"
                                           type="number"
                                           name="no_stillbirths"
                                    />}

                                    {/*other_complication*/}
                                    <select className="regular-input input" name="other_complication"
                                            onChange={(e) => resetValue("other_complication", e.target.value, "complication_specify", choices.YES)}>
                                        <YesNoDontknowDeclin state={true}/>
                                    </select>

                                    {/*complication_specify*/}
                                    {props.values.other_complication === choices.YES &&
                                    <Field className="regular-input input"
                                           type="text"
                                           name="complication_specify"
                                    />}
                                </div>
                            </div>

                            {/*Birth Preparedness - ready*/}
                            <div className="label-value inline">
                                <ul>
                                    <span className="column-title form-title">Birth Preparedness</span>
                                    <li>Antenatal Care Visits</li>
                                    <li>Location Of Delivery</li>
                                    {props.values.deliver_place === choices.OTHER &&
                                    <li>Name of the location</li>
                                    }
                                    <li>Method Of Arriving</li>
                                    {props.values.plan_transport === choices.OTHER &&
                                    <li>Other transport</li>}
                                    <li>Purchase supplies</li>
                                    <li>Money Saved</li>
                                    {props.values.saving_money === choices.YES &&
                                    <li>Saved amount</li>
                                    }
                                </ul>
                                <div className="column">

                                    {/*BP_note - ASK WHAT IT IS */}

                                    {/*no_anc*/}
                                    <select className="regular-input input" name="no_anc"
                                            onChange={(e) => props.setFieldValue("no_anc", parseInt(e.target.value))}>
                                        <Select list={number_anc}/>
                                        <option value={choices.NO}>ZERO VISITS (NO ANC)</option>
                                        <option value={choices.IDN}>DON'T KNOW</option>
                                        <option value={choices.DECLINES_TO_ANSWER}>DECLINES TO ANSWER</option>
                                    </select>

                                    {/*deliver_place*/}
                                    <select className="regular-input input" name="deliver_place"
                                            onChange={(e) => resetValue("deliver_place", e.target.value, "deliver_place_other", choices.OTHER)}>
                                        <Select list={place_deliver}/>
                                        <option value={choices.IDN}>DON'T KNOW</option>
                                        <option value={choices.DECLINES_TO_ANSWER}>DECLINES TO ANSWER</option>
                                        <option value={choices.OTHER}>OTHER</option>
                                    </select>

                                    {/*deliver_place_other*/}
                                    {props.values.deliver_place === choices.OTHER &&
                                    <Field className="regular-input input"
                                           type="text"
                                           name="deliver_place_other"
                                    />}

                                    {/*deliver_specific - ASK WHAT IT IS */}

                                    {/*plan_transport*/}
                                    <select className="regular-input input" name="plan_transport "
                                            onChange={(e) => resetValue("plan_transport", e.target.value, "plan_transport_other", choices.OTHER)}>
                                        <Select list={transport_type}/>
                                        <option value={choices.IDN}>DON'T KNOW</option>
                                        <option value={choices.DECLINES_TO_ANSWER}>DECLINES TO ANSWER</option>
                                        <option value={choices.OTHER}>OTHER</option>
                                    </select>

                                    {/*plan_transport_other*/}
                                    {props.values.plan_transport === choices.OTHER &&
                                    <Field className="regular-input input"
                                           type="text"
                                           name="plan_transport_other"
                                    />}

                                    {/*purchase_supplies*/}
                                    <select className="regular-input input" name="purchase_supplies"
                                            onChange={(e) => {
                                                console.log("choise ", e.target.value);
                                                props.setFieldValue("purchase_supplies", parseInt(e.target.value));
                                                if (parseInt(e.target.value) === choices.YES) setSuppliesForPregnancy(true);
                                                if (parseInt(e.target.value) === choices.NO || parseInt(e.target.value) === choices.IDN || parseInt(e.target.value) === choices.DECLINES_TO_ANSWER) setSuppliesForPregnancy(false);
                                            }}>
                                        <option disabled selected value></option>
                                        <option value={choices.YES}>YES</option>
                                        <option value={choices.NO}>NO</option>
                                        <option value={choices.IDN}>I DON`T KNOW</option>
                                        <option value={choices.DECLINES_TO_ANSWER}>DECLINES TO ANSWER</option>
                                    </select>

                                    {/*saving_money*/}
                                    <select className="regular-input input" name="saving_money"
                                            onChange={(e) => resetValue("saving_money", e.target.value, "amt_saved", choices.YES)}>
                                        <YesNoDontknowDeclin/>
                                    </select>

                                    {/*amt_saved*/}
                                    {props.values.saving_money === choices.YES &&
                                    <Field className="regular-input input"
                                           type="number"
                                           name="amt_saved"
                                    />}

                                    {/*amt_saved_range -ASK WHAT IT IS*/}

                                </div>
                            </div>

                            {/*Pop up with supplies*/}
                            {supplies &&
                            <div className="label-value inline">
                                <ul className="column-checkboxes">
                                    <span className="column-title form-title">Supplies</span>
                                    <li>Mama kit</li>
                                    <li>Mackintosh</li>
                                    <li>Razor</li>
                                    <li>Pad</li>
                                    <li>Cotton</li>
                                    <li>Soap</li>
                                    <li>Gloves</li>
                                    <li>Medication</li>
                                    <li>Baby clothes</li>
                                    <li>Blanket</li>
                                    <li>Sheets</li>
                                    <li>Supplies other</li>
                                </ul>
                                <div className="column column-checkboxes">
                                    {/*data holders for supplies*/}
                                    {supplies_items.map((item, index) =>
                                        <Field key={index} type="text" className="hidden-input" name={item}/>
                                    )}
                                    <Field type="text" className="hidden-input" name="supplies_other"/>
                                    <Field type="text" className="hidden-input" name="supplies_decline_to_answer"/>

                                    {/*checkboxes for supplies*/}
                                    {supplies_items.map((item, index) =>
                                        <CheckBox key={index} field={
                                            <Field className="toggle-check-input"
                                                   onClick={() => handleSupplies(item, index + 1)}
                                                   type="checkbox"
                                            />
                                        }/>
                                    )}

                                    {/*OTHER = 97*/}
                                    <CheckBox field={
                                        <Field className="toggle-check-input"
                                               onClick={() => handleSupplies("other_supply", choices.OTHER)}
                                               type="checkbox"
                                        />
                                    }/>
                                </div>
                            </div>}
                        </div>

                        {/*third line*/}
                        <div className="inline">

                            {/*Demographics*/}
                            <div className="label-value inline">
                                <ul>
                                    <span className="column-title form-title">Demographics</span>
                                    <li>Schooled</li>
                                    {props.values.attend_school === choices.YES &&
                                    <li>School Level</li>}
                                    <li>Decision maker</li>
                                    <li>Number of households</li>
                                    <li>Marital status</li>
                                    {props.values.marital_status === choices.OTHER &&
                                    <li>Name of the marital status</li>}
                                    <li>Partner`s education</li>
                                    {props.values.spouse_school === choices.YES &&
                                    <li>Partner`s school level</li>}
                                    <li>Polygamy</li>
                                    {props.values.polygamy === choices.YES &&
                                    <li>Number of wives</li>}
                                    {props.values.no_wives === choices.OTHER &&
                                    <li>Specify number of wives</li>}
                                    <li>Wife order</li>
                                    {props.values.no_wives === choices.OTHER &&
                                    <li>Specify wife order</li>}
                                    <li>Insurance</li>
                                    {props.values.insurance === choices.YES &&
                                    <li>Insurance type</li>}
                                    {props.values.insurance === choices.OTHER &&
                                    <li>Other insurance</li>}
                                    <li>Sell assets</li>
                                    <li>Notes</li>
                                </ul>
                                <div className="column">

                                    {/*attend_school*/}
                                    <select className="regular-input input" name="attend_school"
                                            onChange={(e) => resetValue("attend_school", e.target.value, "education", choices.YES)}>
                                        <YesNoDontknowDeclin state={true}/>
                                    </select>

                                    {/*education*/}
                                    {props.values.attend_school === choices.YES &&
                                    <select className="regular-input input" name="education"
                                            onChange={(e) => props.setFieldValue("education", parseInt(e.target.value))}>
                                        <Select list={education}/>
                                        <option value={choices.IDN}>I DON`T KNOW</option>
                                        <option value={choices.DECLINES_TO_ANSWER}>DECLINE TO ANSWER</option>
                                    </select>}

                                    {/*money_control*/}
                                    <select className="regular-input input" name="money_control"
                                            onChange={(e) => props.setFieldValue("money_control", parseInt(e.target.value))}>
                                        <Select list={decision_maker}/>
                                        <option value={choices.SMB}>SOMEONE ELSE</option>
                                        <option value={choices.IDN}>I DON`T KNOW</option>
                                        <option value={choices.DECLINES_TO_ANSWER}>DECLINE TO ANSWER</option>
                                    </select>

                                    {/*total_house*/}
                                    <Field className="regular-input input"
                                           type="number"
                                           name="total_house"
                                    />

                                    {/*marital_status*/}
                                    <select className="regular-input input" name="marital_status"
                                            onChange={(e) => resetValue("marital_status", e.target.value, "marital_status_other", choices.OTHER)}>
                                        <Select list={marital_status}/>
                                        <option value={choices.OTHER}>OTHER</option>
                                        <option value={choices.DECLINES_TO_ANSWER}>DECLINE TO ANSWER</option>
                                    </select>

                                    {/*marital_status_other*/}
                                    {props.values.marital_status === choices.OTHER &&
                                    <Field className="regular-input input"
                                           type="text"
                                           name="marital_status_other"
                                    />}

                                    {/*spouse_school*/}
                                    <select className="regular-input input" name="spouse_school"
                                            onChange={(e) => resetValue("spouse_school", e.target.value, "spouse_education", choices.YES)}>
                                        <YesNoDontknowDeclin state={true}/>
                                    </select>

                                    {/*spouse_education*/}
                                    {props.values.spouse_school === choices.YES &&
                                    <select className="regular-input input" name="spouse_education"
                                            onChange={(e) => props.setFieldValue("spouse_education", parseInt(e.target.value))}>
                                        <Select list={education}/>
                                        <option value={choices.IDN}>I DON`T KNOW</option>
                                        <option value={choices.DECLINES_TO_ANSWER}>DECLINE TO ANSWER</option>
                                    </select>}

                                    {/*polygamy*/}
                                    <select className="regular-input input" name="polygamy"
                                            onChange={(e) => resetValue("polygamy", e.target.value, "no_wives", choices.YES)}>
                                        <YesNoDontknowDeclin state={true}/>
                                    </select>

                                    {/*no_wives*/}
                                    {props.values.polygamy === choices.YES &&
                                    <select className="regular-input input" name="no_wives"
                                            onChange={(e) => resetValue("no_wives", e.target.value, "no_wives_other", choices.OTHER)}>
                                        <Select list={wives_number}/>
                                        <option value={choices.OTHER}>OTHER</option>
                                        <option value={choices.DECLINES_TO_ANSWER}>DECLINE TO ANSWER</option>
                                    </select>}

                                    {/*no_wives_other*/}
                                    {props.values.no_wives === choices.OTHER &&
                                    <Field className="regular-input input"
                                           type="text"
                                           name="no_wives_other"
                                    />}

                                    {/*wife_order*/}
                                    <select className="regular-input input" name="wife_order"
                                            onChange={(e) => resetValue("wife_order", e.target.value, "wife_order_other", choices.OTHER)}>
                                        <Select list={wife_rank}/>
                                        <option value={choices.OTHER}>OTHER</option>
                                        <option value={choices.IDN}>DON`T KNOW`</option>
                                        <option value={choices.DECLINES_TO_ANSWER}>DECLINE TO ANSWER</option>
                                    </select>

                                    {/*wife_order_other*/}
                                    {props.values.no_wives === choices.OTHER &&
                                    <Field className="regular-input input"
                                           type="text"
                                           name="wife_order_other"
                                    />}

                                    {/*FINANCE AND INSURANCE*/}
                                    {/*insurance*/}
                                    <select className="regular-input input" name="insurance"
                                            onChange={(e) => resetValue("insurance", e.target.value, "insurance_type", choices.YES)}>
                                        <YesNoDontknowDeclin state={true}/>
                                    </select>

                                    {/*insurance_type*/}
                                    {props.values.insurance === choices.YES &&
                                    <select className="regular-input input" name="insurance_type"
                                            onChange={(e) => resetValue("insurance_type", e.target.value, "insurance_type_other", choices.OTHER)}>
                                        <Select list={wife_rank}/>
                                        <option value={choices.OTHER}>OTHER</option>
                                        <option value={choices.IDN}>DON`T KNOW`</option>
                                        <option value={choices.DECLINES_TO_ANSWER}>DECLINE TO ANSWER</option>
                                    </select>}

                                    {/*insurance_type_other*/}
                                    {props.values.insurance === choices.OTHER &&
                                    <Field className="regular-input input"
                                           type="text"
                                           name="insurance_type_other"
                                    />}

                                    {/*insurance_CBO - ASK WHAT IT IS*/}
                                    {/*insurance_private -ASK WHAT IT IS*/}
                                    {/*insurance_other -ASK WHAT IT IS*/}

                                    {/*sell_asset*/}
                                    <select className="regular-input input" name="sell_asset"
                                            onChange={(e) => props.setFieldValue("sell_asset", parseInt(e.target.value))}>
                                        <YesNoDontknowDeclin state={true}/>
                                    </select>

                                    {/*Conclusions*/}

                                    {/*notes*/}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="notes"
                                    />

                                </div>
                            </div>

                            {/*Pregnancy_History -ready*/}
                            <div className="label-value inline">
                                <ul>
                                    <span className="column-title form-title">PREGNANCY HISTORY</span>
                                    <li>Number Of Pregnancies</li>
                                    <li>Number Of Birth</li>
                                    <li>Living Children</li>
                                    {(typeof props.values.no_children === 'number' && props.values.no_children > 0) &&
                                    <li>Children Under Five</li>}
                                    <li>Infant Death</li>
                                    {props.values.hx_childdeath === choices.YES &&
                                    <li>Number of deaths</li>}
                                </ul>
                                <div className="column">
                                    {/*PH_note - ASK WHAT IT IS*/}

                                    {/*no_pg*/}
                                    <Field className="regular-input input"
                                           type="number"
                                           name="no_pg"

                                    />
                                    {props.touched.no_pg && props.errors.no_pg && (
                                        <p className="error-message">{props.errors.no_pg}</p>
                                    )}

                                    {/*no_birth*/}
                                    <Field className="regular-input input"
                                           type="number"
                                           name="no_birth"

                                    />
                                    {props.touched.no_birth && props.errors.no_birth && (
                                        <p className="error-message">{props.errors.no_birth}</p>
                                    )}

                                    {/*no_children*/}
                                    <Field className="regular-input input"
                                           type="number"
                                           name="no_children"
                                           onClick={(e) => {
                                               if (e.target.value === '0') props.setFieldValue("no_under5", 0)
                                           }}
                                    />
                                    {props.touched.no_children && props.errors.no_children && (
                                        <p className="error-message">{props.errors.no_children}</p>
                                    )}

                                    {/*no_under5*/}
                                    {(typeof props.values.no_children === 'number' && props.values.no_children > 0) &&
                                    <Field className="regular-input input"
                                           type="number"
                                           name="no_under5"
                                    />}

                                    {/*hx_childdeath*/}
                                    <select className="regular-input input" name="hx_childdeath"
                                            onChange={(e) => {
                                                props.setFieldValue("hx_childdeath", parseInt(e.target.value));
                                                props.setFieldValue("no_childdeath", 0)
                                            }}>
                                        <YesNoDontknowDeclin state={true}/>
                                    </select>

                                    {/*no_childdeath*/}
                                    {props.values.hx_childdeath === choices.YES &&
                                    <Field className="regular-input input"
                                           type="number"
                                           name="no_childdeath"
                                    />
                                    }

                                </div>
                            </div>

                        </div>

                    </Form>
                </StyledMotherForm>
            </FormItems>
        </>
    );
}


const FormikEditMother = withFormik({
    mapPropsToValues(
        {
            /*identification*/
            survey_day,
            interviewer,
            interviewer_other,

            /*introduction*/
            current_pg,
            due_now,
            deliver_elsewhere,
            hx_cesarean,
            hx_complication,
            current_multip,

            /*registration*/
            name,
            edd,
            age,
            village,
            village_other,
            own_phone,
            other_phone,
            phone_number,
            carrier,
            owner_phone,
            owner_phone_other,
            carrier_other,
            want_education,

            /*complications*/
            complications_note,
            anemia,
            malaria,
            obstructed_labor,
            malpresent,
            aph,
            pph,
            ret_placenta,
            placenta_previa,
            hx_stillbirth,
            no_stillbirths,
            other_complication,
            complication_specify,

            /*Birth_Preparedness*/
            BP_note,
            no_anc,
            deliver_place,
            deliver_place_other,
            deliver_specific,
            plan_transport,
            plan_transport_other,

            purchase_supplies,
            /*name_supplies - is added in handle submit*/
            supplies_other,
            mama_kit,
            mackintosh,
            razor,
            pad,
            cotton,
            soap,
            gloves,
            medication,
            baby_clothes,
            blanket,
            sheets,
            other_supply,
            saving_money,
            amt_saved,
            amt_saved_range,

            /*Pregnancy_History*/
            PH_note,
            no_pg,
            no_birth,
            no_children,
            no_under5,
            hx_childdeath,
            no_childdeath,

            /*Demographics*/
            attend_school,
            education,
            money_control,
            total_house,
            marital_status,
            marital_status_other,
            spouse_school,
            spouse_education,
            polygamy,
            no_wives,
            no_wives_other,
            wife_order,
            wife_order_other,
            insurance,
            insurance_type,
            insurance_type_other,
            insurance_CBO,
            insurance_private,
            insurance_other,
            sell_asset,

            /*Conclusions*/
            notes,

        }) {
        return {
            /*identification*/
            survey_day: survey_day || '',
            interviewer: interviewer || '',
            interviewer_other: interviewer_other || '',

            /*introduction*/
            current_pg: current_pg || '',
            due_now: due_now || '',
            deliver_elsewhere: deliver_elsewhere || '',
            hx_cesarean: hx_cesarean || '',
            hx_complication: hx_complication || '',
            current_multip: current_multip || '',

            /*registration*/
            name: name || '',
            edd: edd || '',
            age: age || '',
            village: village || '',
            village_other: village_other || '',
            own_phone: own_phone || '',
            other_phone: other_phone || '',
            phone_number: phone_number || '',
            carrier: carrier || '',
            owner_phone: owner_phone || '',
            owner_phone_other: owner_phone_other || '',
            carrier_other: carrier_other || '',
            want_education: want_education || '',

            /*complications*/
            complications_note: complications_note || '',
            anemia: anemia || '',
            malaria: malaria || '',
            obstructed_labor: obstructed_labor || '',
            malpresent: malpresent || '',
            aph: aph || '',
            pph: pph || '',
            ret_placenta: ret_placenta || '',
            placenta_previa: placenta_previa || '',
            hx_stillbirth: hx_stillbirth || '',
            no_stillbirths: no_stillbirths || '',
            other_complication: other_complication || '',
            complication_specify: complication_specify || '',

            /*Birth_Preparedness*/
            BP_note: BP_note || '',
            no_anc: no_anc || '',
            deliver_place: deliver_place || '',
            deliver_place_other: deliver_place_other || '',
            deliver_specific: deliver_specific || '',
            plan_transport: plan_transport || '',
            plan_transport_other: plan_transport_other || '',

            purchase_supplies: purchase_supplies || '',
            /*name_supplies - is added in handle submit*/
            supplies_other: supplies_other || '',
            mama_kit: mama_kit || '',
            mackintosh: mackintosh || '',
            razor: razor || '',
            pad: pad || '',
            cotton: cotton || '',
            soap: soap || '',
            gloves: gloves || '',
            medication: medication || '',
            baby_clothes: baby_clothes || '',
            blanket: blanket || '',
            sheets: sheets || '',
            other_supply: other_supply || '',
            saving_money: saving_money || '',
            amt_saved: amt_saved || '',
            amt_saved_range: amt_saved_range || '',

            /*Pregnancy_History*/
            PH_note: PH_note || '',
            no_pg: no_pg || '',
            no_birth: no_birth || '',
            no_children: no_children || '',
            no_under5: no_under5 || '',
            hx_childdeath: hx_childdeath || '',
            no_childdeath: no_childdeath || '',

            /*Demographics*/
            attend_school: attend_school || '',
            education: education || '',
            money_control: money_control || '',
            total_house: total_house || '',
            marital_status: marital_status || '',
            marital_status_other: marital_status_other || '',
            spouse_school: spouse_school || '',
            spouse_education: spouse_education || '',
            polygamy: polygamy || '',
            no_wives: no_wives || '',
            no_wives_other: no_wives_other || '',
            wife_order: wife_order || '',
            wife_order_other: wife_order_other || '',
            insurance: insurance || '',
            insurance_type: insurance_type || '',
            insurance_type_other: insurance_type_other || '',
            insurance_CBO: insurance_CBO || '',
            insurance_private: insurance_private || '',
            insurance_other: insurance_other || '',
            sell_asset: sell_asset || '',

            /*Conclusions*/
            notes: notes || '',
        };
    },

    validationSchema: Yup.object().shape({
        interviewer: Yup.number().required("Please choose something from the list"),
        interviewer_other: Yup.string().required("Please fill the field"),
        current_pg: Yup.number().required("Please choose something from the list"),
        due_now: Yup.number().required("Please choose something from the list"),
        deliver_elsewhere: Yup.number().required("Please choose something from the list"),
        hx_cesarean: Yup.number().required("Please choose something from the list"),
        hx_complication: Yup.number().required("Please choose something from the list"),
        current_multip: Yup.number().required("Please choose something from the list"),
        /*registration*/
        name: Yup.string().required("Please fill the field"),
        edd: Yup.string().required("Please fill the field"),
        age: Yup.string().required("Please fill the field"),
        village: Yup.number().required("Please choose something from the list"),
        village_other: Yup.string().required("Please fill the field"),
        own_phone: Yup.number().required("Please choose something from the list"),
        other_phone: Yup.string().required("Please fill the field"),
        phone_number: Yup.string().required("Please fill the field"),
        carrier: Yup.number().required("Please choose something from the list"),
        owner_phone: Yup.number().required("Please choose something from the list"),
        owner_phone_other: Yup.string().required("Please fill the field"),
        carrier_other: Yup.string().required("Please fill the field"),
        want_education: Yup.number().required("Please choose something from the list"),
    }),

    handleSubmit(values, {props}) {
        let chosen_supplies = supplies_items.filter(item => typeof values[item] === 'number').map(item => values[item]);
        if (typeof values.other_supply === 'number') chosen_supplies = [...chosen_supplies, values.other_supply];
        values.name_supplies = chosen_supplies.join(" ");
        let mother = {};
        for (let property  in values) {
            console.log("key name ", property, "property = ", values[property], " ;", " type = ", typeof values[property]);
            if (typeof values[property] === 'string' && values[property].length > 0) mother[property] = values[property];
            if (typeof values[property] === 'number') mother[property] = values[property];
        }
        props.addMothers(mother);
        console.log("MOTHER ", mother);
        console.log("values ", values);
    }
})(MotherForm);


export default connect(null, {addMothers})(FormikEditMother);

