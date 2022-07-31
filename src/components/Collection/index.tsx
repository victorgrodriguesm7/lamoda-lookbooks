import Book from "../Book";
import { Container, List, Subtitle, Title } from "./style";

interface Props {
    collection: Collection;
}


export default function Collection({ collection }: Props) {
    const { title, subtitle, books } = collection;
    return (
        <Container>
            <Title src={title}/>
            <Subtitle>{subtitle}</Subtitle>
            <List>
                { books.map((book) => <Book book={book}/>)}
            </List>
        </Container>
    )
}