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
  vertical-align: middle;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  box-sizing: ${(props) => (props.isPreview ? 'content-box' : 'border-box')};
  border: ${(props) => (props.isPreview ? 'solid #47a2fa 1px' : 'none')};
  transition: color 0.25s;
  transition-timing-function: cubic-bezier(0.52, -0.38, 0.9, 1.45);
  z-index: 2;
`;
