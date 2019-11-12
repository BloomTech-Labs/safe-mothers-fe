import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getDrivers} from "../../../actions/driversActions";
import {Accordion, AccordionPanel, Box} from "grommet/es6";
import AccordionLabel from "./AccordionLabel";
import AccordionContent from "./AccordionContent";
import SearchBanner from "../../reusableParts/banner/SearchBanner";

const DriversList = (props) => {
    const {drivers} = props;


    useEffect(() => {
        props.getDrivers();
    }, []);

    return (
        <>
            <SearchBanner btn_name={"Add driver"} title={"Drivers"} path={"/edit-driver"}/>
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


                                            label={<AccordionLabel driver={driver}/>}>

                                <Box background='white'><AccordionContent driver={driver}/> </Box>
                            </AccordionPanel>
                            }
                        </>
                    ))
                }
            </Accordion>
        </>
    )
};

const mapStateToProps = state => {
    return {
        drivers: state.driversReducer.drivers,

    }
};

export default connect(mapStateToProps, {getDrivers})(DriversList);