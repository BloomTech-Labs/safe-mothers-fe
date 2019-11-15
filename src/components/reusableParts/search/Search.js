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
    const {items, searchPath, name} = props;
    const [suggestions, setSuggestions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const handleSearch = (data) => {
        console.log("drivers ", items);
        if (data.length > 0 && items.length > 0) {
            const keyword_part1 = new RegExp(`^${data}`, 'i');
            const updatedList_part1 = items.sort().filter(item => { if(item[name]){ return item[name].toLowerCase().search(keyword_part1) !== -1 }});
            const keyword_part2 = new RegExp(`${data}`, 'i');
            const updatedList_part2 = items.sort().filter(item =>{if(item[name]){ return item[name].toLowerCase().search(keyword_part2) !== -1}});
            const full_name = updatedList_part1.concat(updatedList_part2);
            setSuggestions(updatedList_part1.concat(updatedList_part2).filter((item,index) => full_name.indexOf(item) === index));
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
                               onFocus={() => setIsOpen(true)}
                               onBlur={() => setIsOpen(false)}
                        />
                    </form>
                </div>
                <Search className="searchIcon"/>
                <Popup name={name} searchPath={searchPath} isOpen={isOpen} items={suggestions}/>
            </div>
        </SearchElement>
    )
};

export default withRouter(StyledSearch);