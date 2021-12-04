import styled from 'styled-components';

interface UsersInfosFCProps{
    firstColor: string | undefined,
    secondColor: string | undefined,
}

export const Container = styled.div<UsersInfosFCProps>`
  justify-content: center;
  align-items: center;
  display: flex;

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

  .user_infos {
      flex-direction: row;
      display: flex;
      align-items: center;
  }

  .opponents_infos{
      position: fixed;
      flex-direction: column;
      background-image: linear-gradient(45deg, ${props => props.firstColor ? props.firstColor : 'rgb(161, 68, 68)'},  ${props => props.secondColor ? props.secondColor : 'rgb(161, 68, 68)'});
      padding: 8px;
      border-radius: 8px;
      top: 80px;
      right: -150px;
      display: none;
      z-index: 1;
      width: 350px;

      //TOdo: Não sei se curti essa borda e essa nav flutuante. Checar com o pessoal.
      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
      border-width: 2px;
      border-style: solid;
      border-color: white
  }

  .user_infos:hover .opponents_infos{
      display: initial;
      animation: fade-in 0.5s;
      z-index: 10;
  }

  .user_infos:not(:hover) .opponents_infos.did-fade-in{
      display: initial;
      animation: fade-out 0.5s;
  }

  .item-info{
      flex-direction: row;
      display: flex;
      align-items: center
  }

  .item-title{
      color: white;
      font-weight: bold;
      font-size: 12px;
      font-family: 'Courier New', Courier, monospace; //Essa fonte tá bem ruim
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