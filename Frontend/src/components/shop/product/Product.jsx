import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Product = () => {
  const { user } = useContext(AuthContext);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://organic-grocery-shop-backend.vercel.app/product")
      .then((response) => {
        //   console.log(response.data);
        setProducts(response.data);
      });
  }, []);

  // Handle add to cart
  const handleAddToCart = (product) => {
    if (user && user?.email) {
      const email = user?.email;
      const productName = product?.name;
      const image = product?.image;
      const productPrice = product?.price;
      const productId = product?._id;
      const cart = { email, productName,image,productPrice,productId };
      // console.log(cart);
      axios.post('http://localhost:8000/carts', cart)
      .then(res => {
          console.log(res.data);
      })
      .catch(error => {
          console.log(error.message);
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-10 px-4 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product) => (
          <div key={product?.id}>
            {/* {console.log(product)} */}
            <div className="max-w-full rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={product.image}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <div className="mb-2 text-xs border-gray-700">
                  <span className="border-2 rounded-md p-1">
                    {product.category}
                  </span>
                </div>
                <div className="font-bold text-xl mb-2 text-green-600">
                  {product.price} &#2547;
                </div>
                <p className="text-gray-400 text-base">
                  Review: ({product?.review})
                </p>
              </div>
              <div className="px-6 pb-2 flex gap-2 flex-col lg:flex-row">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full px-4 py-2 text-white bg-green-600 rounded-lg duration-150 hover:bg-green-700"
                >
                  Add to Cart
                </button>
                <Link to={`view-product/${product?._id}`} className="w-full">
                  <button className="w-full px-4 py-2 text-white bg-green-600 rounded-lg duration-150 hover:bg-green-700">
                    View
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
