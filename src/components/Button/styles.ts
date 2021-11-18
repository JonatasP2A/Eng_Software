import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
box-shadow:inset 0px 1px 0px 0px #f7c5c0;
background:linear-gradient(to bottom, #fc8d83 5%, #e4685d 100%);
background-color:#fc8d83;
border-radius:6px;
border:1px solid #d83526;
display:inline-block;
cursor:pointer;
color:#ffffff;
font-family:Arial;
font-size:15px;
font-weight:bold;
padding:6px 24px;
text-decoration:none;
text-shadow:0px 1px 0px #b23e35;
transition: background-color 0.2s;
margin-top: 10px;

  &:hover {
    background:linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);
    background-color:#e4685d;
  }
`;
