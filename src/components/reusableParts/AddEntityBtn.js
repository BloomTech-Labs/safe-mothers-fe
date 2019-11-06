import React from 'react';
import styled from "styled-components";
const Button = styled.p`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 15px;
        cursor: pointer;
        background: rgb(50, 205, 50);
        width: 80px;
        font-weight: bold;
        height: 23px;
        border-radius: 50px;
        color: white;
`;

export default function AddEntityBtn({history, path, name}) {
    return (
        <Button onClick = {() => history.push(path)}>+ {name}</Button>
    )
}