import React from 'react';
import Mothers from "../mothers/Mothers";
import Drivers from "../drivers/Drivers";
import MenuBar from '../MenuBar/MenuBar';


const Dashboard = () => {

    return (
        <>
        <MenuBar />
            <Mothers/>
            <Drivers/>
        </>
    )
};


export default Dashboard;
