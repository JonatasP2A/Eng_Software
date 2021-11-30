import styled from 'styled-components';

interface NavbarProps{
    firstColor: string | undefined,
    secondColor: string | undefined,
}

export const NavbarCF = styled.div<NavbarProps>`

    background-image: linear-gradient(45deg, ${props => props.firstColor ? props.firstColor : 'rgb(161, 68, 68)'},  ${props => props.secondColor ? props.secondColor : 'rgb(161, 68, 68)'});
    max-height: 70px;
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: row;
    display: flex;
    justify-content: space-between;

    .user_infos {
        flex-direction: row;
        display: flex;
        align-items: center;
    }

    .user_title {
        font-size: 20px;
     
        font-family: 'Courier New', Courier, monospace;
        color: white;
    }

`;