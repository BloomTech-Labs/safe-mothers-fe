import React from 'react';
import MotherContent from './MotherContent';
import styled from 'styled-components';


export default function AccordionContent (props) {
    const {mother} = props
    return (
     <StyledContents>
      <div className="att-list">  
       <ul className="list">
        <li>Age: </li>
        <li>Marital Status:</li>
        <li>Wife Order:</li>
        <li>Education:</li>
        <li>Education Level:</li>
        <li>Pregnant:</li>
        <li>Due Date:</li>
        <li>Village:</li>
        <br />
        <li>Phone Owner:</li>
        <li>Phone Carrier:</li>
        <li>Phone Number:</li>
       </ul>
       <ul className="list-values">
        <li>{mother.age ? mother.age :'null'}</li>
        <li>{mother.marital_status ? mother.marital_status :'null'}</li>
        <li>{mother.wife_order ? mother.wife_order :'null'}</li>
        <li>{mother.attend_school ? mother.attend_school :'null'}</li>
        <li>{mother.education ? mother.education :'null'}</li>
        <li>Unknown DB Value</li>
        <li>{mother.edd ? mother.edd :'null'}</li>
        <li>{mother.villiage ? mother.villiage :'null'}</li>
        <br />
        <li>{mother.owner_phone ? mother.owner_phone :'null'}</li>
        <li>{mother.carrier ? mother.carrier :'null'}</li>
        <li>{mother.phone_number ? mother.phone_number :'null'}</li>
       </ul>
      </div>  
        


        <MotherContent mother={mother} />
        </StyledContents>
    )
};


const StyledContents = styled.div`
    font-family: 'Asap', sans-serif;
    flex-direction: column;
    text-align: left;
    background: white;

    .list{
        list-style-type: none;
    }

    .list-values{
        list-style-type: none; 
        color: blue;
    }

    .att-list{
        display:flex;
    }
`