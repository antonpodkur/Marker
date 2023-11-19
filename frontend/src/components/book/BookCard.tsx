import { Link } from "react-router-dom"
import { Book } from "../../models/book"
import { Trash, Download } from "react-feather";
import Button from "../general/Button";
import { DeleteBookById } from "../../../wailsjs/go/books/BookController";
import { useStore } from "../../store/store";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({book}) => {
  const removeBook = useStore(store => store.removeBook)
  const onDelete = async () => {
    try {
      await DeleteBookById(Number(book.id))
      removeBook(Number(book.id))
    } catch(e) {
      console.log("deletion failed!")
    }
  }

  return (
    <div className={"w-full h-full flex flex-col items-center justify-center border-2 rounded-lg"}>
      <Link to={`/book/edit/${book.id}`} className={"w-full h-full flex flex-col items-center justify-center"}>
        <div className="flex items-center justify-center w-10/12 h-32 mt-4 mb-2 bg-slate-100 font-bold text-xl border-2 rounded-lg">
          <div>{ book.title }</div>
        </div>
        <div className="m-2 font-semibold">{ book.author }</div>
      </Link>
        <div className="flex w-5/6 p-2 justify-around items-center">
          <Button className={"px-6 md:px-4"}><Download/></Button> 
          <Button className={"px-6 md:px-4"} onClick={async () => await onDelete()}><Trash/></Button> 
        </div>
    </div>
  )
}

export default BookCard
