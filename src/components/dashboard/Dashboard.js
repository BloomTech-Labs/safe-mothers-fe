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
  align-items: flex-start;

  .appCard {
    margin: 78px;
    height: 78%;
    display: flex;
  justify-content: space-round;
  overflow: hidden;
  align-items: center;
  
  }
  
  .systemCard {
    display: flex;
    width: 50%;
    height: 35%
    justify-content: space-round;
    align-content: center;
   
  }
  .cardContainer {
    width: 50%;
    
  }
  // .rankingCard {
  //   display: flex;
  //   width: 50%;
  //   height: 70%
  //   justify-content: space-round;
  //   align-content: center;
    
  // }
`;
export const GridItem = styled.div`
  h4 {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  
  h3 {
    
    text-align: center;
  }

p {
padding: 20px

}
  > div {
    align-items: center;
    justify-content: center;
    margin-top: auto;
  }

  svg {
    height: auto;
    width: 100%;
    padding-left:0.5px
    padding-top-bottom-right-left:60px
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
          className="rankingCard"
          boxShadowSize="xl"
          borderWidth={0}
          borderRadius={0}
          p={0}
        >
          {/* <GridItem><h3>Driver Rankings Board</h3></GridItem> */}
        </Card>
      </MainContainer>
    </>
  );
};

export default Dashboard;
