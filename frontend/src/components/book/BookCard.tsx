import { Link } from "react-router-dom"
import { Book } from "../../models/book"

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
    </Link>
  )
}

export default BookCard
