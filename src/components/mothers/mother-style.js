import styled from "styled-components";

export const Palette = styled.div`
    font-family: 'Asap', sans-serif;
    background: #fff;
    align-item: center;
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    
    .active {
        height: 105%;
        width: 115%;
        z-index: 1;
        left: 0px;
        top: 0px;
        border: 1.5px solid white;
        box-shadow: 0px 0px 6px 0px rgba(91, 87, 87, 0.62);
    }
    
    .palette-label{
        font-size: 14px;
    }
    
    .boxes{
        position: relative;
        width: 100%;
        height: 33px;
        display: flex;
        justify-content: center;
    }
    
    .box{ 
        width: 10%;
        height: 35px; 
        background-color: #fff;
        position: relative;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    } 
    
    .color{
        height: 100%;
        width: 100%;
        cursor: pointer;
        position: absolute;
         &:hover{
            height: 105%;
            width: 115%;
            z-index: 1;
            left: -2px;
            top: -1px;
            border: 1.5px solid white;
            box-shadow: 0px 0px 6px 0px rgba(91, 87, 87, 0.62);
        }
    }
    
    .box1{
        background: ${props => props.theme.palette.red};     
        cursor: pointer;
    }
    
    .box2{
        background:  ${props => props.theme.palette.blue};
        cursor: pointer;
    }
    
    .box3{
        background:  ${props => props.theme.palette.yellow};
        cursor: pointer;
    }
    
    .box4{
        background:  ${props => props.theme.palette.lightPink};
        cursor: pointer;
      
    }
    
    .box5{
        background:  ${props => props.theme.palette.orange};
        cursor: pointer;
    }
    
    .box6{
        background:  ${props => props.theme.palette.deepPink};
        cursor: pointer;
    }
    
    .box7{
        background:  ${props => props.theme.palette.green};
        cursor: pointer;
    }
    .box8{
        background:  ${props => props.theme.palette.black};
        cursor: pointer;
    }
    .box9{
        background:  ${props => props.theme.palette.plum};
        cursor: pointer;
    }
    .box10{
        background:  ${props => props.theme.palette.rebeccaPurple};
        cursor: pointer;
    }
    .box11{
        background:  ${props => props.theme.palette.gray};
        cursor: pointer;
    }
`;

export const BadgeLimit = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .limit-icon{
         width: 20%;
        height: 20%;
    }
    .limit-text{
        font-family: 'Asap', sans-serif;
        color: red;
        text-transform: uppercase;
        font-size: 14px;
    }
`;

