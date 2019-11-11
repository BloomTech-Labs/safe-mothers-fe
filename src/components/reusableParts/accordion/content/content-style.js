import styled from "styled-components";

export const StyledContents = styled.div`
    display: flex;
    justify-content: center;
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
          width: 100%;
        }
    }
   
   
    .list-values{
        padding-left: 6%;
        list-style-type: none; 
        @media (max-width: 1024px) {
          padding-left: 50%;           
        }
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
           width: 40%; 
           margin: auto;
        }
    }

    .att-list{
        text-align: left;
        display:flex; 
        @media (max-width: 1024px) {
           justify-content: flex-start;
            width: 40%;
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
    @media (max-width: 1024px) { 
       width: 100%;
       flex-wrap: wrap;
       margin: 0;
       flex-direction: column;
    }
    .card{
        width: 50%;
        flex-direction: column;
        margin: 0 0;
        @media (max-width: 1024px) {
           width: 100%;
        }
    };
    .divider {
        position:absolute;
        top: 18px;
        @media (max-width: 1024px) {
           display: none;
        }
    };
    .title{
        text-transform: uppercase;
        margin-bottom: 10px;
        font-weight: bold;
        display: inline;
        line-height: 16px;
        min-width: 200px;
        @media (max-width: 1024px) {
           text-align: center;
           background: #f2f8ff;
           width: 90%;
           margin: auto;
           height: 30px;
           padding-top: 6px;
        }
    }
    .status-no{
        color: #C4C4C4;
    }
    .status-yes{ 
        color: red;
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
            width: 40%;
            margin: auto;
        }
     }
     
     .fields {
        text-align: left;
        list-style-type: none; 
        padding-left: 0;
        @media (max-width: 1024px) {
            text-align: left;         
            padding: 0;
            width: 100%;
        }
    }
    
    .values{
        padding-left: 3%;
        text-align: left;
        @media (max-width: 1024px) {
            padding-left: 5%;
            width: 100%;
        }
    }

    .list-break-values{
        color: black;
    }

`;
