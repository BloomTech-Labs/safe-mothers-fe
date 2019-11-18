import React, {useState, useEffect} from 'react';
import {Form, Field, withFormik} from 'formik/dist/index';
import * as Yup from "yup";
import {FormItems} from "../../reusableParts/form-items";
import styled from 'styled-components';
import YesNoDontknowDeclin, {choices} from "./YesNoDontknowDeclin";
import Select from "./Select";
import {
    carriers,
    number_anc,
    phone_owner,
    place_deliver,
    transport_type,
    villages,
    supplies_items,
    education, decision_maker, marital_status, wives_number, wife_rank, notes, insurance
} from "./lists";
import PregnancyComplication from "./PregnancyComplication";
import PriorComplication from "./PriorComplication";
import Interviewers, {interviewers} from "./Interviewers";
import {connect} from "react-redux";
import {addMother, getMother, updateMother} from "../../../actions/mothersActions";
import Tooltip from "../../reusableParts/Tooltip";
import Banner from "../../reusableParts/banner/Banner";

const StyledMotherForm = styled.div`
    width: 100%;
    li{
        padding-bottom:49px;
    }    
    ul{
      position: relative;
      @media(max-width: 1024px){
          padding: 0;
          li{
            padding-bottom: 40px;
            white-space: nowrap;
            padding-top: 10px;
          }
      }
      @media(max-width: 1400px){
          padding: 0;
          li{
            padding-bottom: 40px;
            white-space: nowrap;
            padding-top: 9px;
          }
      }
    }
    
    .form-title{
        text-transform: uppercase;
        margin-bottom: 10px;
        font-weight: bold;
        display: inline;
        min-width: 200px;
        text-align: center;
        @media (max-width: 1024px) {
           text-align: center;
           background: #f2f8ff;
           width: 100%;
           margin: auto;
           height: 30px;
           padding-top: 6px;
        }
    }
    
    .position-form{
      margin-top: 60px;
      background: white;
      border: 1.5px solid #EEEEEF;
      padding-top: 0;
    }
    
    .inline{
        margin-bottom: 30px;
        padding-top: 24px; 
    }
    
    .row{
      @media(max-width: 1024px){
            display: flex;
            flex-direction: column;
            width: 100%;
        }
    }
  
    .column{
        padding: 1%;
        width: 60%;
    }
 
    .inline-label{
        display: flex;
        align-items: center;
    }
    
    .label-value{
        text-align: left;
        width: 50%;
        display: flex;
        flex-direction: column;
         @media(max-width: 1024px){
            width: 90%;
            margin: auto;
        }
    }
      
     label{
        display: flex;
        position: relative;
    }
`;

function MotherForm(props) {
    const [amtSaved, setAmtSaved] = useState(false);
    const ERROR_REQUIRED = "Required";
    useEffect(() => {
        const id = props.match.params.id;
        if (id) {
            const filtered_mother = props.mothers.filter(mother => `${mother.id}` === id);
            const signle_mother = filtered_mother[0];
            let mother = {};
            for (let property  in signle_mother) {
                if (typeof signle_mother[property] === 'string' && signle_mother[property].length > 0) mother[property] = signle_mother[property];
                if (typeof signle_mother[property] === 'number') mother[property] = signle_mother[property];
            }
            props.setValues(mother);
        } else {
            props.resetForm();
        }
    }, []);

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

                        {/*NAVBAR*/}
                        <Banner back={props.match.params.id ? `/mothers/${props.match.params.id}` : '/mothers'} person={props.values.name} state={true} {...props} />

                        {/*first line*/}
                        <div className="inline row">

                            {/*introduction - ready*/}
                            <div className="label-value">
                                <span className="column-title form-title">Introduction</span>
                                <div className="inline">
                                    <ul>
                                        <li>* Interviewer</li>
                                        {props.values.interviewer === interviewers.Other &&
                                        <li>* Specify interviewer</li>}
                                        <li>* Pregnant</li>
                                        <li>* Due within 30 days</li>
                                        <li>* Deliver in Iganga Hospital</li>
                                        <li>* Cesarean section</li>
                                        <li>* Complications during delivery</li>
                                        <li>* Twins pregnancy</li>
                                    </ul>
                                    <div className="column">
                                        {/*interviewer*/}
                                        <label className="error-holder">
                                            <Field component="select" className="regular-input input" name="interviewer"
                                                   onChange={(e) => resetValue("interviewer", e.target.value, "interviewer_other", interviewers.Other)}>
                                                <Interviewers/>
                                            </Field>
                                            <Tooltip tip="Who conducted this interview?"/>
                                            {props.touched.interviewer && props.errors.interviewer && (
                                                <p className="errormessage">{ERROR_REQUIRED}</p>
                                            )}
                                        </label>

                                        {/*interviewer_other*/}
                                        {props.values.interviewer === interviewers.Other &&
                                        <label className="error-holder">
                                            <Field className="regular-input" type="text" name="interviewer_other"/>
                                            {props.touched.interviewer_other && props.errors.interviewer_other && (
                                                <p className="errormessage">{ERROR_REQUIRED}</p>
                                            )}
                                        </label>
                                        }

                                        {/*current_pg*/}
                                        <label className="error-holder">
                                            <Field component="select" className="regular-input" name="current_pg"
                                                   onChange={(e) => props.setFieldValue("current_pg", parseInt(e.target.value))}>
                                                <YesNoDontknowDeclin state={false}/>
                                            </Field>
                                            <Tooltip tip={notes.pregnancy}/>
                                            {props.touched.current_pg && props.errors.current_pg && (
                                                <p className="errormessage">{ERROR_REQUIRED}</p>
                                            )}
                                        </label>

                                        {/*due_now*/}
                                        <label className="error-holder">
                                            <Field component="select" className="regular-input" name="due_now"
                                                   onChange={(e) => props.setFieldValue("due_now", parseInt(e.target.value))}>
                                                <YesNoDontknowDeclin state={true}/>
                                            </Field>
                                            <Tooltip tip={notes.due_date}/>
                                            {props.touched.due_now && props.errors.due_now && (
                                                <p className="errormessage">{ERROR_REQUIRED}</p>
                                            )}
                                        </label>

                                        {/*deliver_elsewhere*/}
                                        <label className="error-holder">
                                            <Field component="select" className="regular-input"
                                                   name="deliver_elsewhere"
                                                   onChange={(e) => props.setFieldValue("deliver_elsewhere", parseInt(e.target.value))}>
                                                <YesNoDontknowDeclin state={true}/>
                                            </Field>
                                            <Tooltip tip={notes.deliver_elsewhere}/>
                                            {props.touched.deliver_elsewhere && props.errors.deliver_elsewhere && (
                                                <p className="errormessage">{ERROR_REQUIRED}</p>
                                            )}
                                        </label>

                                        {/*hx_cesarean*/}
                                        <label className="error-holder">
                                            <Field component="select" className="regular-input" name="hx_cesarean"
                                                   onChange={(e) => props.setFieldValue("hx_cesarean", parseInt(e.target.value))}>
                                                <YesNoDontknowDeclin state={true}/>
                                            </Field>
                                            <Tooltip tip={notes.hx_cesarean}/>
                                            {props.touched.hx_cesarean && props.errors.hx_cesarean && (
                                                <p className="errormessage">{ERROR_REQUIRED}</p>
                                            )}
                                        </label>

                                        {/*hx_complication*/}
                                        <label className="error-holder">
                                            <Field component="select" className="regular-input" name="hx_complication"
                                                   onChange={(e) => props.setFieldValue("hx_complication", parseInt(e.target.value))}>
                                                <YesNoDontknowDeclin state={true}/>
                                            </Field>
                                            <Tooltip tip={notes.hx_complication}/>
                                            {props.touched.hx_complication && props.errors.hx_complication && (
                                                <p className="errormessage">{ERROR_REQUIRED}</p>
                                            )}
                                        </label>

                                        {/*current_multip*/}
                                        <label className="error-holder">
                                            <Field component="select" className="regular-input" name="current_multip"
                                                   onChange={(e) => props.setFieldValue("current_multip", parseInt(e.target.value))}>
                                                <YesNoDontknowDeclin state={true}/>
                                            </Field>
                                            <Tooltip tip={notes.current_multip}/>
                                            {props.touched.current_multip && props.errors.current_multip && (
                                                <p className="errormessage">{ERROR_REQUIRED}</p>
                                            )}
                                        </label>

                                    </div>
                                </div>
                            </div>

                            {/*registration p1 -ready */}
                            <div className="label-value">
                                <span className="column-title form-title">Personal</span>
                                <div className="inline">
                                    <ul>
                                        <li>* Name</li>
                                        <li>* Expected due date</li>
                                        <li>* Age</li>
                                        <li>* Village</li>
                                        {props.values.village === choices.OTHER &&
                                        <li>* Name of the village</li>
                                        }
                                    </ul>
                                    <div className="column">

                                        {/*name*/}
                                        <label className="error-holder">
                                            <Field className="regular-input" type="text" name="name"/>
                                            {props.touched.name && props.errors.name && (
                                                <p className="errormessage">{ERROR_REQUIRED}</p>
                                            )}
                                        </label>

                                        {/*edd*/}
                                        <label className="error-holder">
                                            <Field className={"regular-input " + ((props.touched.edd && props.errors.edd ) ? "date":"")} type="date" name="edd"/>
                                        </label>

                                        {/*age*/}
                                        <label className="error-holder">
                                            <Field className="regular-input" type="number" name="age"/>
                                            {props.touched.age && props.errors.age && (
                                                <p className="errormessage">{ERROR_REQUIRED}</p>
                                            )}
                                        </label>

                                        {/*village*/}
                                        <label className="error-holder">
                                            <Field component="select" className="regular-input" name="village"
                                                   onChange={(e) => resetValue("village", e.target.value, "village_other", choices.OTHER)}>
                                                <Select list={villages}/>
                                                <option value="97">Other</option>
                                            </Field>
                                            {props.touched.village && props.errors.village && (
                                                <p className="errormessage">{ERROR_REQUIRED}</p>
                                            )}
                                        </label>

                                        {/*village_other*/}
                                        {props.values.village === choices.OTHER &&
                                        <label className="error-holder">
                                            <Field className="regular-input" type="text" name="village_other"/>
                                            {props.touched.village_other && props.errors.village_other && (
                                                <p className="errormessage">{ERROR_REQUIRED}</p>
                                            )}
                                        </label>}

                                    </div>
                                </div>
                            </div>

                            {/*registration p2 -ready*/}
                            <div className="label-value">
                                <div className="inline">
                                    <ul>
                                        <li>* Own phone</li>
                                        <li>* Other phone</li>
                                        <li>* Phone number</li>
                                        <li>* Carrier</li>
                                        {props.values.carrier === choices.OTHER &&
                                        <li>* Name of the carrier</li>
                                        }
                                        <li>* Phone owner</li>
                                        {props.values.owner_phone === choices.OTHER &&
                                        <li>* Name of the phone owner</li>}
                                        <li>* Want education</li>
                                    </ul>
                                    <div className="column">
                                        {/*own_phone*/}
                                        <label className="error-holder">
                                            <Field component="select" className="regular-input" name="own_phone"
                                                   onChange={(e) => props.setFieldValue("own_phone", parseInt(e.target.value))}>
                                                <YesNoDontknowDeclin state={false}/>
                                            </Field>
                                            {props.touched.own_phone && props.errors.own_phone && (
                                                <p className="errormessage">{ERROR_REQUIRED}</p>
                                            )}
                                        </label>

                                        {/*other_phone*/}
                                        <label className="error-holder">
                                            <Field component="select" className="regular-input" name="other_phone"
                                                   onChange={(e) => props.setFieldValue("other_phone", parseInt(e.target.value))}>
                                                <YesNoDontknowDeclin state={false}/>
                                            </Field>
                                            {props.touched.other_phone && props.errors.other_phone && (
                                                <p className="errormessage">{ERROR_REQUIRED}</p>
                                            )}
                                        </label>

                                        {/*phone_number*/}
                                        <label className="error-holder">
                                            <Field className="regular-input" type="text" name="phone_number"/>
                                            {props.touched.phone_number && props.errors.phone_number && (
                                                <p className="errormessage">{ERROR_REQUIRED}</p>
                                            )}
                                        </label>

                                        {/*carrier*/}
                                        <label className="error-holder">
                                            <Field component="select" className="regular-input" name="carrier"
                                                   onChange={(e) => resetValue("carrier", e.target.value, "carrier_other", choices.OTHER)}>
                                                <Select list={carriers}/>
                                                <option value={choices.OTHER}>Other</option>
                                                <option value={choices.IDN}>Don`t know</option>
                                                <option value={choices.DECLINES_TO_ANSWER}>Decline to answer</option>
                                            </Field>
                                            {props.touched.carrier && props.errors.carrier && (
                                                <p className="errormessage">{ERROR_REQUIRED}</p>
                                            )}
                                        </label>

                                        {/*carrier_other*/}
                                        {props.values.carrier === choices.OTHER &&
                                        <label className="error-holder">
                                            <Field className="regular-input" type="text" name="carrier_other"/>
                                            {props.touched.carrier_other && props.errors.carrier_other && (
                                                <p className="errormessage">{ERROR_REQUIRED}</p>
                                            )}
                                        </label>}

                                        {/*owner_phone*/}
                                        <label className="error-holder">
                                            <Field component="select" className="regular-input" name="owner_phone"
                                                   onChange={(e) => resetValue("owner_phone", e.target.value, "owner_phone_other", choices.OTHER)}>
                                                <Select list={phone_owner}/>
                                                <option value={choices.OTHER}>Other</option>
                                            </Field>
                                            {props.touched.owner_phone && props.errors.owner_phone && (
                                                <p className="errormessage">{ERROR_REQUIRED}</p>
                                            )}
                                        </label>
                                        {/*owner_phone_other*/}
                                        {props.values.owner_phone === choices.OTHER &&
                                        <label className="error-holder">
                                            <Field className="regular-input" type="text" name="owner_phone_other"/>
                                            {props.touched.owner_phone_other && props.errors.owner_phone_other && (
                                                <p className="errormessage">{ERROR_REQUIRED}</p>
                                            )}
                                        </label>
                                        }
                                        {/*want_education*/}
                                        <label className="error-holder">
                                            <Field component="select" className="regular-input" name="want_education"
                                                   onChange={(e) => props.setFieldValue("want_education", parseInt(e.target.value))}>
                                                <YesNoDontknowDeclin state={false}/>
                                            </Field>
                                            {props.touched.want_education && props.errors.want_education && (
                                                <p className="errormessage">{ERROR_REQUIRED}</p>
                                            )}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*second line*/}
                        <div className="inline row">

                            {/*complications - ready*/}
                            <div className="label-value">
                                <span className="column-title form-title">HIGH RISK</span>
                                <div className="inline">
                                    <ul>
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
                                        <li>Number of stillbirths</li>}
                                        <li>Other complications</li>
                                        {props.values.other_complication === choices.YES &&
                                        <li>Specify complications</li>
                                        }
                                    </ul>
                                    <div className="column">

                                        {/*complications_note*/}

                                        {/*anemia*/}
                                        <Field component="select" className="regular-input" name="anemia"
                                               onChange={(e) => props.setFieldValue("anemia", parseInt(e.target.value))}>
                                            <PregnancyComplication/>

                                        </Field>

                                        {/*malaria*/}
                                        <Field component="select" className="regular-input" name="malaria"
                                               onChange={(e) => props.setFieldValue("malaria", parseInt(e.target.value))}>
                                            <PregnancyComplication/>
                                        </Field>

                                        {/*obstructed_labor*/}
                                        <label>
                                            <Field component="select" className="regular-input"
                                                   name="obstructed_labor"
                                                   onChange={(e) => props.setFieldValue("obstructed_labor", parseInt(e.target.value))}>
                                                <PriorComplication name={"obstructed_labor"}/>
                                            </Field>
                                            <Tooltip tip={notes.obstructed_labor}/>
                                        </label>

                                        {/*malpresent*/}
                                        <label>
                                            <Field component="select" className="regular-input" name="malpresent"
                                                   onChange={(e) => props.setFieldValue("malpresent", parseInt(e.target.value))}>
                                                <PriorComplication  {...props} name={"malpresent"}/>
                                            </Field>
                                            <Tooltip tip={notes.malpresent}/>
                                        </label>

                                        {/*aph*/}
                                        <label>
                                            <Field component="select" className="regular-input" name="aph"
                                                   onChange={(e) => props.setFieldValue("aph", parseInt(e.target.value))}>
                                                <PregnancyComplication/>
                                            </Field>
                                            <Tooltip tip={notes.aph}/>
                                        </label>

                                        {/*pph*/}
                                        <label>
                                            <Field component="select" className="regular-input" name="pph"
                                                   onChange={(e) => props.setFieldValue("pph", parseInt(e.target.value))}>
                                                <PriorComplication/>
                                            </Field>
                                            <Tooltip tip={notes.pph}/>
                                        </label>

                                        {/*ret_placenta*/}
                                        <label>
                                            <Field component="select" className="regular-input" name="ret_placenta"
                                                   onChange={(e) => props.setFieldValue("ret_placenta", parseInt(e.target.value))}>
                                                <PriorComplication/>
                                            </Field>
                                            <Tooltip tip={notes.ret_placenta}/>
                                        </label>

                                        {/*placenta_previa*/}
                                        <label>
                                            <Field component="select" className="regular-input" name="placenta_previa"
                                                   onChange={(e) => props.setFieldValue("placenta_previa", parseInt(e.target.value))}>
                                                <PregnancyComplication/>
                                            </Field>
                                            <Tooltip tip={notes.placenta_previa}/>
                                        </label>

                                        {/*hx_stillbirth*/}
                                        <label>
                                            <Field component="select" className="regular-input" name="hx_stillbirth"
                                                   onChange={(e) => resetValue("hx_stillbirth", e.target.value, "no_stillbirths", choices.YES)}>
                                                <YesNoDontknowDeclin state={true}/>
                                            </Field>
                                            <Tooltip tip={notes.hx_stillbirth}/>
                                        </label>

                                        {/*no_stillbirths*/}
                                        {props.values.hx_stillbirth === choices.YES &&
                                        <label>
                                            <Field className="regular-input"
                                                   type="number"
                                                   name="no_stillbirths"
                                            />
                                            <Tooltip tip={notes.no_stillbirths}/>
                                        </label>
                                        }

                                        {/*other_complication*/}
                                        <label>
                                            <Field component="select" className="regular-input"
                                                   name="other_complication"
                                                   onChange={(e) => resetValue("other_complication", e.target.value, "complication_specify", choices.YES)}>
                                                <YesNoDontknowDeclin state={true}/>
                                            </Field>
                                            <Tooltip tip={notes.other_complication}/>
                                        </label>

                                        {/*complication_specify*/}
                                        {props.values.other_complication === choices.YES &&
                                        <Field className="regular-input"
                                               type="text"
                                               name="complication_specify"
                                        />}
                                    </div>
                                </div>
                            </div>

                            {/*Birth Preparedness - ready*/}
                            <div className="label-value">
                                <span className="column-title form-title">Birth Preparedness</span>
                                <div className="inline">
                                    <ul>
                                        <li>Antenatal Care Visits</li>
                                        <li>Location Of Delivery</li>
                                        {props.values.deliver_place === choices.OTHER &&
                                        <li>Specify location</li>}
                                        {(props.values.deliver_place === 1 ||
                                            props.values.deliver_place === 2 ||
                                            props.values.deliver_place === 3) &&
                                        <li>Specify location Of Delivery</li>}
                                        <li>Method Of Arriving</li>
                                        {props.values.plan_transport === choices.OTHER &&
                                        <li>Specify transport</li>}
                                        <li>Purchase supplies</li>
                                        <li>Money Saved</li>
                                        {props.values.saving_money === choices.YES &&
                                        <li>Saved amount</li>
                                        }
                                    </ul>
                                    <div className="column">

                                        {/*BP_note - ASK WHAT IT IS */}

                                        {/*no_anc*/}
                                        <label>
                                            <Field component="select" className="regular-input" name="no_anc"
                                                   onChange={(e) => props.setFieldValue("no_anc", parseInt(e.target.value))}>
                                                <Select list={number_anc}/>
                                                <option value={choices.NO}>ZERO VISITS (NO ANC)</option>
                                                <option value={choices.IDN}>DON'T KNOW</option>
                                                <option value={choices.DECLINES_TO_ANSWER}>DECLINES TO ANSWER</option>
                                            </Field>
                                            <Tooltip tip={notes.no_anc}/>
                                        </label>

                                        {/*deliver_place*/}
                                        <label>
                                            <Field component="select" className="regular-input" name="deliver_place"
                                                   onChange={(e) => resetValue("deliver_place", e.target.value, "deliver_place_other", choices.OTHER)}>
                                                <Select list={place_deliver}/>
                                                <option value={choices.IDN}>DON'T KNOW</option>
                                                <option value={choices.DECLINES_TO_ANSWER}>DECLINES TO ANSWER</option>
                                                <option value={choices.OTHER}>OTHER</option>
                                            </Field>
                                            <Tooltip tip={notes.deliver_place}/>
                                        </label>

                                        {/*deliver_place_other*/}
                                        {props.values.deliver_place === choices.OTHER &&
                                        <label>
                                            <Field className="regular-input"
                                                   type="text"
                                                   name="deliver_place_other"
                                            />
                                            <Tooltip tip={notes.deliver_place_other}/>
                                        </label>}

                                        {/*deliver_specific*/}
                                        {(props.values.deliver_place === 1 ||
                                            props.values.deliver_place === 2 ||
                                            props.values.deliver_place === 3) &&
                                        <label>
                                            <Field className="regular-input"
                                                   type="text"
                                                   name="deliver_specific"
                                            />
                                            <Tooltip tip={notes.deliver_specific}/>
                                        </label>}


                                        {/*plan_transport*/}
                                        <label>
                                            <Field component="select" className="regular-input" name="plan_transport"
                                                   onChange={(e) => resetValue("plan_transport", e.target.value, "plan_transport_other", choices.OTHER)}>
                                                <Select list={transport_type}/>
                                                <option value={choices.IDN}>DON'T KNOW</option>
                                                <option value={choices.DECLINES_TO_ANSWER}>DECLINES TO ANSWER</option>
                                                <option value={choices.OTHER}>OTHER</option>
                                            </Field>
                                            <Tooltip tip={notes.plan_transport}/>
                                        </label>

                                        {/*plan_transport_other*/}
                                        {props.values.plan_transport === choices.OTHER &&
                                        <Field className="regular-input"
                                               type="text"
                                               name="plan_transport_other"
                                        />}

                                        {/*purchase_supplies*/}
                                        <label>
                                            <Field component="select" className="regular-input"
                                                   name="purchase_supplies"
                                                   onChange={(e) => {
                                                       props.setFieldValue("purchase_supplies", parseInt(e.target.value));
                                                       if (e.target.value !== choices.YES) supplies_items.forEach(item => props.setFieldValue(item, ''))
                                                   }}>
                                                <option value=""></option>
                                                <option value={choices.YES}>YES</option>
                                                <option value={choices.NO}>NO</option>
                                                <option value={choices.IDN}>I DON`T KNOW</option>
                                                <option value={choices.DECLINES_TO_ANSWER}>DECLINES TO ANSWER</option>
                                            </Field>
                                            <Tooltip tip={notes.purchase_supplies}/>
                                        </label>

                                        {/*saving_money*/}
                                        <label>
                                            <Field component="select" className="regular-input " name="saving_money"
                                                   onChange={(e) => resetValue("saving_money", e.target.value, "amt_saved", choices.YES)}>
                                                <YesNoDontknowDeclin/>
                                            </Field>
                                            <Tooltip tip={notes.saving_money}/>
                                        </label>

                                        {/*amt_saved*/}
                                        {props.values.saving_money === choices.YES &&
                                        <Field className="regular-input"
                                               type="number"
                                               name="amt_saved"
                                        />}

                                        {/*amt_saved_range -ASK WHAT IT IS*/}

                                    </div>
                                </div>
                            </div>

                            {/*Pop up with supplies*/}
                            {props.values.purchase_supplies === choices.YES &&
                            <div className="label-value">
                                <span className="column-title form-title">Supplies</span>
                                <div className="inline">
                                    <ul>
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
                                        {supplies_items.map((item, index) =>
                                            <Field key={index} component="select" className="regular-input"
                                                   name={item}
                                                   onClick={(e) => {
                                                       props.setFieldValue("name_supplies", props.values.name_supplies.concat(` ${index + 1}`));
                                                       if (e.target.value === choices.YES) {
                                                           props.setFieldValue(item, choices.YES);
                                                       }
                                                       if (e.target.value === choices.NO) {
                                                           props.setFieldValue(item, choices.NO);
                                                       }
                                                   }}>
                                                <YesNoDontknowDeclin state={false}/>
                                            </Field>
                                        )}

                                        {/*OTHER = 97*/}
                                        <Field className="regular-input"
                                               onClick={(e) => {
                                                   props.setFieldValue("name_supplies", props.values.name_supplies.concat(' 97'));
                                                   if (e.target.value === choices.YES) {
                                                       props.setFieldValue("supplies_other", choices.YES);
                                                   }
                                                   if (e.target.value === choices.NO) {
                                                       props.setFieldValue("supplies_other", choices.NO);
                                                   }
                                               }}
                                               type="text"
                                               name="supplies_other"
                                        />
                                    </div>
                                </div>
                            </div>}
                        </div>

                        {/*third line*/}

                        <div className="inline row">

                            {/*Demographics*/}
                            <div className="label-value">
                                <span className="column-title form-title">Demographics</span>
                                <div className="inline">
                                    <ul>
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
                                        {props.values.insurance !== choices.YES &&
                                        <li>Specify insurance</li>}
                                        {props.values.insurance === choices.YES &&
                                        <>
                                            <li>Community-based insurance</li>
                                            <li>Private commercial insurance</li>
                                            <li>Insurance other</li>
                                        </>
                                        }
                                        {props.values.insurance_other === choices.YES &&
                                        <li>Specify insurance</li>
                                        }
                                        <li>Sell assets</li>
                                        <li>Notes</li>
                                    </ul>
                                    <div className="column">

                                        {/*attend_school*/}
                                        <label>
                                            <Field component="select" className="regular-input" name="attend_school"
                                                   onChange={(e) => resetValue("attend_school", e.target.value, "education", choices.YES)}>
                                                <YesNoDontknowDeclin state={true}/>
                                            </Field>
                                            <Tooltip tip={notes.attend_school}/>
                                        </label>

                                        {/*education*/}
                                        {props.values.attend_school === choices.YES &&
                                        <label>
                                            <Field component="select" className="regular-input" name="education"
                                                   onChange={(e) => props.setFieldValue("education", parseInt(e.target.value))}>
                                                <Select list={education}/>
                                                <option value={choices.IDN}>I DON`T KNOW</option>
                                                <option value={choices.DECLINES_TO_ANSWER}>DECLINE TO ANSWER</option>
                                            </Field>
                                            <Tooltip tip={notes.education}/>
                                        </label>}

                                        {/*money_control*/}
                                        <label>
                                            <Field component="select" className="regular-input" name="money_control"
                                                   onChange={(e) => props.setFieldValue("money_control", parseInt(e.target.value))}>
                                                <Select list={decision_maker}/>
                                                <option value={choices.SMB}>SOMEONE ELSE</option>
                                                <option value={choices.IDN}>I DON`T KNOW</option>
                                                <option value={choices.DECLINES_TO_ANSWER}>DECLINE TO ANSWER</option>
                                            </Field>
                                            <Tooltip tip={notes.money_control}/>
                                        </label>

                                        {/*total_house*/}
                                        <label>
                                            <Field className="regular-input"
                                                   type="number"
                                                   name="total_house"
                                            />
                                            <Tooltip tip={notes.total_house}/>
                                        </label>

                                        {/*marital_status*/}
                                        <label>
                                            <Field component="select" className="regular-input" name="marital_status"
                                                   onChange={(e) => resetValue("marital_status", e.target.value, "marital_status_other", choices.OTHER)}>
                                                <Select list={marital_status}/>
                                                <option value={choices.OTHER}>OTHER</option>
                                                <option value={choices.DECLINES_TO_ANSWER}>DECLINE TO ANSWER</option>
                                            </Field>
                                            <Tooltip tip={notes.marital_status}/>
                                        </label>

                                        {/*marital_status_other*/}
                                        {props.values.marital_status === choices.OTHER &&
                                        <Field className="regular-input"
                                               type="text"
                                               name="marital_status_other"
                                        />}

                                        {/*spouse_school*/}
                                        <label>
                                            <Field component="select" className="regular-input" name="spouse_school"
                                                   onChange={(e) => resetValue("spouse_school", e.target.value, "spouse_education", choices.YES)}>
                                                <YesNoDontknowDeclin state={true}/>
                                            </Field>
                                            <Tooltip tip={notes.spouse_school}/>
                                        </label>

                                        {/*spouse_education*/}
                                        {props.values.spouse_school === choices.YES &&
                                        <label>
                                            <Field component="select" className="regular-input"
                                                   name="spouse_education"
                                                   onChange={(e) => props.setFieldValue("spouse_education", parseInt(e.target.value))}>
                                                <Select list={education}/>
                                                <option value={choices.IDN}>I DON`T KNOW</option>
                                                <option value={choices.DECLINES_TO_ANSWER}>DECLINE TO ANSWER</option>
                                            </Field>
                                            <Tooltip tip={notes.spouse_education}/>
                                        </label>}

                                        {/*polygamy*/}
                                        <label>
                                            <Field component="select" className="regular-input" name="polygamy"
                                                   onChange={(e) => resetValue("polygamy", e.target.value, "no_wives", choices.YES)}>
                                                <YesNoDontknowDeclin state={true}/>
                                            </Field>
                                            <Tooltip tip={notes.polygamy}/>
                                        </label>

                                        {/*no_wives*/}
                                        {props.values.polygamy === choices.YES &&
                                        <label>
                                            <Field component="select" className="regular-input" name="no_wives"
                                                   onChange={(e) => resetValue("no_wives", e.target.value, "no_wives_other", choices.OTHER)}>
                                                <Select list={wives_number}/>
                                                <option value={choices.OTHER}>OTHER</option>
                                                <option value={choices.DECLINES_TO_ANSWER}>DECLINE TO ANSWER</option>
                                            </Field>
                                            <Tooltip tip={notes.no_wives}/>
                                        </label>}

                                        {/*no_wives_other*/}
                                        {props.values.no_wives === choices.OTHER &&
                                        <label>
                                            <Field className="regular-input"
                                                   type="text"
                                                   name="no_wives_other"
                                            />
                                            <Tooltip tip={notes.no_wives_other}/>
                                        </label>}

                                        {/*wife_order*/}
                                        <label>
                                            <Field component="select" className="regular-input" name="wife_order"
                                                   onChange={(e) => resetValue("wife_order", e.target.value, "wife_order_other", choices.OTHER)}>
                                                <Select list={wife_rank}/>
                                                <option value={choices.OTHER}>OTHER</option>
                                                <option value={choices.IDN}>DON`T KNOW`</option>
                                                <option value={choices.DECLINES_TO_ANSWER}>DECLINE TO ANSWER</option>
                                            </Field>
                                            <Tooltip tip={notes.wife_order}/>
                                        </label>

                                        {/*wife_order_other*/}
                                        {props.values.no_wives === choices.OTHER &&
                                        <label>
                                            <Field className="regular-input"
                                                   type="text"
                                                   name="wife_order_other"
                                            />
                                            <Tooltip tip={notes.wife_order_other}/>
                                        </label>}

                                        {/*FINANCE AND INSURANCE -WANTS FIX*/}
                                        {/*insurance*/}
                                        <label>
                                            <Field component="select" className="regular-input" name="insurance"
                                                   onChange={(e) => {
                                                       resetValue("insurance", e.target.value, "insurance_type_other", choices.YES);
                                                       if (e.target.value !== choices.YES) props.setFieldValue("insurance_CBO", '');
                                                       if (e.target.value !== choices.YES) props.setFieldValue("insurance_private", '');
                                                       if (e.target.value !== choices.YES) props.setFieldValue("insurance_other", '');
                                                   }}>
                                                <YesNoDontknowDeclin state={true}/>
                                            </Field>
                                            <Tooltip tip={notes.insurance}/>
                                        </label>

                                        {/*insurance_type_other*/}
                                        {props.values.insurance !== choices.YES &&
                                        <Field className="regular-input"
                                               type="text"
                                               name="insurance_type_other"
                                        />}

                                        {/*insurance_CBO, insurance_private, insurance_other*/}
                                        {props.values.insurance === choices.YES &&
                                        <>

                                            <Field component="select" className="regular-input"
                                                   name="insurance_CBO"
                                                   onChange={(e) => props.setFieldValue("insurance_CBO", e.target.value)}>
                                                <YesNoDontknowDeclin state={false}/>
                                            </Field>

                                            <Field component="select" className="regular-input"
                                                   name="insurance_private"
                                                   onChange={(e) => props.setFieldValue("insurance_private", e.target.value)}>
                                                <YesNoDontknowDeclin state={false}/>
                                            </Field>

                                            <Field component="select" className="regular-input"
                                                   name="insurance_other"
                                                   onChange={(e) => resetValue("insurance_other", e.target.value, "insurance_type_other", choices.NO)}>
                                                <YesNoDontknowDeclin state={false}/>
                                            </Field>
                                        </>
                                        }

                                        {/*insurance_type_other*/}
                                        {props.values.insurance_other === choices.YES &&
                                        <Field className="regular-input"
                                               type="text"
                                               name="insurance_type_other"
                                        />}

                                        {/*sell_asset*/}
                                        <Field component="select" className="regular-input" name="sell_asset"
                                               onChange={(e) => props.setFieldValue("sell_asset", parseInt(e.target.value))}>
                                            <YesNoDontknowDeclin state={true}/>
                                        </Field>
                                        {/*Conclusions*/}
                                        {/*notes*/}
                                        <Field className="regular-input"
                                               type="text"
                                               name="notes"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/*Pregnancy_History -ready*/}
                            <div className="label-value">
                                <span className="column-title form-title">PREGNANCY HISTORY</span>
                                <div className="inline">
                                    <ul>
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
                                        <label>
                                            <Field className="regular-input" type="number" name="no_pg"/>
                                            <Tooltip tip={notes.no_pg}/>
                                        </label>
                                        {props.touched.no_pg && props.errors.no_pg && (
                                            <p className="error-message">{props.errors.no_pg}</p>
                                        )}

                                        {/*no_birth*/}
                                        <label>
                                            <Field className="regular-input" type="number" name="no_birth"/>
                                            <Tooltip tip={notes.no_birth}/>
                                        </label>
                                        {props.touched.no_birth && props.errors.no_birth && (
                                            <p className="error-message">{props.errors.no_birth}</p>
                                        )}

                                        {/*no_children*/}
                                        <label>
                                            <Field className="regular-input"
                                                   type="number"
                                                   name="no_children"
                                                   onClick={(e) => {
                                                       if (e.target.value === '0') props.setFieldValue("no_under5", 0)
                                                   }}
                                            />
                                            <Tooltip tip={notes.no_children}/>
                                        </label>
                                        {props.touched.no_children && props.errors.no_children && (
                                            <p className="error-message">{props.errors.no_children}</p>
                                        )}

                                        {/*no_under5*/}
                                        {(typeof props.values.no_children === 'number' && props.values.no_children > 0) &&
                                        <label>
                                            <Field className="regular-input"
                                                   type="number"
                                                   name="no_under5"
                                            />
                                            <Tooltip tip={notes.no_under5}/>
                                        </label>}

                                        {/*hx_childdeath*/}
                                        <label>
                                            <Field component="select" className="regular-input" name="hx_childdeath"
                                                   onChange={(e) => {
                                                       props.setFieldValue("hx_childdeath", parseInt(e.target.value));
                                                       props.setFieldValue("no_childdeath", 0)
                                                   }}>
                                                <YesNoDontknowDeclin state={true}/>
                                            </Field>
                                            <Tooltip tip={notes.hx_childdeath}/>
                                        </label>

                                        {/*no_childdeath*/}
                                        {props.values.hx_childdeath === choices.YES &&
                                        <label>
                                            <Field className="regular-input"
                                                   type="number"
                                                   name="no_childdeath"
                                            />
                                            <Tooltip tip={notes.no_childdeath}/>
                                        </label>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </StyledMotherForm>
            </FormItems>
        </>
    );
}

const FormikMother = withFormik({
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
            name_supplies,
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
            name_supplies: name_supplies || '',
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
        interviewer: Yup.number().required("Please choose an option"),
        current_pg: Yup.number().required("Please choose yes or no"),
        due_now: Yup.number().required("Please choose an option"),
        deliver_elsewhere: Yup.number().required("Please choose a hospital"),
        hx_cesarean: Yup.number().required("Please choose an option"),
        hx_complication: Yup.number().required("Please choose an option"),
        current_multip: Yup.number().required("Please choose an option"),
        /*registration*/
        name: Yup.string().required("Please type a name"),
        //the below code gets in the way
        edd: Yup.string().required("Please choose a date"),
        age: Yup.string().required("Please choose an age"),
        village: Yup.number().required("Please choose a village"),
        own_phone: Yup.number().required("Please choose yes or no"),
        other_phone: Yup.string().required("Please choose yes or no"),
        phone_number: Yup.string().required("Please type in a phone number"),
        carrier: Yup.number().required("Please choose a Carrier"),
        owner_phone: Yup.number().required("Please choose an option"),
        want_education: Yup.number().required("Please choose yes or no"),
    }),
    handleSubmit(values, {props}) {
        let mother = {};
        for (let property  in values) {
            if (typeof values[property] === 'string' && values[property].length > 0) mother[property] = values[property];
            if (typeof values[property] === 'number') mother[property] = values[property];
        }
        if (mother.name_supplies) {
            const array_supplies = mother.name_supplies.split(' ');
            const suplies = array_supplies.filter((item, index) => array_supplies.indexOf(item) === index).join(' ');
            mother.name_supplies = suplies;
        }
        if (props.match.params.id) {
            props.updateMother(values.id, mother, props);
        } else {
            props.addMother(mother, props);
        }
    }
})(MotherForm);

const mapStateToProps = state => {
    return {
        mothers: state.mothersReducer.mothers,
    }
};
export default connect(mapStateToProps, {updateMother, addMother})(FormikMother);
