import styled from "styled-components";

export const StyledContents = styled.div`
    display: flex;
    justify-content: center;
    .list{
        list-style-type: none;
    }

    .list-values{
        list-style-type: none; 
        color: blue;
    }
    .mother-content{
        width: 75%;  
    };

    .att-list{
        font-family: 'Asap', sans-serif;
        text-align: left;
        display:flex;
        width: 25%;
    }
`;


export const StyledLabel = styled.div`
    font-family: 'Asap', sans-serif;
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-weight: bold;
    border-radius:3px;

    p{
        justify-content: space-between;
        width: 33%;
    }

    .badge{
        margin-left: 7%;
        min-width: 80px;
        text-align: center;
    }

    .label-left{
        margin-left: 2%;
        text-align: left;
        justify-content: space-evenly;
    }

    .label-right{
        text-align: right;
    }
`;



export const Content = styled.div`
    font-family: 'Asap', sans-serif;
    position: relative; 
    display: flex;
    justify-content: center;
    margin-top: 25px;
    width: 90%;
    margin-right: 1%;
    li{
         margin-bottom: 15px;
    }
    .card{
        display: flex;
        flex-direction: column;
        margin: 0 10px;
    };
    .card-content{
        display: flex;
        line-height: 16px;
     };
    .divider {
        position:absolute;
        top: 18px;
    };
    .align-left {
        text-align: left;
        list-style-type: none; 
    };
    .align-right {
        text-align: right;
        list-style-type: none; 
    };
    .title{
        text-transform: uppercase;
        margin-bottom: 10px;
        font-weight: 1000;
        display: inline;
        line-height: 16px;
        min-width: 200px;
    };
    .values{
        color: #1337F1;
    };
    .status-no{
        color: #C4C4C4;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
    };
    .status-yes{ 
        color: red;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
    };
    
`;