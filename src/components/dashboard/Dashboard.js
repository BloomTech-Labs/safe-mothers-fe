import React from 'react';
import Mothers from '../mothers/Mothers';
import Drivers from '../drivers/Drivers';
import MenuBar from '../menubar/MenuBar';
import { Card } from 'pcln-design-system';
import './Dashboard.css';

const Dashboard = props => {
  console.log('Hello from Dashboard Props', props);
  return (
    <>
      <MenuBar props = {props}/>
      <div className="mainContainer">
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
          className="systemBoard"
          boxShadowSize="xl"
          borderWidth={0}
          borderRadius={0}
          p={4}
        >
          Driver Rankings
        </Card>
      </div>
      {/* <Mothers /> */}
      {/* <Drivers /> */}
    </>
  );
};

export default Dashboard;
