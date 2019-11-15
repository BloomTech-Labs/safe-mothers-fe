import React, {useState} from 'react'
import AdminForm  from './users/AdminForm'
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
            id: '',
            first_name: '',
            last_name: '',
            username: ''
        }
    ]);

    const [formState, setFormState] = useState(false);
    return (
        <Card>
            <ContentContainer>
                <AdminForm  formState={formState} setFormState={setFormState} admin={admin} setAdmin={setAdmin}/>
            </ContentContainer>
            <ContentContainer>
                <User setFormState={setFormState} setAdmin={setAdmin}/>
            </ContentContainer>
        </Card>
    )
};
export default Settings
