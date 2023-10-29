interface BookCardProps {
  author: string, 
  title: string
}
const BookCard: React.FC<BookCardProps> = ({author, title}) => {
  return (
    <div className={"w-full h-full flex flex-col items-center justify-center border-2 rounded-lg"}>
      <div className="flex items-center justify-center w-10/12 h-32 mt-4 mb-2 bg-slate-100 font-bold text-xl border-2 rounded-lg">
        <div>{ title }</div>
      </div>
      <div className="m-2 font-semibold">{ author }</div>
    </div>
  )
}

export default BookCard
