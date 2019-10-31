import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import Edit from '../../reusableParts/resources/Edit.svg';
import Close from '../../reusableParts/resources/Close.svg';
import {connect} from 'react-redux';

const Card = styled.div`
  padding: 1rem;
  margin: 2 rem auto;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-around;


  .btns{
      padding-left: 2%;
  }

  .close{
      fill: #EB5757; 
  }

  .edit{
      fill: #35E632;
  }

  .name-detail{
      padding-left: 2%;
  }
`;

const UserList = ({admin}) => {
    const {firstName, lastName, userName} = admin;

    return (
        <>
            <Card>
                <div className = "btns">
                    <SVG className="close" src={Close} />
                    <SVG className="edit" src={Edit} />
                </div>
                <p classname="name-detail">
                    {firstName} 
                    {lastName}{' '}
                </p>
                <p className="uname-detail">{userName}</p>

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
