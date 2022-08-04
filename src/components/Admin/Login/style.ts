import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors.white};

    height: 100%;
`;

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem 1rem;

    width: 300px;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: .5rem;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    margin-bottom: 1rem;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
`;

export const InputLabel = styled.label`
    font-weight: ${({ theme }) => theme.fontWeight.default};
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSize.medium};

    margin-bottom: .25rem;
`;

export const Input = styled.input`
    width: 100%;
    padding: .25rem .25rem;

    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.grey};

    outline: 0;
    border: 1px solid rgba(0, 0, 0, 0.25);

    border-radius: .5rem;
    margin-bottom: .25rem;
`;

export const Button = styled.button`
    padding: .25rem;
    width: 100%;
    
    font-size: ${({ theme }) => theme.fontSize.medium};

    background: #3498db;
    color: ${({ theme }) => theme.colors.white};
    border-radius: .25rem;
`;

export const Error = styled.span`
    margin: 1rem 0;
    color: #c0392b;
`;