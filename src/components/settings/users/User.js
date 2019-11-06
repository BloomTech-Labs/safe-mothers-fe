import React, {useState, useEffect} from 'react'
import UserList from './UserList'
import styled from 'styled-components';
import RegisterForm from './AdminForm';
import {getUsers, deleteUsers, editUsers} from '../../../actions/adminActions'
import {connect} from 'react-redux'

const AdminList = styled.div`
 
  .header{
    margin-top: 40px;
    margin-bottom: 15px;
  }

  .banner{
    padding: 0 8%;
    display: flex;
    justify-content: space-around;
    h3{
      margin-left: 10%;
    }
  }

`;

const User = (props) => {

    useEffect(() => {
        props.getUsers()

    }, []);

    return (
        <AdminList>
            <div className="header">
                <h1>Administrative Users</h1>
            </div>
            <div className="banner">
                <h3>Name</h3>
                <h3>Username</h3>
            </div>
            {props.admins && props.admins.map((admin, index) => (
                <UserList setFormState={props.setFormState} key={index} admin={admin}
                          handleDelete={props.deleteUsers} setAdmin={props.setAdmin}/>
            ))}

        </AdminList>
    )
};
const mapStateToProps = state => {
    return {
        admins: state.settingsReducer.users
    }
};

export default connect(mapStateToProps, {getUsers, deleteUsers, editUsers})(User)
