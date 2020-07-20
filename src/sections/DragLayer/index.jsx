import React from 'react';
import { useDragLayer } from 'react-dnd';
import { CustomDragLayerContainer, Word } from '../../lib/components';

const getStyles = (currentOffset) => {
  if (!currentOffset) {
    return { display: 'none' };
  }

  const { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
  };
};

export const DragLayer = () => {
  const { item, isDragging, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getSourceClientOffset(),
  }));
  return isDragging ? (
    <CustomDragLayerContainer>
      <div style={getStyles(currentOffset)}>
        <Word isPreview top={0} left={0} color={item.color}>
          {item.key}
        </Word>
      </div>
    </CustomDragLayerContainer>
  ) : null;
};
