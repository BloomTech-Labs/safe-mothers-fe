import React, {useEffect} from 'react';
import {getMothers} from '../../actions/mothersActions';
import {connect} from 'react-redux';
import styled from 'styled-components';
import DashboardCard from "./DashboardCard";

import {DRIVER, MOTHER} from "./dashboard-utils";

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  align-items: center;
  .board {
    width: 30%;
    margin: 20px;
  }
  .cards{
    width: 80%;
  }
  // .rankingCard {
  //   display: flex;
  //   width: 50%;
  //   height: 70%
  //   justify-content: space-round;
  //   align-content: center;
    
  // }
`;

const Dashboard = props => {
  useEffect(() => {
    props.getMothers();
    
  }, []);
  const DueNow = props => {
    console.log(props.mothers)
return ;

};
console.log(props.mothers)
    return (
      
        <MainContainer className="mainContainer">
            <div className="cards">
                <DashboardCard val1="5" val2="3" val3="4" cardState={MOTHER}/>
                <DashboardCard val1="1" val2="2" val3="1"  cardState={DRIVER}/>
            </div>
            <div className="board">
                {/*Driver Rankings*/}
            </div>
        </MainContainer>
    )
};
const mapStateToProps = state => {
  return {
      mothers: state.mothersReducer.mothers,

  };
};

export default connect(mapStateToProps, {getMothers})
(Dashboard);


