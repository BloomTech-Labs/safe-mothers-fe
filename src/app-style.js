import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    font-family: 'Asap', sans-serif;
    a {
        text-decoration: none;
        color: black;
    }
    .time-format{
        display: flex;
        justify-content: flex-end;
        margin-right: 4%;
        font-weight: bold;
    }
`;

export const SearchWrapper = styled.div`
    max-width: 1600px;
    margin: auto;
    .search {
        width: 173px;
        height: 24px;
        background: #FFFFFF;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.08);
        border-radius: 15px;
        border-width:0px;
        border:none;
    };
    .searchLabel{
         font-size: 12px;
         margin-right: 15px;
    };
    .searchIcon{
        position:absolute;
        right:5px;
        width:17px;
    };
    .searchContainer{
         position: relative; 
         display: flex;
         justify-content: flex-end;
         margin: 20px;
         align-items: center;
        
    };
`;