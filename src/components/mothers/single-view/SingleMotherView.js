import React from 'react';
import {connect} from "react-redux";

import PersonalCard from '../cards/PersonalCard';
import BirthPreparedness from '../cards/BirthPreparedness';
import Demographics from '../cards/Demographics';
import HightRiskCard from '../cards/HightRiskCard';
import SuppliesForPregnancyCard from '../cards/SuppliesForPregnancyCard';
import Introduction from '../cards/Introduction';
import PregnancyHistory from '../cards/PregnancyHistory';
import Banner from '../../reusableParts/banner/Banner';

import { StyledPageView } from '../../reusableParts/SinglePageStyle';
import {deleteMother} from "../../../actions/mothersActions";


function SingleMotherView(props) {
    const id = props.match.params.id;
    const singleMother = props.mothers.filter(mother => `${mother.id}` === id);
    return (
        <>
            {singleMother && singleMother.map(mother => (
                <StyledPageView className="single-page-view">
                    <Banner back={"/mothers"} person= {mother.name} path={`/mother-form/${id}`}  delete={() => props.deleteMother(id, props)}/>
                    <div className="card-container">
                        <div className="grid-top">
                            <div className="card">
                                <span className="card-title">INTRODUCTION</span>
                                <Introduction mother={mother}/>
                                <span className="card-title">PERSONAL</span>
                                <PersonalCard mother={mother}/>
                                <span className="card-title">SUPPLIES</span>
                                <SuppliesForPregnancyCard mother={mother}/>
                            </div>
                            <div className="card">
                                <span className="card-title">RISK</span>
                                <HightRiskCard state={true} mother={mother}/>
                                <span className="card-title">BIRTH PREPAREDNESS</span>
                                <BirthPreparedness mother={mother}/>
                                <span className="card-title">PREGNANCY HISTORY</span>
                                <PregnancyHistory mother={mother}/>
                            </div>
                            <div className="card">
                                <span className="card-title">DEMOGRAPHICS</span>
                                <Demographics mother={mother}/>
                            </div>
                        </div>
                        <div className="grid-center">
                            <div className="card">
                            </div>
                            <div className="card">
                            </div>
                            <div className="card">
                            </div>
                        </div>
                        <div className="grid-bottom">
                            <div className="card">
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

export default connect(mapStateToProps, {deleteMother})(SingleMotherView);

