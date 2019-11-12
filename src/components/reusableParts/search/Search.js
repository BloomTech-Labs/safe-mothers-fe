import React, {useState} from 'react';
import styled from 'styled-components';
import {Search} from "grommet-icons/es6/index";
import Popup from "./Popup";

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
    /*  RegExp.escape= function(s) {
          return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      };*/
    const handleSearch = (data) => {
        console.log("data ", data);
        if (data.length > 0) {
            const keyword = data.toLowerCase();
            const pattern = `[A-Za-z.\s]*${keyword}[A-Za-z.\s]*`;
            const matchRegex = new RegExp(pattern);
            const filteredSuggestions = items.filter(item => matchRegex.test(item.name.toLowerCase()));
            setSuggestions(filteredSuggestions);
        }else setSuggestions([]);

    };
    return (
        <SearchElement>
            <div className="searchContainer">
                {/*<p className="searchLabel">SEARCH FOR KEYWORDS</p>*/}
                <div>
                    <input type="text"
                           className="search"
                           placeholder={"Search..."}
                           onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
                <Search className="searchIcon"/>
                <Popup searchPath={searchPath} items={suggestions}/>
            </div>
        </SearchElement>
    )
};

export default StyledSearch;