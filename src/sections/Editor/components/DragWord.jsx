import React, { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';
import { SET_DRAGGED_WORD, MOVE_WORD, ROTATE_COLOR } from '../../../actions';
import { Word } from '../../../lib/components';

export const DragWord = ({ word }) => {
  const dispatch = useDispatch();
  const { words } = useSelector((state) => state.editor);
  const { top, left, isHidden, color, colorIndex } = words[word];
  const [, drop, preview] = useDrag({
    item: { type: 'WORD', key: word, top, left, color },
    begin: () => {
      dispatch({
        type: SET_DRAGGED_WORD,
        payload: { key: word },
      });
    },
    end: () => {
      dispatch({
        type: MOVE_WORD,
        payload: { key: word, top, left },
      });
    },
  });

  const handleClick = (_e) => {
    dispatch({ type: ROTATE_COLOR, payload: { key: word, colorIndex } });
  };

  useEffect(() => {
    preview(getEmptyImage(), { captureDragginState: true });
  }, [preview]);

  return (
    <Word
      ref={drop}
      top={top}
      left={left}
      isHidden={isHidden}
      color={color}
      onClick={handleClick}
    >
      {word}
    </Word>
  );
};
