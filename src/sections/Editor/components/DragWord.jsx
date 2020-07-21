import React, { useEffect, useState } from 'react';
import usePortal from 'react-cool-portal';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip } from './Tooltip';
import { SET_DRAGGED_WORD, MOVE_WORD, ROTATE_COLOR } from '../../../actions';
import { Word } from '../../../lib/components';
import { useEvent } from '../../../lib/utils';

export const DragWord = ({ word }) => {
  const dispatch = useDispatch();
  const { words } = useSelector((state) => state.editor);
  const { top, left, isHidden, color, colorIndex } = words[word];
  const [tipTimer, setTipTimer] = useState(null);
  const [tipPosition, setTipPosition] = useState({});
  const { Portal, show, hide } = usePortal({
    defaultShow: false,
    containerId: 'root',
  });

  const [, drop, preview] = useDrag({
    item: { type: 'WORD', key: word, top, left, color },

    // Callback which fires on drag start
    begin: () => {
      dispatch({
        type: SET_DRAGGED_WORD,
        payload: { key: word },
      });
      stopTipTimer();
    },

    // Callback which fires on drag end
    end: () => {
      dispatch({
        type: MOVE_WORD,
        payload: { key: word, top, left },
      });
      startTipTimer();
    },
  });

  const startTipTimer = () => {
    const timer = setTimeout(show, 2000);
    setTipTimer(timer);
  };

  const stopTipTimer = () => {
    hide();
    clearTimeout(tipTimer);
    setTipTimer(null);
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = Math.round(clientX) + window.scrollX + 5;
    const y = Math.round(clientY) + window.scrollY + 5;
    setTipPosition({
      left: x,
      top: y,
    });
  };

  const handleClick = (_e) => {
    dispatch({ type: ROTATE_COLOR, payload: { key: word, colorIndex } });
  };

  function scrollHandler(_e) {
    hide();
  }

  // subscribe to winodw scroll event
  useEvent('scroll', scrollHandler);

  useEffect(() => {
    preview(getEmptyImage(), { captureDragginState: true });
  }, [preview]);

  return (
    <>
      <Word
        ref={drop}
        top={top}
        left={left}
        isHidden={isHidden}
        color={color}
        onClick={handleClick}
        onMouseEnter={startTipTimer}
        onMouseLeave={stopTipTimer}
        onMouseUp={startTipTimer}
        onMouseDown={stopTipTimer}
        onMouseMove={handleMouseMove}
        onMouseOver={handleMouseMove}
      >
        {word}
      </Word>
      <Portal>
        <Tooltip
          top={tipPosition.top}
          left={tipPosition.left}
          x={left}
          y={top}
        />
      </Portal>
    </>
  );
};
