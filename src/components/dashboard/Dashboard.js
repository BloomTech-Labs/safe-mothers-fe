import React, { useEffect } from "react";
import moment from "moment";
import { getMothers } from "../../actions/mothersActions";
import { getDrivers } from "../../actions/driversActions";
import { connect } from "react-redux";
import styled from "styled-components";
import DashboardCard from "./DashboardCard";

import {defineBestDrivers, defineHighRisk, DRIVER, MOTHER} from "./dashboard-utils";

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  align-items: center;
  margin: 0;
  .cards {
    width: 85%;
  }
  ${"" /* .rankingCard {
     display: flex;
     width: 50%;
     height: 70%
     justify-content: space-round;
     align-content: center;
    
   } */}
`;

const Dashboard = props => {
  useEffect(() => {
    props.getDrivers();
    props.getMothers();
  }, []);

  const dueNow = mothers => {
    let num = 0;
    if (mothers) {
      for (let mother of mothers) {
        if (mother.due_now === 1) {
          num = num + 1;
        }
      }
    }
    return num;
  };

  const lateDueDay = mothers => {
    let num = 0;

    const today = moment();
    if (mothers) {
      for (let mother of mothers) {
        let dueDate = moment(mother.edd, "YYYY-MM-DD");
        console.log("dueDate", dueDate, "today", today);
        if (moment(dueDate).isBefore(today)) num = num + 1;
      }
    }
    return num;
  };
  const availability = drivers => {
    let num = 0;
    if (drivers) {
      for (let driver of drivers) {
        if (driver.availability) {
          num = num + 1;
        }
      }
    }
    return num;
  };

  const recent = drivers => {
    let num = 0;
    let today = moment();
    let recentWindow = moment(today).subtract(14, "days");
    if (drivers) {
      for (let driver of drivers) {
        let created = moment(driver.created_at);
        if (moment(created).isBetween(recentWindow, today)) num += 1;
      }
    }
    return num;
  };
  return (
    <MainContainer className="mainContainer">
      <div className="cards">
        <DashboardCard
          val1={dueNow(props.mothers)}
          val2={lateDueDay(props.mothers)}
          val3={defineHighRisk(props.mothers)}
          val4={props.mothers.length > 0 ? props.mothers.length : "No mothers"}
          cardState={MOTHER}
        />
        <DashboardCard
          val1={recent(props.drivers)}
          val2={availability(props.drivers)}
          val3={defineBestDrivers(props.drivers)}
          val4={props.drivers.length > 0 ? props.drivers.length : "No drivers"}
          cardState={DRIVER}
        />
      </div>
    </MainContainer>
  );
};
const mapStateToProps = state => {
  return {
    mothers: state.mothersReducer.mothers,
    drivers: state.driversReducer.drivers
  };
};
export default connect(mapStateToProps, { getMothers, getDrivers })(Dashboard);
