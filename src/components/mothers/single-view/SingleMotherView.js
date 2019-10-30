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


const StyledPageView = styled.div`
        
        font-size: 18px;
        background: white;

        a{
            padding-right: 2%;
        }

        ul {
            margin: 0%;
        }

        li{
            margin-bottom: 1%;
        }

        .banner{
            align-items: center;
            display: flex; 
        }

        .banner-title{
            text-align: left;
            padding-right: 20%;
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
            padding: 0%;
            margin: 0%;


            @media (max-width: 1024px){
                text-align: center;
            }
        }

        .align-left values{
            align-content: flex-end;
            width: 50%;
            padding: 0%;
            color: black;

            @media (max-width: 1024px){
                align-content: center;
                width: 0%;
            }
        }

        .align-center.values{
            text-align: left;
        }

        .align-right{
            align-content: flex-start;
            width: 50%;
            text-align: left;
            padding: 0%;

            @media (max-width: 1024px){
                text-align: center;
            }
        }

        .align-right.values.high-risk-card{
            align-content: flex-start;
            width: 50%;
            margin-top: 0%;
            padding: 0%;
            margin-bottom: 0%;

            li{
                color: red;
                margin-bottom: 0%;
              }

            p{
                margin-bottom: 0%;
                margin-top: 0%;
            }

            @media (max-width: 1024px){
                text-align: center;
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
            }

            .centered{
                text-align: center;

                
                li{
                    text-align:center
                }

                .card-title{
                    padding-right: 20%;
                }
            }

            .increased {
                width: 125%;
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
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            align-items: stretch;
            text-align: left;
            margin-bottom: 2%;
            
            @media (max-width: 1024px) {
                display: block;
                width: 100%;
                text-align: center;
                align-content: center;
            }

            li{
                margin-top: 1%;
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
        <div className="banner">
            <h1 className="banner-title">{mother.name}</h1>
            <a className="spv-btn">EDIT<SVG src={Edit} /></a>
            <a className="spv-btn">DELETE<SVG src={Close} /></a>
        </div>
        <div className="card-container">
        <div className="grid-top">
            <div className="card reduced"> 
                <span className="card-title">PERSONAL</span>
                    <PersonalCard mother={mother} />   
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

export default connect(mapStateToProps,{})(SingleMotherView);