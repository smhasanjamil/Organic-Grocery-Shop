import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const MyOrder = () => {
  const { user } = useContext(AuthContext);
  const [orderItems, setOrderItems] = useState([]);
  useEffect(() => {
    axios
      .get(`https://organic-grocery-shop-backend.vercel.app/my-products/${user?.email}`)
      .then((response) => {
        // console.log(response.data);
        setOrderItems(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [user?.email]);

  const formatDate = (dateString) => {
    const date = new Date(dateString); // Convert to Date object
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="text-justify">
          <h3 className="text-gray-800 text-xl pt-2 font-bold sm:text-2xl">
            My Order History
          </h3>
          <p className="text-gray-600 mt-2">
            Access your complete order history here. Review your transactions,
            check prices, and follow up on the status of each purchase at your
            convenience.
          </p>
        </div>
        <div className="my-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Txn ID</th>
                <th className="py-3 px-6">Price</th>
                <th className="py-3 px-6">Date</th>
                <th className="py-3 px-6">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {orderItems?.map((item) => (
                <tr key={item?._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item?.transactionId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    &#36;{item?.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {formatDate(item?.date)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item?.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyOrder;
