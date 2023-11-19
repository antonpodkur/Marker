import { useEffect } from "react"
import { GetAllBooks } from "../../wailsjs/go/books/BookController"
import BookCard from "../components/book/BookCard";
import PageWrapper from "../components/PageWrapper";
import { Book } from "../models/book";
import { useStore } from "../store/store";

const BookList: React.FC = () => {
    const {books: storeBooks, setBooks: setStoreBooks} = useStore() 

    useEffect(() => {
        async function fetchBooks() {
            try {
                const books: Book[] = await GetAllBooks() as Book[]
                console.log(books)
                setStoreBooks(books)
            } catch (e) {
                console.error(e)
            }
        }

        fetchBooks()
    }, [])


    return (
        <PageWrapper>
            <div className="text-3xl font-bold">My books</div>
            {storeBooks && storeBooks.length
                ?
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10">
                    {storeBooks.map((book, index) => (
                        <BookCard book={book} key={index} />
                    ))}
                </div>
                : <div>{"Failed to fetch books"}</div>
            }
        </PageWrapper>
    )
}

export default BookList
