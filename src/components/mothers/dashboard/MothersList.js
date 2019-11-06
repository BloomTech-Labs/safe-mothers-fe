import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getMothers} from '../../../actions/mothersActions';
import {Accordion, AccordionPanel, Box} from 'grommet';
import AccordionLabel from './AccordionLabel';
import AccordionContent from './AccordionContent';
import {defineHighRisk} from "../mother-utils";
import settingsReducer from "../../../reducers/settingsReducer";
import AddEntityBtn from "../../reusableParts/AddEntityBtn";


const Mothers = props => {
    const {mothers} = props;

    useEffect(() => {
        props.getMothers();
    }, []);

    return (
        <>
            <Box>
                <AddEntityBtn name="Add Mother" history={props.history} path={"/edit-mother"} />
                <Accordion className="accordion"
                           animate={true}
                           multiple={false}
                           margin='small'
                           background='white'
                >
                    {
                        mothers &&
                        mothers.map((mother, index) => (
                            <>
                                {mother.name &&
                                <AccordionPanel key={index}
                                                label={<AccordionLabel risk={defineHighRisk(mother)} mother={mother}/>}>
                                    <Box background='white'><AccordionContent mother={mother}/> </Box>
                                </AccordionPanel>
                                }
                            </>
                        ))
                    }
                </Accordion>
            </Box>
        </>
    );
};

const mapStateToProps = state => {
    return {
        mothers: state.mothersReducer.mothers,
    };
};

export default connect(mapStateToProps, {getMothers})(Mothers);

