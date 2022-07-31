import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    flex-direction: column;

    align-items: flex-start;

    &:not(:last-child){
        margin-bottom: 4rem;
    }
`;

export const Title = styled.img`
    object-fit: contain;
    height: 30px;
    `;

export const Subtitle = styled.span`
    margin-top: 1.5rem;
    padding-bottom: 4px;
    
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.default};

    border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
`;

export const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem;

    margin-top: 2.5rem;
    list-style: none;
`;