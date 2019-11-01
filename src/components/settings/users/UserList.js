import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import Edit from '../../reusableParts/resources/Edit.svg';
import Close from '../../reusableParts/resources/Close.svg';
import {connect} from 'react-redux';

const Card = styled.div`
  margin: 2 rem auto;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: left;



  .btns{
      padding-left: 2%;
      width: 12%;
  }

  .close{
      fill: #EB5757;
    }

  .edit{
      fill: #35E632;
    }

  .details-container{
      display: flex;
      justify-content: space-between;
      width: 73%;

      @media(max-width: 1024px){
          justify-content: center;
      }
    }

  p{
      background: #e7f0fa;
      width: 150px;
      height: 42px;
      margin-left: 2%;
    }
`

const UserList = ({admin}) => {
    const {firstName, lastName, userName} = admin;

    return (
        <>
            <Card>
                <div className = "btns">
                    <SVG className="close" src={Close} />
                    <SVG className="edit" src={Edit} />
                </div>
                <div className="details-container">
                    <p classname="name-detail">
                        {firstName} {' '}
                        {lastName}
                    </p>
                    <p className="uname-detail">{userName}</p>
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
