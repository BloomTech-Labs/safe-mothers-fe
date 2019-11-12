import React from 'react';
import {Form, Field, withFormik} from 'formik/dist/index';
import * as Yup from "yup";
import {Button, FormItems} from "../../reusableParts/form-items";
import styled from 'styled-components';
import {villages} from '../../mothers/form/lists';
import Select from "../../mothers/form/Select";
import {connect} from 'react-redux';
import { addDrivers } from "../../../actions/driversActions";
import Banner from "../../reusableParts/banner/Banner";
import YesNoDontknowDeclin, {choices} from "../../mothers/form/YesNoDontknowDeclin";
import District, {district} from "./District";
import {subcounty_code, district_code, stage_code} from "./List";

import Tooltip from "../../reusableParts/Tooltip";



function EditDriver(props) {
  const resetValue = (name, value, name2, value2) => {
    props.setFieldValue(name, parseInt(value));
    if (value !== value2) {
      props.setFieldValue(name2, "");
    }
  };

  return (
    <FormItems>
      <EditDriverForm>
        <Form className="form-contents edit-form">
          {/*NAVBAR*/}
          <Banner back={"/drivers"} person={props.values.name} state={true} />
          <div className="label-value inline">
            <ul>
              <span className="column-title edit-title">Create Driver</span>
              <li>Name</li>
              <li>District</li>
              {props.values.district === choices.OTHER && (
                <li>Specify District</li>
              )}
              <li>Subcounty</li>
              {props.values.subcounty === choices.OTHER && (
                <li>Specify Subcounty</li>
              )}
              <li>Stage</li>
              {props.values.stage === choices.OTHER && <li>Specify Parish</li>}
            </ul>
            <div className="column">
                {/*name*/}
                <label className="error-holder">
                    <Field className="regular-input" type="text" name="name"/>
                    {props.touched.name && props.errors.name && (
                        <p className="errormessage">{props.errors.name}</p>
                    )}
                </label>
                {/*district*/}
                <label className="error-holder">
                    <Field
                    component="select" className="regular-input" name="district"
                    onChange={e => resetValue("district", e.target.value, "district_other", choices.OTHER)}>
                    <Select list={district_code} />
                    <option value={choices.OTHER}>Other</option>
                    </Field>
                    {props.touched.district && props.errors.district && (
                    <p className="errormessage">{props.errors.district}</p>
                    )}
                </label>
                {/*district_other*/}
                {props.values.district === choices.OTHER && (
                    <label className="error-holder">
                    <Field className="regular-input" type="text" name="district_other" />
                    {props.touched.district_other && props.errors.district_other && (
                        <p className="errormessage">{props.errors.district_other}</p>
                    )}
                    </label>
                )}
                {/*subcounty*/}
                <label className="error-holder">
                    <Field component="select" className="regular-input" name="subcounty"
                    onChange={e => resetValue("subcounty", e.target.value, "subcounty_other", choices.OTHER)}>
                    <Select list={subcounty_code} />
                    <option value={choices.OTHER}>Other</option>
                    </Field>
                    {props.touched.subcounty && props.errors.subcounty && (
                    <p className="errormessage">{props.errors.subcounty}</p>
                    )}
                </label>
                {/*subcounty_other*/}
                {props.values.subcounty === choices.OTHER && (
                    <label className="error-holder">
                    <Field className="regular-input" type="text" name="subcounty_other" />
                    {props.touched.subcounty_other && props.errors.subcounty_other && (
                        <p className="errormessage">{props.errors.subcounty_other}</p>
                    )}
                    </label>
                )}
                {/*stage*/}
                <label className="error-holder">
                    <Field component="select" className="regular-input" name="stage"
                    onChange={e => resetValue("subcounty", e.target.value, "stage_other", choices.OTHER)}>
                    <Select list={stage_code} />
                    <option value={choices.OTHER}>Other</option>
                    </Field>
                    {props.touched.stage && props.errors.stage && (
                    <p className="errormessage">{props.errors.stage}</p>
                    )}
                </label>
                {/*stage_other*/}
                {props.values.stage === choices.OTHER && (
                    <label className="error-holder">
                    <Field className="regular-input" type="text" name="stage_other" />
                    {props.touched.stage_other && props.errors.stage_other && (
                        <p className="errormessage">{props.errors.stage_other}</p>
                    )}
                    </label>
                )}
            </div>
            <div className="btn-container">
              {/*<Button color="white" nu="blue" >Save</Button>*/}
              <button className="submit-btn" type="submit">
                CREATE
              </button>
            </div>
          </div>
        </Form>
      </EditDriverForm>
    </FormItems>
  );
}


const FormikEditDriver = withFormik({
    mapPropsToValues(
        {
            district,
            district_other,
            
        }) {
            return {
                
                district: district || '',
                district_other: district_other || '',
            };
        },
        
        validationSchema: Yup.object().shape({
          
            
        }),
        
        handleSubmit(values, {props}) {
            // props.addDrivers({
            //     district: values.district,
            //     district_other: values,
            //     village_id: parseInt(values.district_other),
            //     lat: values.lat,
            //     long: values.long
            // })
            console.log("values ", values);
        }
    })(EditDriver);
    
    export default connect(null,{addDrivers})(FormikEditDriver);
    
    const EditDriverForm = styled.div`
        width: 100%;
        min-width: 718px;
        justify-content: center;
        
        
        .form-contents{
            display: flex;
            justify-content: center;
        }
        
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
          margin-bottom: 30px;
          padding-top: 24px;
        }
      
      .column{
        padding: 1%;
      }
      .column-title{
          text-align:center;
      }
      
      .inline-label{
        display: flex;
        align-items: center;
      }
      
      .input{
        margin-left: 1%;
        min-width: 20px;
        margin-bottom: 10px;*/
      }
      .label-value{
        justify-content: center;
        text-align: left;
        width: 45%;
        .edit-title{
            text-align: right;
            min-width: 360px;
        }
        @media(max-width:1024px){
         width: 70%;      
        }
      }
    `;