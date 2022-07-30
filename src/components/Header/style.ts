import styled from "styled-components";

export const Container = styled.header`
    position: relative;
    width: 100%;
`;

export const Background = styled.img`
    object-fit: contain;

    width: 100%;
`;

export const Content = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    flex-direction: column;
`;

export const NavContainer = styled.div`
    display: flex;

    align-items: center;
    justify-content: space-evenly;
    padding: .75rem 0;
`;

export const Logo = styled.img``;

export const Nav = styled.nav`
    display: flex;
    align-items: center;

    gap: 2rem;
`;

export const Link = styled.a`
    text-decoration: none;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.medium};

    will-change: opacity;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.9;
    }
`;