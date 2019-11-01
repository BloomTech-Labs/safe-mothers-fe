import React, {useState} from 'react'
import UserList from './UserList'
import styled from 'styled-components';

const AdminList = styled.div`
  
  .header{
    margin-top: 40px;
    margin-bottom: 15px;
  }

  .banner{
    display: flex;
    justify-content: space-around;
  }

`

const User = () => {

  const [admins, setAdmin] = useState([
    {
      id: 1,
      firstName: 'tempris',
      lastName: 'thomas',
      userName: 'cucu'
    },
    {
      id: 2,
    firstName: 'mandy',
    lastName: 'cruz',
    userName: 'cucu',
    },
    {
      id: 3,
    firstName: 'kenny',
    lastName: 'gary',
    userName: 'many',
    }
    ])


  return (
    <AdminList>
      <div className="header">
        <h1>Administrative Users</h1>
      </div>
      <div className="banner">
        <h2>Name</h2>
        <h2>Username</h2>
      </div>
        {admins.map(admin => ( 
          <UserList key = {admin.id} admin={admin} />
        ))}
    </AdminList>
  )
}

export default User
