import styled from "styled-components";

export const Container = styled.li`
`;

export const Link = styled.a`
    display: flex;
    flex-direction: column;
    text-decoration: none;
`;

export const BookCover = styled.img`
    object-fit: contain;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.span`
    margin-top: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.light};
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSize.medium};

    letter-spacing: .25rem;
`;

export const GetButton = styled.button`
    width: fit-content;
    padding: 6px;
    margin-top: .5rem;

    background: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: .25rem;
`;