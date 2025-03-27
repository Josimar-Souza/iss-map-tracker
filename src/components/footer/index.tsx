import {
  FooterContainer,
  FooterTittle,
  SpaceStationIconLink,
  IconsContainer,
  CustomLinkedinIcon,
  CustomGitHubIcon,
} from './footerStyles';

type FooterProps = {
  footerTittle?: string,
};

function Footer({ footerTittle }: FooterProps) {
  return (
    <FooterContainer>
      <FooterTittle>{ footerTittle }</FooterTittle>
      <IconsContainer>
        <a
          href="https://www.linkedin.com/in/josimar-souza-brito/"
          target="_blank"
        >
          <CustomLinkedinIcon />
        </a>
        <a
          href="https://github.com/Josimar-Souza"
          target="_blank"
        >
          <CustomGitHubIcon />
        </a>
      </IconsContainer>
      <SpaceStationIconLink
        href="https://www.flaticon.com/"
        title="space station icons"
        target="_blank"
      >
        Icons created by Freepik - Flaticon
      </SpaceStationIconLink>
    </FooterContainer>
  )
};

export default Footer;
