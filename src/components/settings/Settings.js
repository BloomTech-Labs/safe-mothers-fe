import React from 'react'
import RegisterForm from './users/RegisterForm'
import User from './users/User'
import UserFilter from './users/UserFilter'

import styled from "styled-components";
import {ContentContainer} from "./setting-style";

const Card = styled.div`
  
  display: flex;
  justify-content: center;
  @media(max-width: 1024px){
      flex-direction: column;
  }
`;


const Settings = () => {
  return (
    <Card>
      <ContentContainer>
        <RegisterForm />
      </ContentContainer>

      <ContentContainer>
      <UserFilter/>
        <User/>
      </ContentContainer>
    </Card>
  )
};

export default Settings
