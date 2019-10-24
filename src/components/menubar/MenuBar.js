import React from 'react';
import {Banner, Text, Button} from 'pcln-design-system';
import './MenuBar.css';
import styled from 'styled-components';
import SVG from 'react-inlinesvg/lib/index';
import {connect} from "react-redux";
import {logout} from "../../actions/authActions";
import authReducer from "../../reducers/authReducer";
import {Link} from "react-router-dom";

const BannerContainer = styled.div`
  font-family: 'Asap', sans-serif;
  display: flex;
  justify-content: space-between;
  .text {
    font-size: 1.5rem;
  }
  .dashButton{
  border-radius: 500px;
  height: 70px;
  font-size: 1.2rem;
  margin: 10px;
  background: #282E74;

  }
`;

// const TextBox = styled(Text)`
//   font-size: 1.5rem;
// `;
//
// const MenuButton = styled(MButton)`
//   border-radius: 500px;
//   height: 70px;
//   font-size: 1.2rem;
//   margin: 10px;
//   background: white;
//   text: #282e74;
//
//   &:hover {
//     background: ${props => props.theme.primary.gray};
//   }
// `;

const MenuBar = (props) => {
    return (
        <>
            <Banner px={10} py={30} bg="#282E74" color="white" showIcon={false}>
                <BannerContainer>
                    <Text className="text">Hi, Jackie</Text>
                    <div className="ButtonContainer">
                        <Link to="/mothers">
                            <Button className="dashButton"> Mom</Button>
                        </Link>

                        <Button className="dashButton">
                            {' '}
                            Driver
                        </Button>
                        <Button className="dashButton">
                            {' '}
                            Settings
                        </Button>

                        <Button className="dashButton" onClick={() => props.logout()}>
                            Log Off
                        </Button>
                    </div>
                </BannerContainer>
            </Banner>
        </>
    );
};

export default connect( "", {logout})(MenuBar);
