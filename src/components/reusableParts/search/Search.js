import React, {useState} from 'react';
import styled from 'styled-components';
import {Search} from "grommet-icons/es6/index";
import Popup from "./Popup";
import {withRouter} from "react-router-dom";

export const SearchElement = styled.div`
    .search {
        width: 250px;
        height: 30px;
        background: #FFFFFF;
        padding-left: 5px;
        border-radius: 3px;
        border: 1.5px solid #e5e5e6;
        &:hover{
            border: 1.5px solid #cacacb;
        }
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

const StyledSearch = (props) => {
    const {items, searchPath} = props;
    const [suggestions, setSuggestions] = useState([]);
    const handleSearch = (data) => {
        if (data.length > 0) {
            const updatedList = items.filter(item => item.name.toLowerCase().search(data.toLowerCase()) !== -1);
            setSuggestions(updatedList);
        } else setSuggestions([]);

    };
    return (
        <SearchElement>
            <div className="searchContainer">
                <div>
                    <form onSubmit={() =>
                        props.history.push(`${searchPath}${suggestions[0].id}`)
                    }>
                        <input type="text"
                               className="search"
                               placeholder={"Search..."}
                               onChange={(e) => handleSearch(e.target.value)}
                        />
                    </form>
                </div>
                <Search className="searchIcon"/>
                <Popup searchPath={searchPath} items={suggestions}/>
            </div>
        </SearchElement>
    )
};

export default withRouter(StyledSearch);