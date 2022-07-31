interface Collection {
    title: string;
    subtitle: string;
    books: Book[];
}

interface Book {
    image: string;
    title: string;
    url: string;
}