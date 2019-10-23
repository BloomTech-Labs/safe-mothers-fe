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
  height: 750px;
  overflow: hidden;

  .appCard {
    margin: 48px;
    height: 30%;
  }
  .systemCard {
    width: 30%;
    margin: 20px;
  }
  .cardContainer {
    width: 80%;
  }
`;

const Dashboard = props => {
  return (
    <>
      <MainContainer className="mainContainer">
        <div className="cardContainer">
          <Card
            className="appCard"
            boxShadowSize="xl"
            borderWidth={0}
            borderRadius={0}
            p={4}
            onClick={() => props.history.push('/mothers')}
          >
            <p>Mothers Dashboard Card</p>
          </Card>
          <Card
            className="appCard"
            boxShadowSize="xl"
            borderWidth={0}
            borderRadius={0}
            p={4}
            onClick={() => props.history.push('/drivers')}
          >
            <p>Drivers Card</p>
          </Card>
        </div>
        <Card
          className="systemCard"
          boxShadowSize="xl"
          borderWidth={0}
          borderRadius={0}
          p={4}
        >
          Driver Rankings
        </Card>
      </MainContainer>
    </>
  );
};

export default Dashboard;
