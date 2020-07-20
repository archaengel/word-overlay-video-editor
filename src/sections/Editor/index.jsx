import React from 'react';
import { useDrop } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { DragWord } from './components';
import { MOVE_WORD } from '../../actions';
import { EditorContainer } from '../../lib/components';

export const Editor = ({ source, type }) => {
  const { words } = useSelector((state) => state.editor);
  const dispatch = useDispatch();
  const [, drop] = useDrop({
    accept: 'WORD',
    drop(item, monitor) {
      const { x: dx, y: dy } = monitor.getDifferenceFromInitialOffset();
      const { key } = item;
      const left = Math.round(item.left + dx);
      const top = Math.round(item.top + dy);
      dispatch({ type: MOVE_WORD, payload: { key, top, left } });
      return;
    },
  });
  const renderDragWord = (word) => {
    const { top, left } = words[word];
    return <DragWord word={word} top={top} left={left} />;
  };
  return (
    <EditorContainer ref={drop}>
      {Object.keys(words).map(renderDragWord)}
      <video autoplay loop>
        <source src={source} type={type} />
      </video>
    </EditorContainer>
  );
};
