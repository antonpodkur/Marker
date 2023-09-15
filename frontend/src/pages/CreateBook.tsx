import React, { useState } from "react";
import { Book } from "../models/book";
import {SaveBook} from "../../wailsjs/go/models/BookController"

const CreateBook: React.FC = () => {
    const [book, setBook] = useState<Book>({author: "", title: "", content: ""})

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
        <button 
            onClick={() => saveBook()}
            className="mt-10 px-6 py-1 text-xl font-bold border-2 border-black rounded"
        >
            Create
        </button>
      </div>
    )
}

export default CreateBook;
