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
    margin: 10px;
    border-radius: 10px;
    z-index: 1;
    
    //TOdo: Não sei se curti essa borda e essa nav flutuante. Checar com o pessoal.
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    border-width: 2px;
    border-style: solid;
    border-color: white;



    .infos {
        flex-direction: row;
        display: flex;
        align-items: center;
    }
`;