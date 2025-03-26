import {
  FooterContainer,
  FooterTittle,
} from './footerStyles';

type FooterProps = {
  footerTittle?: string,
};

function Footer({ footerTittle }: FooterProps) {
  return (
    <FooterContainer>
      <FooterTittle>{ footerTittle }</FooterTittle>
    </FooterContainer>
  )
};

export default Footer;
