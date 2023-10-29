import React, { useState } from "react";
import { Book } from "../models/book";
import {SaveBook} from "../../wailsjs/go/books/BookController"
import Button from "../components/general/Button";

const CreateBook: React.FC = () => {
    const [book, setBook] = useState<Book>({id: "1", author: "", title: "", content: ""})

    const saveBook = () => {
        console.log("Saving a book ...")
        SaveBook(book)
            .catch(error => {
                console.log("Error while creating a book")
                console.log(error)
            })
    }

    return(
      <div className="flex flex-col w-full h-full items-center ">
        <div className="mt-20 text-3xl font-bold">Lets start a new book</div>
        <input 
            type="text" 
            placeholder="Author name" 
            value={book.author} 
            onChange={(e) => setBook({...book, author: e.target.value})}
            className="mt-24 px-2 py-1 border border-black rounded" 
        />
        <input 
            type="text" 
            placeholder="Title" 
            value={book.title} 
            onChange={(e) => setBook({...book, title: e.target.value})}
            className="mt-5 px-2 py-1 border border-black rounded" 
        />
        <Button className="mt-10" onClick={() => saveBook()}>Create</Button>
      </div>
    )
}

export default CreateBook;
