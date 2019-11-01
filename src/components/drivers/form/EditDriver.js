import React from 'react';
import {Form, Field, withFormik} from 'formik/dist/index';
import * as Yup from "yup";
import {Button, FormItems} from "../../reusableParts/form-items";
import styled from 'styled-components';
import {villages} from '../../mothers/form/lists';
import Select from "../../mothers/form/Select";


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

function EditDriver(props) {
    return (
        <>
            <FormItems>
                <EditDriverForm>
                    <Form className="form-contents edit-form">
                            <div className="label-value inline">
                                <ul>
                                    <span className="column-title edit-title">Create Driver</span>
                                    <li>Name</li>
                                    <li>Phone Number</li>
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

                                    {/*phone_number*/}
                                    <Field className="regular-input input"
                                           type="text"
                                           name="phone_number"
                                    />
                                    {props.touched.phone_number && props.errors.phone_number && (
                                        <p className="error-message">{props.errors.phone_number}</p>
                                    )}


                                    {/*village_id*/}
                                    <select className="regular-input input" name="village_id"
                                            onChange={(e) => props.setFieldValue("village_id", e.target.value)}>
                                        <Select list={villages}/>
                                        <option value="29">Other</option>
                                    </select>
                                    <div className="btn-container">
                                    {/*<Button color="white" nu="blue" >Save</Button>*/}
                                    <button className="submit-btn" type="submit">CREATE</button>
                                </div>
                                </div>
                            </div>
                            
                    </Form>
                </EditDriverForm>
            </FormItems>
        </>
    );
}


const FormikEditDriver = withFormik({
    mapPropsToValues(
        {
            name,
            phone_number,
            village_id, 
        }) {
        return {

            name: name || '',
            phone_number: phone_number || '',
            village_id: village_id || '',

        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().max(30).required('Please enter name'),
        phone_number: Yup.string().max(30).required('Please enter phone number'),

    }),

    handleSubmit(values, {props}) {
        console.log("values ", values);
    }
})(EditDriver);


export default FormikEditDriver;