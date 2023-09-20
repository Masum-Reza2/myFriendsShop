const SinglePhone = ({ phone }) => {
    let { brand, image, phone_name, slug } = phone;
    // console.log(phone)
    return (
        <div className="flex flex-col items-center justify-center border shadow-md shadow-gray-500 rounded-lg py-8 font-semibold space-y-1">
            <img src={image} alt="" />
            <p className="font-bold">Brand : {brand}</p>
            <p>Name : {phone_name}</p>
            <p>Model : {slug}</p>
            <button className="border px-3 py-1 rounded-md bg-indigo-500 text-white active:translate-y-[0.10rem] hover:-translate-y-[0.10rem]">Buy Now</button>
        </div>
    )
}

export default SinglePhone