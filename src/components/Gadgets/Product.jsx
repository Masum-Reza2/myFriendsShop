import { Link } from "react-router-dom";

const Product = ({ product }) => {
    let { id, title, description, price, brand, thumbnail } = product;
    return (
        <div className="flex items-center justify-center flex-col border shadow-md shadow-gray-500 py-7 space-y-2 rounded-lg font-semibold">
            <img className="h-full" src={thumbnail} alt="" />
            <p>{title}</p>
            <p className="font-bold">{price}$</p>
            <Link to={`/gadgets/${id}`}>
                <button className="border px-3 py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10]">Details</button>
            </Link>
        </div>
    )
}

export default Product