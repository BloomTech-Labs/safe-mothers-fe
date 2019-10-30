import React from 'react';
import { Card } from 'pcln-design-system';
import styled from 'styled-components';
import SVG from 'react-inlinesvg/lib/index';
import motorcyle from './motorcycle.svg';
import pregnant from '../mothers/resources/Pregnant.svg';
import GridItems from 'react-inlinesvg';


const MainContainer = styled.div`
  display: flex;
  justify-content: space-round;
  height: 850px;
  overflow: hidden;
  align-items: center;

  .appCard {
    margin: 48px;
    height: 30%;
    display: flex;
  justify-content: space-round;
  
  overflow: hidden;
  align-items: center;
  }
  
  .systemCard {
    width: 30%;
    margin: 20px;
  }
  .cardContainer {
    width: 80%;
  }
`;
export const GridItem = styled.div`
  h4 {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  > div {
    align-items: center;
    
    justify-content: center;
    margin-top: auto;
  }

  svg {
    height: auto;
    width: 100%;
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
            p={0}
            onClick={() => props.history.push('/mothers')}
          >
            <GridItem><p>Mothers</p>
            <SVG src={pregnant} ></SVG></GridItem>
            <GridItem> <h4>5</h4><p>Due within 30 days</p></GridItem>
            <GridItem> <h4>5</h4><p>Late Due Day</p></GridItem>
            <GridItem><h4>5</h4><p>High Risk</p></GridItem>
            </Card>
          <Card
            className="appCard"
            boxShadowSize="xl"
            borderWidth={0}
            borderRadius={0}
            p={0}
            onClick={() => props.history.push('/drivers')}
            >
            <GridItem><p>Drivers</p>
            <SVG src={motorcyle} ></SVG></GridItem>
            <GridItem> <h4>5</h4><p>New Drivers</p></GridItem>
            <GridItem> <h4>5</h4><p>Active Drivers</p></GridItem>
            <GridItem><h4>5</h4><p>Active 5 Stars</p></GridItem>
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
