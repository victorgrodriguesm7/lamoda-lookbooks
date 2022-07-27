import { Container, Link, LinkContainer, Logo } from './style'
import logoImage from '../../assets/logo.png';

export default function Footer() {
  return (
    <Container>
        <Logo src={logoImage}/>
        <LinkContainer>
            <Link>Lança Perfume</Link>
            <Link>LP Easy</Link>
            <Link>My Favorite Things</Link>
            <Link>Amarante</Link>
        </LinkContainer>
    </Container>
  )
}
