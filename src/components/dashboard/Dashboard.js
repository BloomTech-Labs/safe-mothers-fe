import React from 'react';
import Mothers from '../mothers/Mothers';
import Drivers from '../drivers/Drivers';
import MenuBar from '../menubar/MenuBar';
import { Card } from 'pcln-design-system';
import styled from 'styled-components';
import SVG from 'react-inlinesvg/lib/index';

import './Dashboard.css';

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardContainer = styled.div`
  width: 80%;
`;

const SystemCard = styled(Card)`
  width: 30%;
  margin: 20px;


`;

const AppCard = styled(Card)`
  margin: 48px;
  `;
const Dashboard = props => {
  console.log('Hello from Dashboard Props', props);
  return (
    <>
      <MenuBar props = {props}/>
      <MainContainer>
        <CardContainer>
          <AppCard
            boxShadowSize="xl"
            borderWidth={0}
            borderRadius={0}
            p={4}
            onClick={() => props.history.push('/mothers')}
          >
            <p>Mothers Dashboard Card</p>
          </AppCard>
          <AppCard
            boxShadowSize="xl"
            borderWidth={0}
            borderRadius={0}
            p={4}
            onClick={() => props.history.push('/drivers')}
          >
            <p>Drivers Card</p>
          </AppCard>
        </CardContainer>
        <SystemCard
          boxShadowSize="xl"
          borderWidth={0}
          borderRadius={0}
          p={4}
        >
          Driver Rankings
        </SystemCard>
      </MainContainer>
      {/* <Mothers /> */}
      {/* <Drivers /> */}
    </>
  );
};

export default Dashboard;
