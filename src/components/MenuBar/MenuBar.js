import React from 'react';
import { Banner, Text, Button } from 'pcln-design-system';
import './MenuBar.css';

const  MenuBar = () => {
  return (
    <>
      <Banner px={10} py={30} bg="#282E74" color="white" showIcon={false}>
        <div className="BannerContainer">
          <Text className = "text">Hi, Jackie</Text>
          <div className="ButtonContainer">
            <Button className="dashButton" >
              Mom
            </Button>
            <Button className="dashButton" >
              Driver
            </Button>
            <Button className="dashButton" >
              Settings
            </Button>
            <Button className="dashButton">
              Log Off
            </Button>
          </div>
        </div>
      </Banner>
    </>
  );
};

export default MenuBar;

