import React from 'react';
import { useDispatch } from 'react-redux';
import { TOGGLE_WORD } from '../../../actions';
import { ToggleWordButton } from '../../../lib/components';

export const Toggle = ({ word }) => {
  const dispatch = useDispatch();
  const handleClick = (_e) => {
    dispatch({ type: TOGGLE_WORD, payload: { key: word } });
  };
  return (
    <ToggleWordButton onClick={handleClick}>
      {`Toggle ${word}`}
    </ToggleWordButton>
  );
};
