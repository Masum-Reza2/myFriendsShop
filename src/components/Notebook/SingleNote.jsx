const SingleNote = ({ note }) => {
    // console.log(note)
    let { id, img, price, studyPhrase, description } = note;
    return (
        <div className="flex flex-col items-center justify-center border shadow-md shadow-gray-500 rounded-lg p-2 space-y-2">
            <img className="h-full rounded-md" src={img} alt="" />
            <p className="font-semibold">{studyPhrase}</p>
            <p className="font-bold">{price}</p>

            <button className="border px-3 py-1 rounded-md shadow-md shadow-gray-500 font-bold hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]">Details</button>
            {/* here show a modal on click Details */}

        </div>
    )
}

export default SingleNote