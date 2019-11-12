import React from 'react';
import styled from "styled-components";
import {SVGBtn} from "./form-items";
import Add from './resources/Add.svg'

const Button = styled.p`
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
        width: 35%;
        .btn-name{
            text-align: center;
        }
        &:hover{
               background: rgb(37,153,37);
        }
`;

export default function AddEntityBtn({history, path, name}) {
    return (
        <Button onClick={() => history.push(path)}>
            <p className="btn-name">{name}</p>
            <SVGBtn bg={"white"} src={Add}/>
        </Button>
    )
}