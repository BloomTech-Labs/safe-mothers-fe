import React from 'react';
import { Banner, Text, Button } from 'pcln-design-system';
import './MenuBar.css';

const  MenuBar = ({props}) => {
  console.log("MenuBar props",props )
  return (
    <>
      <Banner px={10} py={30} bg="#282E74" color="white" showIcon={false}>
        <div className="BannerContainer">
          <Text className = "text">Hi, Jackie</Text>
          <div className="ButtonContainer">
            <Button className="dashButton"   onClick={() => props.history.push('/mothers')}>
    Mom

            </Button>
            <Button className="dashButton" onClick={() => props.history.push('/drivers')}>
              Driver
            </Button>
            <Button className="dashButton" onClick={() => props.history.push('/settings')}>
              Settings
            </Button>
            <Button className="dashButton"onClick={() => props.history.push('/')}>
              Log Off
            </Button>
          </div>
        </div>
      </Banner>
    </>
  );
};

export default MenuBar;

