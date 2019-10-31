import React, {useState} from 'react'
import UserList from './UserList'

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
    <div>
      {admins.map(admin => ( 
        <UserList key = {admin.id} admin={admin} />
      ))}
    </div>
  )
}

export default User
