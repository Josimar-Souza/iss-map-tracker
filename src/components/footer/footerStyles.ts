import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 8vh;
  background-color: #6494AB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const FooterTittle = styled.h2`
  color: white;
  font-size: 1.2em;
  font-style: italic;
  font-weight: 200;
`;

export const SpaceStationIconLink = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: lightblue;
  transition: 0.5s;

  &:hover {
    color: blue;
  }
`;
