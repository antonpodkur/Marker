import { useEffect, useState } from "react"
import { GetAllBooks } from "../../wailsjs/go/books/BookController"
import BookCard from "../components/book/BookCard";
import PageWrapper from "../components/PageWrapper";
import { Book } from "../models/book";

const BookList: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([])

    useEffect(() => {
        async function fetchBooks() {
            try {
                const books: Book[] = await GetAllBooks() as Book[]
                console.log(books)
                setBooks(books)
            } catch (e) {
                console.error(e)
            }
        }

        fetchBooks()
    }, [])

    return (
        <PageWrapper>
            <div className="text-3xl font-bold">My books</div>
            {books && books.length
                ?
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10">
                    {books.map((book, index) => (
                        <BookCard author={book.author} title={book.title} key={index} />
                    ))}
                </div>
                : <div>{"Failed to fetch books"}</div>
            }
        </PageWrapper>
    )
}

export default BookList
