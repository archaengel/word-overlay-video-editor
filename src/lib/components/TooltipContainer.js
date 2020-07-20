import styled from 'styled-components';

export const TooltipContainer = styled.span`
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  border-radius: 3px;
  position: absolute;
  transtion: opacity ease-in 0.15s;
  z-index: 3;
  display: block;
  margin: 0;
  background: #00000088;
`;

// opacity: ${(props) => (props.isVisible ? 1 : 0)};
