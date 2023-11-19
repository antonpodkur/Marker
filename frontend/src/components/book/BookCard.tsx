import { Link } from "react-router-dom"
import { Book } from "../../models/book"
import { Trash, Download } from "react-feather";
import Button from "../general/Button";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({book}) => {
  return (
    <Link to={`/book/edit/${book.id}`} className={"w-full h-full flex flex-col items-center justify-center border-2 rounded-lg"}>
      <div className="flex items-center justify-center w-10/12 h-32 mt-4 mb-2 bg-slate-100 font-bold text-xl border-2 rounded-lg">
        <div>{ book.title }</div>
      </div>
      <div className="m-2 font-semibold">{ book.author }</div>

      <div className="flex w-5/6 p-2 justify-around items-center">
        <Button className={"px-6 md:px-4 lg:px-6"}><Download/></Button> 
        <Button className={"px-6 md:px-4 lg:px-6"}><Trash/></Button> 
      </div>
    </Link>
  )
}

export default BookCard
