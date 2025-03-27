import styled from 'styled-components';
import { LinkedinIcon, GithubIcon } from '@sanity/icons';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 12vh;
  background-color: #6494AB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;

  @media only screen and (max-width: 430px) {
    position: fixed;
    bottom: 0;
  }
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

export const IconsContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
`;

export const CustomLinkedinIcon = styled(LinkedinIcon)`
  font-size: 38px;
  color: black;
  transition: 0.3s;

  &:hover {
    color: lightblue;
  }
`;

export const CustomGitHubIcon = styled(GithubIcon)`
  font-size: 38px;
  color: black;
  transition: 0.3s;

  &:hover {
    color: lightblue;
  }
`;
