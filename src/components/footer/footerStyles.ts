import styled from 'styled-components';
import { LinkedinIcon, GithubIcon } from '@sanity/icons';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 8vh;
  background-color: #6494AB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterTittle = styled.h2`
  color: white;
  font-size: 1.2em;
  font-style: italic;
  font-weight: 200;
`;

export const IconsContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Linkedin = styled(LinkedinIcon)`
  font-size: 35px;
  color: black;
  transition: 0.3s;

  &:hover {
    color: #444444;
  }
`;

export const GitHub = styled(GithubIcon)`
  font-size: 35px;
  color: black;
  transition: 0.3s;

  &:hover {
    color: #444444;
  }
`;
