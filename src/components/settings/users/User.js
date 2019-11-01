import React, {useState} from 'react'
import UserList from './UserList'
import styled from 'styled-components';
import RegisterForm from './RegisterForm';

const AdminList = styled.div`
  
  .header{
    margin-top: 40px;
    margin-bottom: 15px;
  }

  .banner{
    display: flex;
    justify-content: space-around;

    @media(max-width: 1024px){
      justify-content: space-around;
      width: 70%;
      padding-left: 30%;
    }
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

    //single  firstName
    const [firstName, setFirstName] = useState('')
   //single  lirstName
    const [lastName, setLastName] = useState('')

      const [password, setPassword] = useState('')
    //single username
    const [username, setUserName] = useState('')
    //edit
    const [edit, setEdit] = useState(false)

//////////////////////////////////////

const handleFirstName = e => {

  console.log(`firstname: ${e.target.value}`)
  setFirstName(e.target.value)
}
  const handleLastName = e => {
    setLastName(e.target.value)
  }
  const handleUserName = e => {
    setUserName(e.target.value)
  }
  const handlePassword = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

    //edit item
    const [id, setId] = useState(0)

const handleDelete = (id) =>{
  // console.log(`item deleted : ${id}`)
  let deleteAdmin = admins.filter(item=>item.id !== id);
  console.log(deleteAdmin)
  setAdmin(deleteAdmin)
}

const handleEdit = id => {
  let admin = admins.find(item => item.id === id)
  console.log(admin)
  let {firstName, lastName, userName} = admin;
  setFirstName(firstName)
  setLastName(lastName)
  setUserName(userName)
  setEdit(true)
  setId(id)
}

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
          <UserList key = {admin.id} admin={admin} handleDelete={handleDelete} handleEdit= {handleEdit}/>
        ))}
        <RegisterForm firstName={firstName} handleFirstName={handleFirstName} handleSubmit={handleSubmit}/>
    </AdminList>
  )
}

export default User
