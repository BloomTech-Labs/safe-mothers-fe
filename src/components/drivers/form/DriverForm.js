import React, {useEffect} from 'react';
import {Form, Field, withFormik} from 'formik/dist/index';
import * as Yup from "yup";
import {Button, FormItems} from "../../reusableParts/form-items";
import styled from 'styled-components';
import {villages} from '../../mothers/form/lists';
import Select from "../../mothers/form/Select";
import SelectDriver from "../form/SelectDriver";
import {connect} from 'react-redux';
import { addDriver, updateDriver } from "../../../actions/driversActions";
import Banner from "../../reusableParts/banner/Banner";
import YesNoDontknowDeclin from "./YesNoDontknowDeclin";
import {choices} from "./driver-utils";
import {subcounty_code, district_code, stage_code, carrier, boda_night} from "./List";

import Tooltip from "../../reusableParts/Tooltip";



function DriverForm(props) {

useEffect(() => {
    const id = props.match.params.id;
    console.log("DRIVER ID ", id);
        if (id) {
            const filtered_driver = props.drivers.filter(driver => `${driver.id}` === id);
            const single_driver = filtered_driver[0];
            let driver = {};
            for (let property  in single_driver) {
                if (typeof single_driver[property] === 'string' && single_driver[property].length > 0) driver[property] = single_driver[property];
                if (typeof single_driver[property] === 'number') driver[property] = single_driver[property];
            }
            props.setValues(driver);
        } else {
            props.resetForm();
        }
    }, []);

    const resetValue = (name, value, name2, value2) => {
        props.setFieldValue(name, parseInt(value));
        if (value !== value2) {
            props.setFieldValue(name2, '');
        }
    };

  return (
    <FormItems>
      <DriverFormStyle>
        <Form className="form-contents edit-form">
          {/*NAVBAR*/}
          <Banner back={"/drivers"} person={props.values.driver_name} state={true} {...props} />
          <div className="label-value inline">
            <ul>
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
              {props.values.stage === choices.OTHER && 
                <li>Specify Parish</li>}
              <li>Phone Number</li>
              <li>Carrier</li>
              {props.values.carrier === choices.OTHER && 
                <li>Specify Carrier</li>}
              <li>Owns another phone</li>
              {props.values.another_phone === choices.YES &&
                <li>Second Phone Number</li>
                }
              <li>Owns Boda</li>
              <li>Has Boda at Night</li>
              <li>Transport Count</li>
              <li>Married</li>
              <li>Has Children</li>
              {props.values.children === choices.YES &&
                <li>Number of Children</li>
                }
              {props.values.children === choices.YES &&
                <li>Children Details</li>
                }
              <li>Motivation</li>
              <li>Background</li>
              <li>Dream for Future</li>
            </ul>
            <div className="column">
                {/*driver_name*/}
                <label className="error-holder">
                    <Field className="regular-input"  type="text" name="driver_name"/>
                    {props.touched.driver_name && props.errors.driver_name && (
                        <p className="errormessage">{props.errors.driver_name}</p>
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
                    onChange={e => resetValue("stage", e.target.value, "parish_other", choices.OTHER)}>
                    <Select list={stage_code} />
                    <option value={choices.OTHER}>Other</option>
                    </Field>
                    {props.touched.stage && props.errors.stage && (
                    <p className="errormessage">{props.errors.stage}</p>
                    )}
                </label>
                {/*parish_other*/}
                {props.values.stage === choices.OTHER && (
                    <label className="error-holder">
                    <Field className="regular-input" type="text" name="parish_other" />
                    {props.touched.parish_other && props.errors.parish_other && (
                        <p className="errormessage">{props.errors.parish_other}</p>
                    )}
                    </label>
                )}
                {/*phone*/}
                <label className="error-holder">
                    <Field className="regular-input" type="text" name="phone"/>
                    {props.touched.phone && props.errors.phone && (
                        <p className="errormessage">{props.errors.phone}</p>
                    )}
                </label>
                {/*carrier*/}
                <label className="error-holder">
                    <Field component="select" className="regular-input" name="carrier"
                    onChange={e => props.setFieldValue ("carrier", e.target.value)}>
                    <Select list={carrier} />
                    </Field>
                    {props.touched.carrier && props.errors.carrier && (
                    <p className="errormessage">{props.errors.carrier}</p>
                    )}
                </label>
                {/* carrier_2
                {props.values.carrier === choices.OTHER && (
                    <label className="error-holder">
                    <Field className="regular-input" type="text" name="carrier_2" />
                    {props.touched.carrier_2 && props.errors.carrier_2 && (
                        <p className="errormessage">{props.errors.carrier_2}</p>
                    )}
                    </label>
                )} */}
                {/*another_phone*/}
                <label className="error-holder">
                    <Field component="select" className="regular-input" name="another_phone"
                        onChange={(e) => props.setFieldValue("another_phone", parseInt(e.target.value))}>
                        <YesNoDontknowDeclin state={false}/>
                    </Field>
                    {props.touched.another_phone && props.errors.another_phone && (
                        <p className="errormessage">{props.errors.another_phone}</p>
                    )}
                </label>
                {/*phone_2*/}
                {props.values.another_phone === choices.YES &&
                    <label>
                        <Field className="regular-input" type="text" name="phone_2"/>                   
                    </label>
                }
                {/*own_boda*/}
                <label className="error-holder">
                    <Field component="select" className="regular-input" name="own_boda"
                        onChange={(e) => props.setFieldValue("own_boda", parseInt(e.target.value))}>
                        <YesNoDontknowDeclin state={false}/>
                    </Field>
                    {props.touched.own_boda && props.errors.own_boda && (
                        <p className="errormessage">{props.errors.own_boda}</p>
                    )}
                </label>
                {/*boda_night*/}
                <label className="error-holder">
                    <Field component="select" className="regular-input" name="boda_night"
                    onChange={e => resetValue("boda_night", e.target.value)}>
                    <SelectDriver list={boda_night} />
                    </Field>
                    {props.touched.boda_night && props.errors.boda_night && (
                    <p className="errormessage">{props.errors.boda_night}</p>
                    )}
                </label>
                {/*transfers*/}
                <label className="error-holder">
                    <Field className="regular-input" type="number" name="transfers"/>
                    {props.touched.transfers && props.errors.transfers && (
                        <p className="errormessage">{props.errors.transfers}</p>
                    )}
                </label>
                {/*married*/}
                <label className="error-holder">
                    <Field component="select" className="regular-input" name="married"
                        onChange={(e) => props.setFieldValue("married", parseInt(e.target.value))}>
                        <YesNoDontknowDeclin state={false}/>
                    </Field>
                    {props.touched.married && props.errors.married && (
                        <p className="errormessage">{props.errors.married}</p>
                    )}
                </label>
                {/*children*/}
                <label className="error-holder">
                    <Field component="select" className="regular-input" name="children"
                        onChange={(e) => props.setFieldValue("children", parseInt(e.target.value))}>
                        <YesNoDontknowDeclin state={false}/>
                    </Field>
                    {props.touched.children && props.errors.children && (
                        <p className="errormessage">{props.errors.children}</p>
                    )}
                </label>
                {/*number_kids*/}
                {props.values.children === choices.YES &&
                    <label>
                        <Field className="regular-input" type="number" name="number_kids"/>                   
                    </label>
                }
                {/*kid_info*/}
                {props.values.children === choices.YES &&
                    <label>
                        <Field className="regular-input" type="text" name="kid_info"/>                   
                    </label>
                }
                {/*motivation*/}
                <label className="error-holder">
                    <Field className="regular-input"  type="text" name="motivation"/>
                    {props.touched.motivation && props.errors.motivation && (
                        <p className="errormessage">{props.errors.motivation}</p>
                    )}
                </label>
                {/*background*/}
                <label className="error-holder">
                    <Field className="regular-input"  type="text" name="background"/>
                    {props.touched.background && props.errors.background && (
                        <p className="errormessage">{props.errors.background}</p>
                    )}
                </label>
                {/*dream*/}
                <label className="error-holder">
                    <Field className="regular-input"  type="text" name="dream"/>
                    {props.touched.dream && props.errors.dream && (
                        <p className="errormessage">{props.errors.dream}</p>
                    )}
                </label>
                
            </div>
          </div>
        </Form>
      </DriverFormStyle>
    </FormItems>
  );
}


const FormikDriverForm = withFormik({
    mapPropsToValues(
        {
            driver_name,
            district,
            district_other,
            subcounty,
            subcounty_other,
            stage,
            parish_other,
            phone,
            carrier,
            another_phone,
            phone_2,
            carrier_2,
            //
            latitude,
            longitude,
            //
            own_boda,
            boda_night,
            transfers,
            married,
            children,
            number_kids,
            kid_info,
            motivation,
            background,
            dream
            
        }) {
            return {
                driver_name: driver_name || '',
                district: district || '',
                district_other: district_other || '',
                subcounty: subcounty || '',
                subcounty_other: subcounty_other || '',
                stage: stage || '',
                parish_other: parish_other || '',
                phone: phone || '',
                carrier: carrier || '',
                another_phone: another_phone || '',
                phone_2: phone_2 || '',
                carrier_2: carrier_2 || '',
                //
                latitude: latitude || 'qwer',
                longitude: longitude || 'qwer',
                //
                own_boda: own_boda || '',
                boda_night: boda_night || '',
                transfers: transfers || '',
                married: married || '',
                children: children || '',
                number_kids: number_kids || '',
                kid_info: kid_info || '',
                motivation: motivation || '',
                background: background || '',
                dream: dream || '',
            };
        },
        
        validationSchema: Yup.object().shape({
          
            
        }),
        
        handleSubmit(values, {props, resetForm}) {
            let driver = {};
            for (let property  in values) {
                if (typeof values[property] === 'string' && values[property].length > 0) driver[property] = values[property];
                if (typeof values[property] === 'number') driver[property] = values[property];
            }
            if (props.match.params.id) {
                props.updateDriver(values.id, driver);
                resetForm();
                props.history.push("/drivers");
            } else {
                props.addDriver(driver);
                resetForm();
                props.history.push("/drivers");
            }

            console.log("values ", driver);
            props.addDriver(driver);
        }
    })(DriverForm);
    
    const mapStateToProps = state => {
        return {
            drivers: state.driversReducer.drivers,
        }
    };

    export default connect(mapStateToProps,{addDriver, updateDriver})(FormikDriverForm);
    
    const DriverFormStyle = styled.div`
        width: 100%;
        justify-content: center;
        background: white;
        border: 1.5px solid #EEEEEF;
        margin: 0;
        
        .form-contents{
            display: flex;
            justify-content: center;
            margin: 0;
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
         display: flex;
         justify-content: flex-start;      
        }
      }
    `;