import { Background, Container, Content, Link, Logo, Nav, NavContainer } from './style';
import desktopBackground from '../../assets/header/desktop-background.png';
import logoImage from '../../assets/logo-large.png';

export default function Header() {
  return (
    <Container>
      <Content>
        <NavContainer>
          <Link href="/">
            <Logo src={logoImage} />
          </Link>
          <Nav>
            <Link href='#lanca-perfume'>Lança perfume</Link>
            <Link href='#lp-easy'>LP Easy</Link>
            <Link href='#my-favorite-things'>My favorite things</Link>
            <Link href='#amarante'>Amarante</Link>
          </Nav>
        </NavContainer>
      </Content>
      <Background
        src={desktopBackground} />
    </Container>
  )
}
