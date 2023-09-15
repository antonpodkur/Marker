import React from "react";

const CreateBook: React.FC = () => {
    return(
      <div className="flex flex-col w-full h-full items-center ">
        <div className="mt-20 text-3xl font-bold">Lets start a new book</div>
        <input type="text" placeholder="Enter book name" className="mt-24 px-2 py-1 border border-black rounded" />
        <button className="mt-20 px-6 py-1 text-xl font-bold border-2 border-black rounded">Create</button>
      </div>
    )
}

export default CreateBook;