import styled from 'styled-components';

export const Container =  styled.div<{}>`
  display:flex;
  margin: 10px 3px 3px 0;
  background-color: 'red';
  justify-content: center;
  align-items: center;

  .checkbox {
    display: flex;
    flex-direction: row;
    color: violet;
  }

  .title{
    font-size: 12px;
    font-family: Verdana, Geneva, Tahoma, sans-serif; //TODO: Essa fonte tá horrível
    letter-spacing: 0.2px;
    color: #ffffff;
    font-weight: 600;
  }

`;