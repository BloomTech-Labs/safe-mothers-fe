import styled from 'styled-components';

export const StyledPageView = styled.div` 
    font-size: 16px;
    background: white;
    margin-top: 50px;
    max-width: 1500px;
    margin: 50px auto;
    border: 1.5px solid #EEEEEF;
        .edit-svg{
            color:white;
        }
  
    }

    .list-break-values{
        color: #107896; 
    }

    .supply-values{
        text-align: right;
        padding-left: 0px;
        color: #107896;
        margin-right: 200px;

        @media(max-width: 1024px){
            margin-right: 0px;
        }
    }

    .spv-card{
        width: 100%;
    }

    .card{
        display: flex;
        width: 100%;
        align-items: flex-start;
        align-content: space-between;
        flex-direction: column;

        @media (max-width: 1024px) {
            width: 100%;
            align-items: stretch;
        }
        
        .card-content{
            display: flex;
            justify-content: space-between;
            width: 91%;

            @media(max-width: 1024px){
                display: flex;
                width: 50%;
                justify-content: center;
            }
        }

        .single{
            
            @media(max-width: 1024px){
                display: flex;
                justify-content: center
                width: 50%;

            }
        }

        .fields{
            display: flex;
            flex-direction: column;
            text-align: left;
            margin-right: 10px;
        }
    
        .values{
            text-align: right;
            color: #107896;
            text-transform: lowercase;
            display: flex;
            flex-direction: column;
            align-content: flex-end;

            @media (max-width: 1024px) {
                text-align: left;
                align-content: flex-start;
            }
    
            p{
                margin-top: 0px;
                margin-bottom: 0px;
            }
        }
    }

    .card-title{
        font-weight: bold;
        text-align: center;
        text-decoration: underline;

        @media (max-width: 1024px) {
            text-decoration: none;
            background: #e7f0fa;
            height: 30px;
            justify-content: center;
            align-items: center;
            display: flex;
        }

    }
    
    .grid-top{
        display: grid;
        border-bottom: 1.5px solid #F9FBFC;
        margin-top: 15px;
        margin-left: 50px;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 80px;
        grid-row-gap: 0;

        @media (max-width: 1400px){
            grid-column-gap: 40px;
        }

        @media (max-width: 1200px){
            grid-column-gap: 20px;
        }
         
        @media (max-width: 1024px) {
            margin-left: 0px;
            border-bottom: none;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: column;
            width: 100%;
            text-align: center;
        }
        
    }

    .driver{
        display: grid;
        border-bottom: 1.5px solid #F9FBFC;
        margin-top: 15px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 30px;
        grid-row-gap: 0;

        @media (max-width: 1400px){
            grid-column-gap: 15px;
        }

        @media (max-width: 1200px){
            grid-column-gap: 5px;
        }
         
        @media (max-width: 1024px) {
            margin-left: 0px;
            border-bottom: none;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: column;
            width: 100%;
            text-align: center;
        }
    }
    
    .grid-center{
        display: grid;
        margin-top: 15px;
        margin-left: 50px;
        border-bottom: 1.5px solid #F9FBFC;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0;
        grid-row-gap: 0;
         
        @media (max-width: 1024px) {
            margin-left: 0px;
            border-bottom: none;
            display: block;
            width: 100%;
            text-align: center;
        }
        
    
    }
    
    .grid-bottom{
        display: grid;
        margin-top: 15px;
        margin-left: 50px;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0;
        grid-row-gap: 0;
         
        @media (max-width: 1024px) {
            margin-left: 0px;
            display: block;
            width: 100%;
            text-align: center;
        }
       
    
    }
`;