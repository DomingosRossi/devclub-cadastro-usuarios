import styled from "styled-components";

export const Button = styled.button`
border: ${props => props.theme === 'primary'
        ? 'none'
        : '1px solid #FF6378'};  
    background: ${props => props.theme === 'primary'
        ? 'linear-gradient(180deg, #fe7e5d, #FF6378 100%)'
        : 'transparent'}; 
    font-size: 16px;
    color: #000000;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;

    &:hover {
        ${props => props.theme === 'primary'
        ? 'background: transparent; border: 1px solid #FF6378'
        : 'background: #FF6378'};
    }

    &:active {
        ${props => props.theme === 'primary'
        ? 'opacity: 0.5'
    : 'background: #00FF00'}
        
    }
`