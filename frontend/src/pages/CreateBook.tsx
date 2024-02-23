import React, { useState } from "react";
import { Book } from "../models/book";
import { SaveBook } from "../../wailsjs/go/books/BookController"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";

const CreateBook: React.FC = () => {
    const [book, setBook] = useState<Book>({ id: "1", author: "", title: "", content: "", markdown: "" })

    const saveBook = () => {
        console.log("Saving a book ...")
        SaveBook(book)
            .catch(error => {
                console.log("Error while creating a book")
                console.log(error)
            })
    }

    return (
        <PageWrapper>
            <div className="text-3xl font-bold">Lets start a new book</div>
            <Input
                type="text"
                placeholder="Author name"
                value={book.author}
                onChange={(e) => setBook({ ...book, author: e.target.value })}
                className="mt-24 sm:w-full md:w-3/5 lg:w-2/5"
            />
            <Input
                type="text"
                placeholder="Title"
                value={book.title}
                onChange={(e) => setBook({ ...book, title: e.target.value })}
                className="mt-5 sm:w-full md:w-3/5 lg:w-2/5"
            />
            <Link to="/books">
                <Button className="mt-4" onClick={() => saveBook()}>Create</Button>
            </Link>
        </PageWrapper>
    )
}

export default CreateBook;
