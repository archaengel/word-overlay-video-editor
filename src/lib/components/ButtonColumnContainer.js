import styled from 'styled-components';
import { ToggleWordButton } from './ToggleWordButton';

export const ButtonColumnContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-items: flex-start;
  padding: 10px;
  & ${ToggleWordButton} {
    margin-bottom: 10px;
  }
`;
