import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:8000/carts?email=${user?.email}`
      );
      return response.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
