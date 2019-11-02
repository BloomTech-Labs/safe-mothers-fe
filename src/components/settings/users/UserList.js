import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import Edit from '../../reusableParts/resources/Edit.svg';
import Close from '../../reusableParts/resources/Close.svg';
import { connect } from 'react-redux';

const Card = styled.div`
  margin: 2 rem auto;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: left;

  .btns {
    padding-left: 2%;
    width: 12%;

    &:hover {
      cursor: pointer;
    }
  }

  .close {
    fill: #eb5757;
  }

  .edit {
    fill: #35e632;
  }

  .details-container {
    display: flex;
    justify-content: space-between;
    width: 73%;

    @media (max-width: 1024px) {
      justify-content: center;
    }
  }

  p {
    background: #e7f0fa;
    width: 150px;
    height: 42px;
    margin-left: 2%;
  }

  .names {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const UserList = ({ admin, props, handleDelete, handleEdit, setAdmin }) => {
  const { id, first_name, last_name, username } = admin;

  const updateAdmin = id => {
    setAdmin({
        id:admin.id,
      first_name: admin.first_name,
      last_name: admin.last_name,
      username: admin.username,
    });
  };
  return (
    <>
      <Card>
        <div className='btns'>
          <SVG className='close' src={Close} onClick={() => handleDelete(id)} />
          {/* <SVG className="edit" src={Edit} onClick={() => props.edit(!props.setFormState)}  /> */}
          <SVG className='edit' src={Edit} onClick={() => updateAdmin(id)} />
        </div>
        <div className='details-container'>
          <div classname='name-detail'>
            <p classname='names'>
              {first_name} {last_name}
            </p>
          </div>
          <p className='uname-detail'>{username}</p>
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
