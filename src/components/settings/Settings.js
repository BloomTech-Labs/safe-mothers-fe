import React from 'react'
import RegisterForm from './users/RegisterForm'
import User from './users/User'
// import UserFilter from './users/UserFilter'

import styled from "styled-components";

const Cardd = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`


const Settings = () => {
  return (
    <Cardd>
      <div>
        <RegisterForm />
      </div>


      <div>
      {/* <UserFilter/> */}
        <User/>
      </div>
    </Cardd>
  )
}

export default Settings
