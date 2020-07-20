import React from 'react';
import { useSelector } from 'react-redux';
import { Toggle } from './components';
import { ButtonColumnContainer } from '../../lib/components';

export const Toggles = () => {
  const { words } = useSelector((state) => state.editor);
  return (
    <ButtonColumnContainer>
      {Object.keys(words).map((word) => (
        <Toggle word={word} />
      ))}
    </ButtonColumnContainer>
  );
};
