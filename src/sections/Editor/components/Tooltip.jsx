import React from 'react';
import {
  TooltipContainer,
  CoordinatesContainer,
} from '../../../lib/components';

export const Tooltip = ({ top, left, x, y }) => {
  return (
    <TooltipContainer top={top} left={left}>
      <CoordinatesContainer>{`x: ${x}\ny: ${y}`}</CoordinatesContainer>
    </TooltipContainer>
  );
};
