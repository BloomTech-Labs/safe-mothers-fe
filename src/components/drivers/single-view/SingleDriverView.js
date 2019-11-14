import React from 'react';
import {connect} from "react-redux";
import styled from "styled-components";

import PersonalCard from '../cards/PersonalCard';
import MotorcycleCard from '../cards/MotorcycleCard';
import ContactCard from '../cards/ContactCard';
import AspirationCard from '../cards/AspirationCard';
import Banner from '../../reusableParts/banner/Banner';
import {deleteDriver} from '../../../actions/driversActions';

import { StyledPageView } from '../../reusableParts/SinglePageStyle';



function SingleDriverView(props) {
    const id = props.match.params.id;
    const singleDriver = props.drivers.filter(driver => `${driver.id}` === id);
    return (
        <>
            {singleDriver && singleDriver.map(driver => (
                <StyledPageView className="single-page-view">
                    <Banner back={"/drivers"} person= {driver.driver_name} path={`/driver-form/${id}`} delete={() => props.deleteDriver(id, props)}  />
                    <div className="card-container">
                        <div className="grid-top driver">
                            <div className="card">
                                <span className="card-title">PERSONAL INFO</span>
                                <PersonalCard driver={driver}/>
                            </div>
                            <div className="card">
                                <span className="card-title">BODA DETAIL</span>
                                <MotorcycleCard driver={driver}/>
                            </div>
                            <div className="card">
                                <span className="card-title">CONTACT INFO</span>
                                <ContactCard driver={driver}/>
                            </div>
                            <div className="card">
                                <span className="card-title">BIO</span>
                                <AspirationCard state={true} driver={driver}/>
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
        drivers: state.driversReducer.drivers
    };
};

export default connect(mapStateToProps,{deleteDriver})(SingleDriverView);