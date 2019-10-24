import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getMothers} from '../../actions/mothersActions';
import {Accordion, AccordionPanel, Box} from 'grommet';
import AccordionLabel from './AccordionLabel';
import AccordionContent from './AccordionContent';
import {defineHighRisk} from "./mother-utils";

const Mothers = props => {
    const {mothers} = props;

    useEffect(() => {
        props.getMothers();
    }, []);

    return (
        <>
            <span className="time-format">DUE DATE DD/MM/YYYY</span>
            <Box>
                {console.log(mothers)}
                <Accordion className="accordion"
                           animate={true}
                           multiple={true}
                           margin='small'
                           background='white'
                >
                    {
                        mothers &&
                        mothers.map((mother, index) => (
                            <AccordionPanel label={<AccordionLabel risk={defineHighRisk(mother)} mother={mother}/>}>
                                <Box background='white'><AccordionContent mother={mother}/> </Box>
                            </AccordionPanel>
                        ))
                    }
                </Accordion>
            </Box>
        </>
    );
};

const mapStateToProps = state => {
    return {
        mothers: state.mothersReducer.mothers
    };
};

export default connect(
    mapStateToProps,
    {getMothers}
)(Mothers);

