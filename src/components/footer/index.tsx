import {
  FooterContainer,
  FooterTittle,
  SpaceStationIconLink,
} from './footerStyles';

type FooterProps = {
  footerTittle?: string,
};

function Footer({ footerTittle }: FooterProps) {
  return (
    <FooterContainer>
      <FooterTittle>{ footerTittle }</FooterTittle>
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
