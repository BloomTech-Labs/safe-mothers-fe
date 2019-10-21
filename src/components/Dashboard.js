import React from 'react';
import Mothers from "./Mothers";
import Drivers from "./Drivers";
import {Flex, Box, Text} from 'pcln-design-system'
import styled from 'styled-components'

const Block = styled(Flex)`
    border: 1px solid black;
`;

const Header = styled.div`
    background: #bde0ff;
    padding: 20px;
    height: 80px;
    width: 1100px;
`;

const Dashboard = () => {

    return (
        <>
            <Box mb={4} ml={4} mt={2} width={1}>
                <Flex>
                    <Flex width={1100} flexDirection={"column"}>
                        <Flex mt={2} mb={5}>
                            <Header/>
                        </Flex>
                        <Flex>
                            <Block width={1 / 4} p={2} m={2} flexDirection={"column"}>
                                <Mothers/>
                            </Block>
                            <Block width={1 / 4} p={2} m={2} flexDirection={"column"}>
                                <Drivers/>
                            </Block>
                            <Block width={1 / 4} p={2} m={2} flexDirection={"column"}>
                                <Drivers/>
                            </Block>
                        </Flex>
                    </Flex>
                    <Flex flexDirection={"column"} mt={2} ml={5}>
                        <Block width={1} flexDirection={"column"} mb={3} p={2}>
                            <h4>system up dates</h4>
                            <p>Blablablablablablablablaablablabla</p>
                            <p>Blablablablablablablablaablablabla</p>
                            <p>Blablablablablablablablaablablabla</p>
                            <p>Blablablablablablablablaablablabla</p>
                            <p>Blablablablablablablablaablablabla</p>
                            <p>Blablablablablablablablaablablabla</p>
                            <p>Blablablablablablablablaablablabla</p>
                            <p>Blablablablablablablablaablablabla</p>
                        </Block>
                        <Block width={1} flexDirection={"column"} p={2}>
                            <p>Settings</p>
                        </Block>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
};


export default Dashboard;