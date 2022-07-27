import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem 10%;

    background: ${({ theme }) => theme.colors.black};
    
    @media (max-width: 700px){
        justify-content: center;
    }
`;

export const Logo = styled.img``;

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;

    gap: 2rem;

    @media (max-width: 700px){
        display: none;
    }
`;

export const Link = styled.a`
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${(({ theme }) => theme.colors.white)};

    text-transform: uppercase;
    text-decoration: none;
`;