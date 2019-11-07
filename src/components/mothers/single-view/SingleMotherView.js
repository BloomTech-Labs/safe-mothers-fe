import React from 'react';
import {connect} from "react-redux";
import styled from 'styled-components';
import PersonalCard from '../cards/PersonalCard';
import ContactsCard from '../cards/ContactsCard';
import FinanceAndInsuranceCard from '../cards/FinanceAndInsuranceCard';
import HightRiskCard from '../cards/HightRiskCard';
import MedicalHistoryCard from '../cards/MedicalHistoryCard';
import SuppliesForPregnancyCard from '../cards/SuppliesForPregnancyCard';

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
                    </div>
                    </div>
                    <div className="card-container">
                        <div className="grid-top">
                            <div className="card reduced">
                                <span className="card-title">PERSONAL</span>
                                <PersonalCard mother={mother}/>
                            </div>
                            <div className="card reduced">
                                <span className="card-title">CONTACTS</span>
                                <ContactsCard mother={mother}/>
                            </div>
                        </div>
                        <div className="grid-bottom">
                            <div className="card increased">
                                <span className="card-title">FINANCE AND INSURANCE</span>
                                <FinanceAndInsuranceCard mother={mother}/>
                            </div>
                            <div className="card centered">
                                <span className="card-title">SUPPLIES</span>
                                <SuppliesForPregnancyCard mother={mother}/>
                            </div>
                            <div className="card increased">
                                <span className="card-title">MEDICAL HISTORY</span>
                                <MedicalHistoryCard mother={mother}/>
                            </div>
                            <div className="card increased">
                                <span className="card-title">RISK</span>
                                <HightRiskCard state={true} mother={mother}/>
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
    
    ul {
        margin: 0;
    }
    
    li{
        margin-bottom: 1%;
    }
    .btn-container{
        display: flex;
        align-content: center;
        min-width: 350px;
        margin-top: 15px;
        @media (max-width: 1024px){
            justify-content: center;
        }
    }
    
    .banner{
        justify-content: space-between;
        margin-left: 30px;
        display: flex; 
        align-content: center;
        @media (max-width: 1024px){
           align-items: center;
           flex-direction: column;
           margin: 0 auto;
           justify-content: space-around;
        }
    }
    
    .banner-title{
        text-align: left;
        min-width: 30%;
        @media (max-width: 1024px){
            white-space: nowrap;
            text-align: center;
           
        }
    }
    
    .card-content{
        margin-bottom: 4%;
        margin-top: 4%;
        @media (max-width: 1024px){
            margin-bottom: 5%;
        }
    }
   
    .align-left{
        align-content: flex-start;
        width: 50%;
        padding: 0;
        margin: 0;
        @media (max-width: 1024px){
            text-align: left;
        }
    }
        .high-risk-card{
            p{
            margin-top: 0%;
            margin-bottom: 0%;
            }
        }
    
    .values{
        width: 50%;
        padding: 0;
        color: grey;
        @media (max-width: 1024px){
            margin-left: 65px;
            padding-left: 3%;
            color: black;
            text-align: left;
        }
    }
    
    .align-center.values{
        text-align: left;
        @media (max-width: 1024px){
            margin: 0 auto;
        }
    }
    
    .align-right{
        align-content: flex-start;
        width: 50%;
        text-align: left;
        padding: 0;
        @media (max-width: 1024px){
            margin: 0 auto;
            text-align: right;
            
        }
    }
    
    
    .card-container{
        display: flex; 
        flex-direction: column;
    }
    
    .card{
        align-content: flex-start;
        @media (max-width: 1024px){
            text-align: center;
        }
        .card-title{
            font-weight: bold;
            text-align: left;
            @media (max-width: 1024px){
                align-items: stretch;
                text-align: center;
                background: #f2f8ff;
                width: 90%;
                margin: auto;
                height: 30px;
                padding-top: 6px;
             }
        }
    }
    
    .reduced {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin-left: 30px;
        @media (max-width: 1024px){
            margin-left: 0px;
            width: 100%;
        }
    }
    
    .centered{
        display: flex;
        flex-direction: column;
        text-align: center;
        align-content: center;
        li{
            text-align:center;
        }
        ul{
            text-align:center;
            width: 100%;
        }
        .card-title{
            text-align: center;
        }
        @media (max-width: 1024px) {
            text-align: center;
            width: 100%;
        }
    }
    
    .increased {
        width: 125%;
        display: flex;
        flex-direction: column;
        @media (max-width: 1024px) {
            width: 100%;
        }
    }
    
    .grid-top{
        margin-left: 30px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0;
        grid-row-gap: 0;
        align-items: stretch;
        text-align: left;    
        @media (max-width: 1024px) {
            margin-left: 0px;
            display: block;
            width: 100%;
            text-align: center;
        }
        li{
        margin-top: 1%;
        }
    }
    
    .grid-bottom{
        margin-left: 30px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0;
        grid-row-gap: 0;
        align-items: stretch;
        text-align: left;
        margin-bottom: 2%;

        
        @media (max-width: 1024px) {
            display: flex;
            flex-direction: column;
            margin-left: 0px;
            width: 100%;
            text-align: center;
            align-content: center;
            justify-content: center;
        }
        
        li{
            margin-top: 1%;
        }
    }
`;