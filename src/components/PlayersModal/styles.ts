import styled, { css } from 'styled-components';

export const Modal = styled.button<{ firstColor: string, secondColor: string }>`
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    transition: all 2s;


    background-image: linear-gradient(45deg, ${props => props.firstColor ? props.firstColor : 'rgb(161, 68, 68)'}, ${props => props.secondColor ? props.secondColor : 'rgb(161, 68, 68)'});
    border:solid 1px;
    border-radius:20px;

    .modal_img { 
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 3%
    }

    .modal_form { 
        padding-left: 5%;
        padding-right: 5%;
        padding-bottom: 5%;
    }

    .btn { 
        display: flex;
        justify-content: center;
        padding-left: 10%;
        padding-right: 10%;
    }
`;