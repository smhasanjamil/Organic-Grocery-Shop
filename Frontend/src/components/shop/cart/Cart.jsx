import axios from "axios";
import useCart from "../../../hooks/useCart";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Payment from "../../../payment/Payment";

const Cart = () => {
  const [cart, refetch] = useCart();

  // Handle delete
  const handleDelete = (id) => {
    axios
      .delete(`https://organic-grocery-shop-backend.vercel.app/carts/${id}`)
      .then((response) => {
        // console.log('Item deleted:', response.data);

        if (response?.data?.deletedCount > 0) {
          toast.success("Deleted successfully!");

          refetch();
        }
      })
      .catch((error) => {
        console.error("Error deleting item:", error.message);
      });
  };

  const totalPrice = parseFloat(
    cart.reduce((total, item) => total + item.productPrice, 0).toFixed(2)
  );
  return (
    <div className="h-screen max-w-7xl mx-auto px-4 lg:px-2">
      <div className="font-sans max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-extrabold text-gray-800">
          Items: {cart?.length}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-8">
          <div className="lg:col-span-7 space-y-4">
            {/* Product Start */}
            {cart?.map((myCart) => (
              <div
                key={myCart?._id}
                className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]"
              >
                <div className="flex gap-4">
                  <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                    <img
                      src={myCart?.image}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-base font-bold text-gray-800">
                        {myCart?.productName}
                      </h3>
                      <p className="text-sm font-semibold text-gray-500 mt-2 ">
                        {myCart?.productCategory}
                      </p>
                    </div>

                    <div className="mt-auto flex items-center gap-3">
                      <button
                        type="button"
                        className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-2 fill-white"
                          viewBox="0 0 124 124"
                        >
                          <path
                            d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </button>
                      <span className="font-bold text-sm leading-[18px]">
                        2
                      </span>
                      <button
                        type="button"
                        className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-2 fill-white"
                          viewBox="0 0 42 42"
                        >
                          <path
                            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="ml-auto flex flex-col">
                  <div className="flex items-start gap-4 justify-end">
                    <button onClick={() => handleDelete(myCart?._id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 cursor-pointer fill-red-600 inline-block"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                          data-original="#000000"
                        ></path>
                        <path
                          d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <h3 className="text-base font-bold text-gray-800 mt-auto">
                    {myCart?.productPrice}{" "}
                    <span className="font-extrabold">&#2547;</span>
                  </h3>
                </div>
              </div>
            ))}

            {/* Product End */}
          </div>
          {/* Cart Right side start */}
          <div className="lg:col-span-5 bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
            <ul className="text-gray-800 space-y-4">
              <li className="flex flex-wrap gap-4 text-sm">
                Subtotal{" "}
                <span className="ml-auto font-bold">
                  {totalPrice} <span className="font-extrabold">&#2547;</span>
                </span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Shipping{" "}
                <span className="ml-auto font-bold">
                  0.00 <span className="font-extrabold">&#2547;</span>
                </span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Tax{" "}
                <span className="ml-auto font-bold">
                  0.00 <span className="font-extrabold">&#2547;</span>
                </span>
              </li>
              <hr className="border-gray-300" />
              <li className="flex flex-wrap gap-4 text-sm font-bold">
                Total{" "}
                <span className="ml-auto">
                  {totalPrice} <span className="font-extrabold">&#2547;</span>
                </span>
              </li>
            </ul>

            <div className="mt-8 space-y-2">
              {/* {cart?.length ? (
                <Link to="/payment">
                  <button
                    type="button"
                    className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-green-600 hover:bg-green-700 text-white rounded-md"
                  >
                    Payment
                  </button>
                </Link>
              ) : (
                <button
                  disabled
                  type="button"
                  className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-green-600 hover:bg-green-700 text-white rounded-md"
                >
                  Payment
                </button>
              )} */}
              <Payment />

              <Link to="/shop">
                <button
                  type="button"
                  className="text-sm px-4 py-2.5 my-2 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md"
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
          {/* Cart Right side end */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
