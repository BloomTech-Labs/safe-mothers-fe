import React, {useState, useEffect} from 'react'
import UserList from './UserList'
import styled from 'styled-components';
import RegisterForm from './RegisterForm';
import {getUsers, deleteUsers, editUsers} from '../../../actions/adminActions'
import {connect} from 'react-redux'

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

const User = (props) => {

  useEffect(() => {
    props.getUsers()

  }, [])


    

//////////////////////////////////////


    //edit item
    // const [id, setId] = useState(0)



// const handleEdit = id => {
//   let admin = admin.find(item => item.id === id)
//   console.log(admin)
//   let {firstName, lastName, userName} = admin;
//   setFirstName(firstName)
//   setLastName(lastName)
//   setUserName(userName)
//   setEdit(true)
//   setId(id)
// }

  return (
    <AdminList>
      <div className="header">
        <h1>Administrative Users</h1>
      </div>
      <div className="banner">
        <h2>Name</h2>
        <h2>Username</h2>
      </div>
      {console.log('admin', props.admins)}
        {props.admins && props.admins.map(admin => ( 

          <UserList key = {admin.id} admin={admin} handleDelete={props.deleteUsers} setAdmin={props.setAdmin}/>
        ))}
       
    </AdminList>
  )
}
const mapStateToProps = state =>{
  return {
    admins: state.settingsReducer.users 
  }
}
export default connect(mapStateToProps, {getUsers, deleteUsers, editUsers})(User)
