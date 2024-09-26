import axios from "axios";
import { useEffect, useState } from "react";

const ProductCategory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/product.json").then((response) => {
      //   console.log(response.data);
      setProducts(response.data);
    });
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-10 pb-10 lg:pb-20 px-4 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product) => (
          <div key={product?.id}>
            {/* {console.log(product)} */}
            <div className="max-w-full rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full"
                src={product.categoryImage}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.category}</div>
              </div>
              <div className="px-6 pb-2 ">
                <button className="btn inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Show Products
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
