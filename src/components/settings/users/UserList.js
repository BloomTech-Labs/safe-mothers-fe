import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

const Card = styled.div`
  padding: 1rem;
  border: #ccc 1px dotted;
  margin: 0.7rem 0;
  border: #ccc solid 1px;
  width: 100%;
  align-items: center;

  .btn {
    display: inline-block;
    background: #282e74;
    color: #f4f4f4;
    padding: 0.4rem 1.3rem;
    font-size: 1rem;
    cursor: pointer;
  }

  .btnn {
    display: inline-block;
    background: #dc3545;
    color: #f4f4f4;
    padding: 0.4rem 1.3rem;
    font-size: 1rem;
    cursor: pointer;
  }
`;

const UserList = ({admin}) => {
    const {firstName, lastName, userName} = admin;

    return (
        <>
            <Card>
                <h2>
                    {firstName} {lastName}{' '}
                </h2>
                <h3>{userName}</h3>

                <div>
                    <button className='btn'>Edit</button>
                    <button className='btnn'>Delete</button>
                </div>
            </Card>
        </>
    );
};

/*
const mapStateToProps = state => {
    return {
        user: state.settingsReducer.users,
    }
};

export default connect(mapStateToProps, {})(UserList);*/

export default UserList;
