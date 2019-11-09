import React from 'react';
import styled from 'styled-components';

import ConfirmDelete from '../reusableParts/ConfirmDelete';
import { SVGBtn } from '../reusableParts/form-items';
import Close from '../reusableParts/resources/Close.svg';
import Edit from '../reusableParts/resources/Edit.svg';
import {Button} from "../reusableParts/form-items"
import {withRouter} from "react-router-dom";

const Banner = props => {
    const {person, path} = props;
  return (
    <StyledBanner>
      <h1 className="banner-title">{person.name}</h1>
      <div className="btn-container">
        <Button
          onClick={() => props.history.push(path)}
          bgOnHover="#d8e6f6"
          bg="#e7f0fa"
          height="30px"
          color="#1337F1"
        >
          EDIT
          <SVGBtn bg="#1337F1" className="edit-svg" src={Edit} />
        </Button>
        <Button bgOnHover="#db4343" height="30px" bg="#EB5757" color="white">
          DELETE
          <SVGBtn bg="#ffffff" className="del-svg" src={Close} />
        </Button>
        <div className="back">
          <p onClick={() => props.history.push("/mothers")}>Back</p>
        </div>
      </div>
    </StyledBanner>
  );
};

export default withRouter(Banner);


export const StyledBanner = styled.div `

    align-items: center;
    height: 60px;
    display: flex; 
    justify-content: space-between;
    text-align: center;
    color: white;
    background: #282E74;
    @media (max-width: 1024px){
        height: 60px;
       
        color: white;
        align-items: center;
        flex-direction: row;
        margin: 0 auto;
        justify-content: space-around;
    }
}

.banner-title{
    margin-left: 3%;

    @media (max-width: 1024px){
        white-space: nowrap;
        text-align: center;
       
    }

}

.btn-container{
    
        display: flex;
        min-width: 350px;
        margin-top: 15px;
        margin-right: 2%;
        margin-bottom: 15px;
        justify-content: space-evenly;
        align-items: center;
        @media (max-width: 1024px){
            
            width: 60%
            
        }
}
`