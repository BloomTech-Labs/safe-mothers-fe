import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getDrivers} from "../actions/driversActions";

const Drivers = (props) => {
    const {drivers} = props;

    useEffect(() => {
        props.getDrivers();
    }, []);

    return (
        <>
            <h3>List of drivers: </h3>
            {drivers && drivers.map((driver, index) =>
                <p key={index}>Firstname: {driver.first_name}, Lastname: {driver.last_name}, lat: {driver.lat}, long: {driver.long}</p>
            )}
        </>
    )
};

const mapStateToProps = state => {
    return {
        drivers: state.driversReducer.drivers,
    }
};

export default connect(mapStateToProps, {getDrivers})(Drivers);