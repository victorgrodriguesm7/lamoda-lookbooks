import { BookCover, Container, GetButton, Link, Title } from "./style";

interface Props {
    book: Book;
}

export default function Book({ book }: Props){
    const { 
        title,
        image,
        url 
    } = book;

    return (
        <Container>
            <Link href={url} target="_blank">
                <BookCover
                    src={image}/>
                <Title>{title}</Title>
                <GetButton type="button">
                    Acessar
                </GetButton>
            </Link>
        </Container>
    )
}