import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getDrivers} from "../../../actions/driversActions";
import {Accordion, AccordionPanel, Box} from "grommet/es6";
import AccordionLabel from "./AccordionLabel";
import AccordionContent from "./AccordionContent";
import styled from "styled-components";

const StyledBox = styled.div`
    .add-driver{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 15px;
        cursor: pointer;
        background: rgb(50, 205, 50);
        width: 80px;
        font-weight: bold;
        height: 23px;
        border-radius: 50px;
        color: white;

    }
`




const DriversList = (props) => {
    const {drivers} = props;


    useEffect(() => {
        props.getDrivers();
    }, []);

    return (
        <>
            {console.log("props.history", props.history)}
            <StyledBox>
            <p className="add-driver" onClick = {() => props.history.push("/edit-driver")}>+ Add Driver</p>
                <Accordion className="accordion"
                           animate={true}
                           multiple={false}
                           margin='small'
                           background='white'
                >
                    {
                        drivers &&
                        drivers.map((driver, index) => (
                            <>
                                {driver.name &&
                                <AccordionPanel key={index}

                                         
                                                label={<AccordionLabel  driver={driver}/>}>

                                    <Box background='white'><AccordionContent driver={driver}/> </Box>
                                </AccordionPanel>
                                }
                            </>
                        ))
                    }
                </Accordion>
            </StyledBox>

        </>
    )
};

const mapStateToProps = state => {
    return {
         drivers: state.driversReducer.drivers,

    }
};

export default connect(mapStateToProps, {getDrivers})(DriversList);