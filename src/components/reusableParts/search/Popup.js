import React from 'react';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";

const StyledPopup = styled.div`
    position: absolute;
    top: 28px;
    display: flex;
    flex-direction: column;
    .content{
        width: 250px;
        background: white;
        border: 1.5px solid #e5e5e6;
    }
    .row{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 30px;
        background: #FFFFFF;
        padding-left: 5px;
        cursor: pointer;
        &:hover{
            background: #fffa6a;
        }
    }
`;
function Popup(props) {
    const {items, searchPath, isOpen, name, field} = props;

    return (
        <>
            {(isOpen && items.length > 0)&&
            <StyledPopup>
                <div className="content">
                    {items.map(item =>
                        <div className="row" onMouseDown={(e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            field();
                        }}
                             onClick={() => {
                            props.history.push(`${searchPath}${item.id}`)

                        }}>
                            {item[name]}
                        </div>
                    )}
                </div>
            </StyledPopup>
            }
        </>
    )
}

export default withRouter(Popup);