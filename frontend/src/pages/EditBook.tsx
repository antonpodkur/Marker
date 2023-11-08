import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetBookById } from "../../wailsjs/go/books/BookController";
import Editor from "../components/editor/Editor";
import { Book } from "../models/book";
import { useStore } from "../store/store";

const EditBook: React.FC = () => {
    const { id } = useParams();
    const [book, setBook] = useState<Book | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const setCurrentBook = useStore(store => store.setCurrentBook);
    const defaultState = '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}';

    useEffect(() => {
        fetchBook()
    }, [])

    async function fetchBook() {
        try {
            const book = await GetBookById(Number(id)) 
            setBook(book as Book)
            setCurrentBook(book as Book);
            setIsLoading(false)
        } catch(error: any) {
            console.error(error)
        }
    }

    return (
        <div>
            {isLoading 
                ? <div>Loading</div> 
                : <Editor book={book} defaultInitState={defaultState}/>
            }
        </div>
    )
}

export default EditBook
