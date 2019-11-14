import styled from "styled-components";

export const StyledBanner = styled.div`
    .banner{
        align-items: center;
        height: 60px;
        display: flex; 
        justify-content: space-between;
        text-align: center;
        //color: white;
        background: white;
        z-index: 10;
        width: 100%;
        min-width: 800px;
        right: 0;
        box-shadow: 0 3px 3px 0 rgb(215, 211, 215);
        position: ${props => props.position > 120 ? "fixed" : "absolute"};
        top: ${props =>{
        if(props.position > 120 && props.position < 179) return `${props.banner_position}px`;
        if(props.position > 179) return "0px";
        return "60px";
        }};
    }

    @media (max-width: 1024px){
        align-items: center;
        flex-direction: row;
        justify-content: space-around;
    }

    .banner-title{
        margin-left: 3%;
        white-space: nowrap;
        @media (max-width: 800px){
            visibility: hidden;
        }
    }

    .btn-container{
        display: flex;
        min-width: 350px;
        margin-top: 15px;
        margin-right: 2%;
        margin-bottom: 15px;
        justify-content: space-evenly;
        align-items: center;
        @media (max-width: 1024px){
            width: 60%;
        }
    }
    
    .search-container{
        display: flex;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
        margin-right: 1%;
        margin-left: 2%;
    }
    
    .back{
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        cursor: pointer;
        p{
            font-size: 1rem;
            text-transform: uppercase;       
        }
    }

    .submit-btn{
        height: 30px;
    }
`;