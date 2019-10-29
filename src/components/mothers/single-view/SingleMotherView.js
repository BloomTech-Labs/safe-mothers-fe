import React from 'react';
import {connect} from "react-redux";
import styled from 'styled-components';
import PersonalCard from '../cards/PersonalCard';
import ContactsCard from '../cards/ContactsCard';
import FinanceAndInsuranceCard from '../cards/FinanceAndInsuranceCard';
import HightRiskCard from '../cards/HightRiskCard';
import MedicalHistoryCard from '../cards/MedicalHistoryCard';
import SuppliesForPregnancyCard from '../cards/SuppliesForPregnancyCard';


const StyledPageView = styled.div`
        
        font-size: 20px;

        .banner-title{
            text-align: left;
        }

        .align-left{
            align-content: flex-start;
            width: 50%;
            padding: 0%;
        }

        .align-left-values{
            align-content: flex-start;
            width: 50%;
            padding: 0%;
        }

        .align-center.values{
            text-align: left;
        }

        .align-right{
            align-content: flex-start;
            width: 50%;
            text-align: left;
            padding: 0%;
        }

        .align-right.values.high-risk-card{
            align-content: flex-start;
            width: 50%;
            margin-top: 0%;
            padding: 0%;
        }

        .card-container{
            display: flex; 
            flex-direction: column;
        }

        .card{
            align-content: flex-start;
        }

        
        .card-title{
            font-weight: bold;
            text-align: left;
        }


        .grid-top{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr;
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            align-items: stretch;
            text-align: left;
            
            @media (max-width: 1024px) {
                display: block;
                width: 100%;
            }
        }

        .grid-bottom{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 1fr;
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            align-items: stretch;
            text-align: left;
            
            @media (max-width: 1024px) {
                display: block;
                width: 100%;
            }
        }

`


function SingleMotherView(props) {
    const id = props.match.params.id
    const singleMother = props.mothers.filter(mother =>  `${mother.id}` === id)
    return (
        <>
        {singleMother && singleMother.map(mother => 
        (
      <StyledPageView className="single-page-view">
        <h1 className="banner-title">{mother.name}</h1>
        <div className="card-container">
        <div className="grid-top">
            <div className="card">
                <span className="card-title">PERSONAL</span>
                    <PersonalCard mother={mother} />   
            </div>
            <div className="card">
                <span className="card-title">CONTACTS</span>
                    <ContactsCard mother={mother}/>
            </div>
        </div>
        <div className="grid-bottom">
            <div className="card">
                <span className="card-title">FINANCE AND INSURANCE</span>
                    <FinanceAndInsuranceCard mother={mother}/>
            </div>
            <div className="card">
                <span className="card-title">SUPPLIES</span>
                    <SuppliesForPregnancyCard mother={mother}/>
            </div>
            <div className="card">
                <span className="card-title">MEDICAL HISTORY</span>
                    <MedicalHistoryCard mother={mother}/>
            </div>
            <div className="card">
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

export default connect(mapStateToProps,{})(SingleMotherView);