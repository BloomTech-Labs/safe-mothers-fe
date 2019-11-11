import React from 'react';
import styled from 'styled-components';
import Edit from '../../reusableParts/resources/Edit.svg';
import Close from '../../reusableParts/resources/Close.svg';
import {SVGBtn} from "../../reusableParts/form-items";
import {ADMIN} from "../settings-utils";
import ConfirmDelete from "../../reusableParts/ConfirmDelete";


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
  
  .close-container{
   background: #fbedb1;
     &:hover{ 
        background: #fbc9a2;
    }
  }

  .edit-container{
   background: #c3fbc6;
     &:hover{ 
        background: #98FB98;
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
        <>
            {username !==  ADMIN &&
            <Card>
                <div className='btns'>
                    <div className="icon-btn close-container">
                        <ConfirmDelete handleDelete = {handleDelete} id= {id}/>
                    </div>
                    <div className="icon-btn edit-container">
                        <SVGBtn bg="#07902d" bgOnHover="#027034" className='icon' src={Edit}
                                onClick={() => updateAdmin()
                                }/>
                    </div>
                </div>
                <div className='details-container'>
                    <p className='field-content'>
                        {first_name} {last_name}
                    </p>
                    <p className='field-content'>{username}</p>
                </div>
            </Card>
            }

        </>
    );
};

export default UserList;
