import React from 'react';
import { WorldMap } from 'grommet';
import styled from 'styled-components'

const Container = styled.div`
position: absolute;
    justify-items: center;
    display: flex;
    justify-content: center;
    top: 15%;
    height: 100%;
    width: 60%;
`;

const Map = () => {

    return (
        <Container>
            <WorldMap
                color="black"
                continents={[
                    {
                        name: 'Africa',
                        color: 'blue',
                        onClick: (name) => {},
                    },
                ]}
                onSelectPlace={(lat, lon) => {}}
                places={[
                    {
                        name: 'Uganda',
                        location: [1.3733, 32.2903],
                        color: 'red',
                        onClick: (name) => {},
                    },
                ]}
                selectColor="accent-2"
            />
        </Container>
    )
};
export default Map;