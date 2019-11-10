import React from 'react';
import styled from "styled-components";
import {SVGBtn} from "./form-items";
import Add from './resources/Add.svg'

const Button = styled.p`
    .btn{
        white-space: nowrap;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 15px;
        cursor: pointer;
        background: rgb(50, 205, 50);
        font-weight: bold;
        height: 30px;
        border-radius: 50px;
        color: white;
        width: 15%;
        &:hover{
               background: rgb(37,153,37);
        }
    }
`;

export default function AddEntityBtn({history, path, name}) {
    return (
        <Button><div onClick={() => history.push(path)}> {name}</div><SVGBtn bg={"rgb(98,205,92)"} src={Add}/></Button>
    )
}