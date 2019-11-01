import styled from 'styled-components';

export const ContentContainer = styled.div`
    width: 50%;
    background: white;
    margin: 3%;
    border: 1.5px solid ${props => props.theme.primary.darkGray};

    @media(max-width: 1024px){
      width: auto;
    }
    
    .form-container{
        width: 75%;
        display: flex;
        flex-direction: column;
        margin: auto;
    }
    .title{
        margin-bottom: 40px;
        margin-top: 40px;
    }
`;

export const SettingsForm = styled.div`

    .labels{
        width: 30%;
        margin-right: 3%;
    }
    ul{
     padding: 0;
    }
    
    .btn-container{
        display: flex;
        justify-content: center;
        margin-bottom: 5%;
    }
`;