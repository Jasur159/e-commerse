import Product from "../Product/Product";
import data from "../../data/data";
const ProductList = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      <h1 className="py-[20px] text-[27px] text-center uppercase">Products</h1>
      <div className="grid grid-cols-1 gap-y-[1.5rem] sm:grid-cols-2 sm:gap-[1.5rem] md:grid-cols-3 td:grid-cols-4">
        {data.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
