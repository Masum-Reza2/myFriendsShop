import { useLoaderData } from "react-router-dom"
import Product from "./Product";

const Gadgets = () => {
  const products = useLoaderData().products;
  // console.log(products)

  return (
    <div className="py-5">
      <h1 className="text-center text-2xl font-bold">Products : {products.length}</h1>

      <div className="w-[90%] mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5">
        {
          products.map(product => <Product key={product.id} product={product} />)
        }
      </div>
    </div>
  )
}

export default Gadgets
