import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getDrivers} from "../../../actions/driversActions";
import {Accordion, AccordionPanel, Box} from "grommet/es6";
import AccordionLabel from "./AccordionLabel";
import AccordionContent from "./AccordionContent";


const DriversList = (props) => {
    const {drivers} = props;


    useEffect(() => {
        props.getDrivers();
    }, []);

    return (
        <>
            {console.log("DRIVERS ", drivers)}
            <Box>

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
            </Box>

        </>
    )
};

const mapStateToProps = state => {
    return {
         drivers: state.driversReducer.drivers,

    }
};

export default connect(mapStateToProps, {getDrivers})(DriversList);