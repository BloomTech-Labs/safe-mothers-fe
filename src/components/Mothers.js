import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getMothers} from "../actions/mothersActions";

const Mothers = (props) => {
    const {mothers} = props;

    useEffect(() => {
        props.getMothers();
    }, []);

    return (
        <>
            <h3>List of mothers: </h3>
            {mothers && mothers.map((mother, index) =>
                <p key={index}>Firstname: {mother.first_name}, Lastname: {mother.last_name}, age: {mother.age}</p>
            )}
        </>
    )
};
const mapStateToProps = state => {
    return {
        mothers: state.mothersReducer.mothers,
    }
};

export default connect(mapStateToProps, {getMothers})(Mothers);