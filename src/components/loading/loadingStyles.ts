import styled, { keyframes } from "styled-components";
import { EmptyIcon } from '@sanity/icons';

export const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const loadingAnimation = keyframes`
  0% { transform: rotate(0deg) };
  100% { transform: rotate(360deg) };
`;

export const LoadingIcon = styled(EmptyIcon)`
  font-size: 72px;
  color: ${ ({ color }) => color ? color : 'white' };
  animation: ${loadingAnimation} 3s infinite;
  animation-timing-function: linear;
`;

export const LoadingTittle = styled.h2`
  color: ${ ({ color }) => color ? color : 'white' };
  margin-top: 10px;
`;
