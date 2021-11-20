import styled from 'styled-components';

export const Container =  styled.button<{backgroundColor: string}>`
box-shadow:inset 0px 1px 0px 0px #f7c5c0;
background-color:${props => props.backgroundColor? props.backgroundColor : "#fc8d83"};
border-radius:3px;
border:1px solid #d83526;
display:inline-block;
cursor:pointer;
height: 20px;
width: 20px;
transition: transform 0.2s;
margin: 10px 3px 3px 0;

  &:hover {
    transform: scale(1.3);
  }
`;