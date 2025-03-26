import {
  FooterContainer,
  FooterTittle,
  IconsContainer,
  Linkedin,
  GitHub,
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
          <Linkedin />
        </a>
        <a
          href="https://github.com/Josimar-Souza"
          target="_blank"
        >
          <GitHub />
        </a>
      </IconsContainer>
    </FooterContainer>
  )
};

export default Footer;
