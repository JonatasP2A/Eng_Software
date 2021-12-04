import styled from 'styled-components';



export const CashCF = styled.div<{}>`

    display: flex;
    flex-direction: row;
    align-items: center;

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
`;