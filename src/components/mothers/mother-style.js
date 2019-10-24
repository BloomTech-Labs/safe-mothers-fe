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
    align-items: center;
    width: 100%;
    font-weight: bold;
    border-radius:3px;
     
    p{
        justify-content: space-between;
        width: 33%;
    }
    
    .badge{
        margin-left: 2%;
        min-width: 90px;
        text-align: center;
        height: 27px;
    }

    .inline-badges{
        display: flex;
        justify-content: flex-start;
        margin: 0 20px;
        width: 55%; 
    }
    
    .inline{
        display: flex;
        align-items: center;
        width: 25%;
        justify-content: flex-end;
    }
    
    .name{
        width: 20%; 
        text-align: left;
        padding-left: 1%;
    }
    
    .svg-icon{
        margin-right: 5%
    }
    
    .svg-text{
        font-weight: normal;
        text-align: left;
        padding-left: 3%;
    }
`;



export const Content = styled.div`
    font-family: 'Asap', sans-serif;
    position: relative; 
    display: flex;
    justify-content: center;
    margin-top: 25px;
    width: 90%;
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
        font-weight: bold;
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