import styled, { css } from 'styled-components';

interface ModalProps{
    firstColor: string,
    secondColor: string,
    visible: boolean,
}

export const Modal = styled.div<ModalProps>`
    text-align: center;
    ${props => props.visible ? 
    css`
        visibility: visible;
        opacity: 1;
        transition: opacity 2s linear;
    `: 
    css`
        transition: visibility 0s 2s, opacity 2s linear;
        visibility: hidden;
        opacity: 0;
    `};
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-image: linear-gradient(45deg, ${props => props.firstColor ? props.firstColor : 'rgb(161, 68, 68)'}, ${props => props.secondColor ? props.secondColor : 'rgb(161, 68, 68)'});
    transition: background-image 2s;//TODO: Transição não funciona. This is sad :(
    transition: display 2s;//TODO: Transição não funciona. This is sad :(
    border:solid 1px;
    border-radius:20px;

    .hidden {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s 2s, opacity 2s linear;
    }

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