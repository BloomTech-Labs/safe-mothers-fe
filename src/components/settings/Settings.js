import React, {useEffect, useState} from 'react'
import RegisterForm from './users/RegisterForm'
import User from './users/User'
import styled from "styled-components";
import {ContentContainer} from "./setting-style";
const Card = styled.div`
  display: flex;
  justify-content: center;
  background: white;

  @media(max-width: 1024px){
      flex-direction: column;
  }

`;
const Settings = () => {

  const [admin, setAdmin] = useState([
    {
      id:'',
      first_name: '',
      last_name: '',
      username: ''
    }

  ])

    const [formState, setFormState] = useState(true);
  return (
    <Card>
      <ContentContainer>
        <RegisterForm formState={formState} cancel={setFormState} admin= {admin} setAdmin={setAdmin}/>
      </ContentContainer>
      <ContentContainer>
        <User edit={setFormState} setAdmin= {setAdmin}/>
      </ContentContainer>
    </Card>
  )
};
export default Settings
