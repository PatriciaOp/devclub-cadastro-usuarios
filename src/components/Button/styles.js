import styled from "styled-components";

export const Button = styled.button`
    border: ${(props) => props.theme === 'primary'
        ? 'none'
        : '1px solid #fff'};

    background: ${(props) => props.theme === 'primary'
        ? 'linear-gradient(180deg, #fe7e5d 0%, #FF6378 100%)'
        : 'transparent'};
    font-size: 16px;
    color: #ffff;
    padding: 16px 32px;
    width: fit-content;
    border-radius: 30px;
    cursor: pointer;

    &:hover {
        ${(props) => props.theme === 'primary' ? ' opacity: 0.8;' : 'background: #fe7e5d'}
    }

    &:active{
        ${(props) => props.theme === 'primary' ? ' opacity: 0.5;' : 'background: #FF6378'}
    }

`