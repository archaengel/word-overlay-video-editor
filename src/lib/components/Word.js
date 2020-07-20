import styled from 'styled-components';

const DragPreviewContainer = styled.div`
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
`;

export const Word = styled(DragPreviewContainer)`
  color: ${(props) => props.color};
  position: absolute;
  display: block;
  cursor: pointer;
  font-size: 6rem;
  padding: 0;
  margin: 0;
  line-height: 80%;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  transition: color 0.25s;
  transition-timing-function: cubic-bezier(1, -0.91, 0.9, 1.45);
  z-index: 2;
`;
