import { FormEvent, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { Button, Container, Error, Input, InputContainer, InputLabel, Title, Wrapper } from './style';

export default function Login() {
  const { login, isLogged } = useAuth();
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const [error, setError ] = useState<string>();

  if (isLogged) return <Navigate to="/admin/home"/>
  
  function getError(error: string){
    switch(error){
        case "auth/too-many-requests":
            return "Muitas tentativas! Aguarde alguns minutos e tente de novo";
        case "auth/user-not-found":
            return "Usuário não encontrado";
        case "auth/wrong-password":
            return "Senha incorreta";
        case "auth/invalid-email":
            return "Usuário incorreto"
    }

    return error;
  }
  function handleForm(event: FormEvent){
    event.preventDefault();
    setError(undefined);

    if (emailRef.current && passRef.current){
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        login(email, pass).catch((error) => {
            
            setError(getError(error));
        });
    }
  }

  return (
    <Wrapper>
        <Container onSubmit={handleForm}>
            <Title>Login</Title>
            <InputContainer>
                <InputLabel>E-mail</InputLabel>
                <Input
                    ref={emailRef}
                    type="email"/>
            </InputContainer>
            <InputContainer>
                <InputLabel>Senha</InputLabel>
                <Input
                    ref={passRef}
                    type="password"
                    autoComplete="current-password"/>
            </InputContainer>
            { error && <Error>{ error }</Error>}
            <Button>
                Login
            </Button>
        </Container>
    </Wrapper>
  )
}
