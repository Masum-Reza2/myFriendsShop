import { useLoaderData, useNavigate } from "react-router-dom"

const GadgetDetails = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    }

    const singleGadget = useLoaderData();
    let { title, description, price, discountPercentage, rating, stock, brand, category, thumbnail } = singleGadget;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-5">
            <div className="border flex flex-col items-center justify-center py-5 shadow-md shadow-black space-y-2 font-semibold rounded-lg px-3">
                <p className="text-xl font-bold">Category : {category}</p>
                <img src={thumbnail} alt="" />
                <div>
                    <p>Name : {title}</p>
                    <p className="font-bold">Brand : {brand}</p>
                    <p className="font-bold">Price : {price}$</p>
                    <p>Rating : {rating}</p>
                    <p>In stock : {stock}</p>
                    <p> Discount : {discountPercentage}%</p>
                </div>
                <strong>{description}</strong>

                <button onClick={handleGoBack} className="border px-3 py-1 rounded-md shadow-md shadow-black hover:-translate-y-[0.10rem] active:translate-y-[0.10]">Go Back</button>
            </div>
        </div>
    )
}

export default GadgetDetails