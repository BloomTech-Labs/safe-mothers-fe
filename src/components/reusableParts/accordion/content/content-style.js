import styled from "styled-components";

export const StyledContents = styled.div`
    display: flex;
    justify-content: center;
    //font-size:1vw;
    @media (max-width: 1024px) {
       flex-direction: column;
    }
    li{
        margin-bottom: 10px;
        white-space: nowrap;
     }
    .list{
        list-style-type: none;
        padding: 0;
        @media (max-width: 1024px) {
          padding-left: 8%;
        }
    }
   
   
    .list-values{
        list-style-type: none; 
        color: blue;
    }
    
    .mother-content{
        width: 75%;  
    }
    
    .card{
        display: flex;
        flex-direction: column;
        margin-left: 1%;
        width: 30%;
        @media (max-width: 1024px) {
           width: 50%; 
           flex-wrap: wrap;
           margin: auto;
        }
    }

    .att-list{
        text-align: left;
        display:flex; 
        @media (max-width: 1024px) {
           width: 70%;
        }
    }
`;

export const Content = styled.div`
    position: relative; 
    display: flex;
    justify-content: center;
    margin-top: 25px; 
    margin-left: 3%;
    margin-right: 4%;
    width: 70%;
    //font-size:1vw;
    @media (max-width: 1024px) { 
       width: 100%;
       flex-wrap: wrap;
    }
    .card{
        width: 50%;
        flex-direction: column;
        margin: 0 10px;
        @media (max-width: 1024px) {
           width: 50%;
        }
    };
    .divider {
        position:absolute;
        top: 18px;
    };
    .title{
        text-transform: uppercase;
        margin-bottom: 10px;
        font-weight: bold;
        display: inline;
        line-height: 16px;
        min-width: 200px;
    }
    .status-no{
        color: #C4C4C4;
        //font-weight: 600;
    }
    .status-yes{ 
        color: red;
        //font-weight: 600;
    }
    .high-risk-card{
        margin-top: 0;
    }

    .see-more{
        position: absolute;
        top: 83%;
        left: 0;
        color: blue;
    }
    
`;

export const Card = styled.div`
     li{
        margin-bottom: 15px;
        white-space: nowrap;
     }
      .card-content{
        display: flex;
        justify-content: center;
        @media (max-width: 1024px) {
            justify-content: flex-start;
        }
     }
     
     .align-left {
        text-align: left;
        list-style-type: none; 
        @media (max-width: 1024px) {
            text-align: left;         
            padding: 0;
        }
    }
    
    .values{
        color: #1337F1;
        @media (max-width: 1024px) {
            padding-left: 1%;
        }
    }

    .list-break-values{
        color: black;
    }
    
      .align-right {
        text-align: right;
        list-style-type: none; 
        @media (max-width: 1024px) {
            text-align: left;
            padding: 0;
        }
    };
    
    .align-center{
        text-align: center;
        list-style-type: none; 
        padding: 0;
    }
`;