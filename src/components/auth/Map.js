import React from 'react';
import { WorldMap } from 'grommet';
import styled from 'styled-components';
import { grommet } from 'grommet/themes';

const Container = styled.div`
    position: absolute;
    justify-items: center;
    display: flex;
    justify-content: center;
    top: 17%;
    padding: 100px;
    width: 60%;
`;

const Map = () => {

    return (
        <Container className="map-container" theme={grommet}>
            <WorldMap
                color="#A9A9A9"
                continents={[
                    {
                        fill: true,
                        name: 'Africa',
                        color: '#F2F2F2',
                        base: '20px',
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