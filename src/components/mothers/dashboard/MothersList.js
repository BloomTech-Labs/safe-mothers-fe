import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getMothers} from '../../../actions/mothersActions';
import {Accordion, AccordionPanel, Box} from 'grommet';
import AccordionLabel from './AccordionLabel';
import AccordionContent from './AccordionContent';
import {highRisk} from "../mother-utils";
import SearchBanner from "../../reusableParts/banner/SearchBanner";
import Header from "../../reusableParts/accordion/Header";


const Mothers = props => {
    const {mothers} = props;

    useEffect(() => {
        props.getMothers();
    }, []);

    return (
        <>
            <SearchBanner searchPath={"/mothers/"} btn_name={"Add mother"} title={"Mothers"} path={"/mother-form"} items={mothers}/>
            <Box>
                <Header info={"Season"}/>
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
                                                label={<AccordionLabel risk={highRisk(mother)} mother={mother}/>}>
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

