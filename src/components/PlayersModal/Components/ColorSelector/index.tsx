import React from 'react';
import { Container } from './styles';
import { RED_COLOR, GREEN_COLOR, YELLOW_COLOR, BLUE_COLOR, WHITE_COLOR } from '../../../../constants/colors';

export interface BackgroundColors{
    trueTone: string,
    firstColor: string, 
    secondColor: string
  }

interface ColorSelectorProps {
    onColorSelected: (color:BackgroundColors) => void
}

export const ColorSelector: React.FC<ColorSelectorProps> = ({ onColorSelected, ...rest }) => {

    return (
        <>
            <Container type="button" {...rest} backgroundColor={RED_COLOR.trueTone} onClick={() => onColorSelected(RED_COLOR)}/>
            <Container type="button" {...rest} backgroundColor={BLUE_COLOR.trueTone} onClick={() => onColorSelected(BLUE_COLOR)}/>
            <Container type="button" {...rest} backgroundColor={YELLOW_COLOR.trueTone} onClick={() => onColorSelected(YELLOW_COLOR)}/>
            <Container type="button" {...rest} backgroundColor={GREEN_COLOR.trueTone} onClick={() => onColorSelected(GREEN_COLOR)}/>
            <Container type="button" {...rest} backgroundColor={WHITE_COLOR.trueTone} onClick={() => onColorSelected(WHITE_COLOR)}/>
        </>
    );
}
