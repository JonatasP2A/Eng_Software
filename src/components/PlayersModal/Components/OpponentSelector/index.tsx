import React from 'react';
import { Container } from './styles';


interface OpponentSelectorProps {
    onOponenteNumberSelected: (value: number) => void
}

export const OpponentSelector: React.FC<OpponentSelectorProps> = ({ onOponenteNumberSelected, ...rest }) => {

    return (
        <Container>
            <div >
               <label className="title"> Número de oponentes: </label>
            </div>
            <br/>
            <div className="checkbox">
                <select onChange={(event) => onOponenteNumberSelected(Number(event.target.value))}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
        </Container>
    );
}
