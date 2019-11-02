import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import Edit from '../../reusableParts/resources/Edit.svg';
import Close from '../../reusableParts/resources/Close.svg';

const Card = styled.div`
  margin: 1rem auto;
  padding-right: 4%;
  padding-left: 5%;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: left;

  .btns {
    margin-left: 1%;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
  }
  
  .icon-btn{
    background: #ffffff;
    border: 0.5px solid #76e2e7;
    border-radius: 50%;
    width: 2.3rem;
    height: 2rem;
    margin: 0 3%;
    display: flex;
    align-items: center;
    justify-content: center;
      &:hover{
       background: #ecf8ff;
      }
  }
  
  .close {
    fill: #eb5757;
    &:hover{
      fill: #eb2d3e;
    }
  }

  .edit {
    fill: #35e632;
    &:hover{
      fill: #2cc72a;
    }
  }

  .details-container {
    display: flex;
    justify-content: space-between;
    width: 85%;

    @media (max-width: 1024px) {
      justify-content: center;
    }
  }

  p {
    background: #e7f0fa;
    height: 42px;
    margin-left: 2%;
  }

  .field-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: 0 3%;
  }
`;

const UserList = (props) => {
    const {admin, handleDelete, setAdmin, setFormState} = props;
    const {id, first_name, last_name, username} = admin;

    const updateAdmin = () => {
        setAdmin({
            id: admin.id,
            first_name: admin.first_name,
            last_name: admin.last_name,
            username: admin.username,
        });
        setFormState(true);
    };
    return (
        <Card>
            <div className='btns'>
                <div className="icon-btn">
                    <SVG className='close icon' src={Close} onClick={() => handleDelete(id)}/>
                </div>
                <div className="icon-btn">
                    <SVG className='edit icon' src={Edit} onClick={() => updateAdmin()}/>
                </div>
            </div>
            <div className='details-container'>
                <p className='field-content'>
                    {first_name} {last_name}
                </p>
                <p className='field-content'>{username}</p>
            </div>
        </Card>
    );
};

export default UserList;
