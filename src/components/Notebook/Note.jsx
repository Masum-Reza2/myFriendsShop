import { useLoaderData } from "react-router-dom"
import SingleNote from "./SingleNote";

const Note = () => {

  const allNotes = useLoaderData();
  // console.log(allNotes)

  return (
    <div className="py-5">
      <h1 className="text-center font-bold text-2xl">Notes : {allNotes.length}</h1>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5">
        {
          allNotes.map((note, index) => <SingleNote key={index} note={note}/>)
        }
      </div>
    </div>
  )
}

export default Note