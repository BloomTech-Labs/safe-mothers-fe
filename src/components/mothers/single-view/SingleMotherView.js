import React from 'react';
import {connect} from "react-redux";
import styled from 'styled-components';
import PersonalCard from '../cards/PersonalCard';
import BirthPreparedness from '../cards/BirthPreparedness';
import Demographics from '../cards/Demographics';
import HightRiskCard from '../cards/HightRiskCard';
import MedicalHistoryCard from '../cards/MedicalHistoryCard';
import SuppliesForPregnancyCard from '../cards/SuppliesForPregnancyCard';
import Introduction from '../cards/Introduction';
import PregnancyHistory from '../cards/PregnancyHistory';

import { SVGBtn } from '../../reusableParts/form-items';
import Close from '../../reusableParts/resources/Close.svg';
import Edit from '../../reusableParts/resources/Edit.svg';
import {Button} from "../../reusableParts/form-items";


function SingleMotherView(props) {
    const id = props.match.params.id;
    const singleMother = props.mothers.filter(mother => `${mother.id}` === id);
    return (
        <>
            {singleMother && singleMother.map(mother => (
                <StyledPageView className="single-page-view">
                    <div className="banner">
                        <h1 className="banner-title">{mother.name}</h1>
                    <div className="btn-container">
                        <Button onClick={() => props.history.push(`/mother-form/${id}`)} bgOnHover="#d8e6f6" bg="#e7f0fa" color="#1337F1" >
                            EDIT<SVGBtn bg="#1337F1" className="edit-svg" src={Edit}/>
                        </Button>
                        <Button bgOnHover="#db4343" bg="#EB5757" color="white">
                            DELETE<SVGBtn bg="#ffffff" className="del-svg" src={Close}/>
                        </Button>
                        <div className="back">
                                <p onClick={() => props.history.push("/mothers")}>Back</p>
                        </div>
                    </div>
                    </div>
                    <div className="card-container">
                        <div className="grid-top">
                            <div className="card">
                                <span className="card-title">INTRODUCTION</span>
                                <Introduction mother={mother}/>
                            </div>
                            <div className="card">
                                <span className="card-title">PERSONAL</span>
                                <PersonalCard mother={mother}/>
                            </div>
                            <div className="card">
                                <span className="card-title">DEMOGRAPHICS</span>
                                <Demographics mother={mother}/>
                            </div>
                        </div>
                        <div className="grid-center">
                            <div className="card">
                                <span className="card-title">BIRTH PREPAREDNESS</span>
                                <BirthPreparedness mother={mother}/>
                            </div>
                            <div className="card">
                                <span className="card-title">RISK</span>
                                <HightRiskCard state={true} mother={mother}/>
                            </div>
                            <div className="card">
                                <span className="card-title">SUPPLIES</span>
                                <SuppliesForPregnancyCard mother={mother}/>
                            </div>
                        </div>
                        <div className="grid-bottom">
                            <div className="card">
                                <span className="card-title">MEDICAL HISTORY</span>
                                <MedicalHistoryCard mother={mother}/>
                            </div>
                            <div className="card">
                                <span className="card-title">PREGNACY HISTORY</span>
                                <MedicalHistoryCard mother={mother}/>
                            </div>
                        </div>
                    </div>
                </StyledPageView>

            ))
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        mothers: state.mothersReducer.mothers
    };
};

export default connect(mapStateToProps, {})(SingleMotherView);

const StyledPageView = styled.div` 
    font-size: 16px;
    background: white;
    max-width: 1500px;
    margin: 50px auto;
    
    .btn-container{
        display: flex;
        min-width: 350px;
        margin-top: 15px;
        margin-bottom: 15px;
        justify-content: space-evenly;
        align-items: center;
        @media (max-width: 1024px){
            justify-content: center;
        }
    .back{
            width: 10%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            cursor: pointer;
            p{
                font-size: 1rem;
                text-transform: uppercase;       
            }
        }
    }

    .fields{
        text-align: left;
        margin-right: 10px;
    }

    .values{
        text-align: left;
        margin-right: 20px;
        color: #85a1c1;

        p{
            margin-top: 0px;
            margin-bottom: 0px;
        }
    }

    .list-break-values{
        color: #85a1c1; 
    }

    .supply-values{
        text-align: center;
        color: #85a1c1;
    }
    
    .banner{
        
        display: flex; 
        justify-content: space-between;
        text-align: center;
        color: white;
        background: #282E74;
        @media (max-width: 1024px){
            background: white;
            color: black;
            align-items: center;
            flex-direction: column;
            margin: 0 auto;
            justify-content: space-around;
        }
    }
    
    .banner-title{
        margin-left: 4%;
        margin-top: 30px;
        @media (max-width: 1024px){
            white-space: nowrap;
            text-align: center;
           
        }
    }

    .card{
        display: flex;
        
        flex-direction: column;

        @media (max-width: 1024px) {
            width: 100%;
            align-items: stretch;
        }
    }

    .card-content{
        display: flex;
        justify-content: space-around;
    }

    .card-title{
        font-weight: bold;
        text-align: center;
        text-decoration: underline;

        @media (max-width: 1024px) {
            text-decoration: none;
            background: #e7f0fa;
        }

    }
    
    .grid-top{
       
        display: grid;
        border-bottom: 5px solid #282E74;
        margin-top: 15px;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0;
        grid-row-gap: 0;
         
        @media (max-width: 1024px) {
            margin-left: 0px;
            border-bottom: none;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: column;
            width: 100%;
            text-align: center;
        }
        
    }
    
    .grid-center{
        display: grid;
        margin-top: 15px;
        border-bottom: 5px solid #282E74;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0;
        grid-row-gap: 0;
         
        @media (max-width: 1024px) {
            margin-left: 0px;
            border-bottom: none;
            display: block;
            width: 100%;
            text-align: center;
        }
        
    
    }
    .grid-bottom{
        display: grid;
        margin-top: 15px;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0;
        grid-row-gap: 0;
         
        @media (max-width: 1024px) {
            margin-left: 0px;
            display: block;
            width: 100%;
            text-align: center;
        }
       
    
    }
`;