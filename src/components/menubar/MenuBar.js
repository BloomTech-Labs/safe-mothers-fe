import React from 'react';
import { Banner, Text, Button as MButton } from 'pcln-design-system';
import './MenuBar.css';
import styled from 'styled-components';
import SVG from 'react-inlinesvg/lib/index';

const TextBox = styled(Text)`
  font-size: 1.5rem;
`;

const MenuButton = styled(MButton)`
  border-radius: 500px;
  height: 70px;
  font-size: 1.2rem;
  margin: 10px;
  background:white;
  text: #282E74;
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuBar = ({ props }) => {
  console.log('MenuBar props', props);
  return (
    <>
      <Banner px={10} py={30} bg="#282E74" color="white" showIcon={false}>
        <BannerContainer>
          <TextBox className="text">Hi, Jackie</TextBox>
          <div className="ButtonContainer">
            <MenuButton
              className="dashButton"
              onClick={() => props.history.push('/mothers')}
            >
              Mom
            </MenuButton>

            <MenuButton
              className="dashButton"
              onClick={() => props.history.push('/drivers')}
            >
              {' '}
              Driver
            </MenuButton>
            <MenuButton
              className="dashButton"
              onClick={() => props.history.push('/settings')}
            >
              {' '}
              Settings
            </MenuButton>
            <MenuButton
              className="dashButton"
              onClick={() => props.history.push('/')}
            >
              Log Off
            </MenuButton>
          </div>
        </BannerContainer>
      </Banner>
    </>
  );
};

export default MenuBar;
