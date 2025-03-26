import {
  HeaderContainer,
  Tittle
} from './headerStyles';

type HeaderProps = {
  children?: React.ReactNode,
}

function Header({ children }: HeaderProps) {
  return (
    <HeaderContainer>
      <Tittle>{ children }</Tittle>
    </HeaderContainer>
  );
};

export default Header;
