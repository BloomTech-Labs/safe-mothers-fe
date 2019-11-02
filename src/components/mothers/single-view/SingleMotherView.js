import React from 'react';
import {connect} from "react-redux";
import styled from 'styled-components';
import PersonalCard from '../cards/PersonalCard';
import ContactsCard from '../cards/ContactsCard';
import FinanceAndInsuranceCard from '../cards/FinanceAndInsuranceCard';
import HightRiskCard from '../cards/HightRiskCard';
import MedicalHistoryCard from '../cards/MedicalHistoryCard';
import SuppliesForPregnancyCard from '../cards/SuppliesForPregnancyCard';

import SVG from 'react-inlinesvg/lib/index';
import Close from '../../reusableParts/resources/Close.svg';
import Edit from '../../reusableParts/resources/Edit.svg';
import {Button} from "../../reusableParts/form-items";


const StyledPageView = styled.div` 
    font-size: 18px;
    background: white;
    
    ul {
        margin: 0;
    }
    
    li{
        margin-bottom: 1%;
    }
    
    .banner{
        align-items: center;
        display: flex; 
        align-content: center;
        @media (max-width: 1024px){
           align-items: center;
        }
    }
    
    .banner-title{
        text-align: left;
        padding-right: 20%;
        @media (max-width: 1024px){
            text-align: center;
            padding-left: 40%;
            padding-right: 10%;
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
            text-align: right;
        }
    }
    
    .values{
        align-content: flex-end;
        width: 50%;
        padding: 0;
        color: black;
        @media (max-width: 1024px){
            padding-left: 3%;
            color: black;
            text-align: left;
        }
    }
    
    .align-center.values{
        text-align: left;
    }
    
    .align-right{
        align-content: flex-start;
        width: 50%;
        text-align: left;
        padding: 0;
        @media (max-width: 1024px){
            text-align: right;
            margin-right: 2%;
        }
    }
    
    .align-right.values.high-risk-card{
        align-content: flex-start;
        width: 50%;
        margin-top: 0;
        padding: 0;
        margin-bottom: 0;
        @media (max-width: 1024px){
        } 
        p{
            margin-bottom: 0;
            text-align: left;
            margin-top: 0;
        }
    
        @media (max-width: 1024px){
            text-align: center;
            margin-left: 2%;
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
                border-bottom: 1px solid black;
            }
        }
    }
    
    .reduced {
        width: 50%;
        @media (max-width: 1024px){
            width: 100%;
        }
    }
    
    .centered{
        text-align: center;
        li{
            text-align:center
        }
        .card-title{
            padding-right: 20%;
        }
        @media (max-width: 1024px) {
            text-align: center;
            padding-right: 0;
        }
    }
    
    .increased {
        width: 125%;
    }
    
    .grid-top{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0;
        grid-row-gap: 0;
        align-items: stretch;
        text-align: left;    
        @media (max-width: 1024px) {
            display: block;
            width: 100%;
            text-align: center;
        }
        li{
        margin-top: 1%;
        }
    }
    
    .grid-bottom{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0;
        grid-row-gap: 0;
        align-items: stretch;
        text-align: left;
        margin-bottom: 2%;
        
        @media (max-width: 1024px) {
            display: block;
            width: 80%;
            text-align: center;
            align-content: center;
        }
        
        li{
            margin-top: 1%;
        }
    }
`;


function SingleMotherView(props) {
    const id = props.match.params.id;
    const singleMother = props.mothers.filter(mother => `${mother.id}` === id);
    return (
        <>
            {singleMother && singleMother.map(mother => (
                <StyledPageView className="single-page-view">
                    <div className="banner">
                        <h1 className="banner-title">{mother.name}</h1>
                        <Button bgOnHover="#d8e6f6" bg="#e7f0fa" color="#1337F1">
                            EDIT<SVG className="edit-svg" src={Edit}/>
                        </Button>
                        <Button bgOnHover="#db4343" bg="#EB5757" color="white">
                            DELETE<SVG className="del-svg" src={Close}/>
                        </Button>
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
                                <HightRiskCard mother={mother}/>
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