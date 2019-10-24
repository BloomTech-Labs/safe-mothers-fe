import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getMothers} from '../../actions/mothersActions';
import {Accordion, AccordionPanel, Box} from 'grommet';
import AccordionLabel from './AccordionLabel';
import AccordionContent from './AccordionContent';


const Mothers = props => {
    const {mothers} = props;

    useEffect(() => {
        props.getMothers();
    }, []);

    return (
        <>
            <Box>
                {console.log(mothers)}
                <Accordion className="accordion"
                           animate={true}
                           multiple={true}
                           border='1px solid gray'
                           border-radius='25px'
                           margin='small'
                           background='white'>
                    {
                        mothers &&
                        mothers.map((mother, index) => (
                            <AccordionPanel label={<AccordionLabel mother={mother}/>}>
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

