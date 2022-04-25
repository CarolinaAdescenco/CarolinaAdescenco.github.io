import styled, { keyframes } from 'styled-components';
import { colors } from '../../utils/colors';

const loader = keyframes`
  0 {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 5px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export const LoadContent = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;

  canvas:nth-last-child(1) {
    animation: ${loader} 0.6s 0.1s linear infinite;
  }
  canvas:nth-last-child(2) {
    animation: ${loader} 0.6s 0.2s linear infinite;
  }
  canvas:nth-last-child(3) {
    animation: ${loader} 0.6s 0.3s linear infinite;
  }
`;

export const Line = styled.canvas`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${colors.transparentWhite2};
  margin: 1.5px;
`;
