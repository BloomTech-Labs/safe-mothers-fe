import React from 'react';
import { WorldMap } from 'grommet';
import style from 'styled-components'


const Map = () => {

    return (
        <>
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
        </>
    )
};
export default Map;