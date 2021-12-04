import styled from 'styled-components';

interface DiceFCProps{
    firstColor: string | undefined,
    secondColor: string | undefined,
}

export const DiceCF = styled.div<DiceFCProps>`

    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 20px;

    transition: transform 0.2s;

    &:hover {
        transform: scale(1.1);
    }

    .title {
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace; //Essa fonte tá bem ruim
        color: white;
        letter-spacing: 2px;
    }

    .play_dice{
        position: fixed;
        flex-direction: column;
        background-image: linear-gradient(45deg, ${props => props.firstColor ? props.firstColor : 'rgb(161, 68, 68)'},  ${props => props.secondColor ? props.secondColor : 'rgb(161, 68, 68)'});
        padding: 8px;
        border-radius: 8px;
        top: 80px;
        right: -250px;
        display: none;
        z-index: 1;
        width: 350px;

        //TOdo: Não sei se curti essa borda e essa nav flutuante. Checar com o pessoal.
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
        border-width: 2px;
        border-style: solid;
        border-color: white
    }

    &:hover .play_dice{
      display: initial;
      animation: fade-in 0.5s;
      z-index: 10;
    }

    &:not(:hover) .play_dice.did-fade-in{
      display: initial;
      animation: fade-out 0.5s;
    }

    @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;