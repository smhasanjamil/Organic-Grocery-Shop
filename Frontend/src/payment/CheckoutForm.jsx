import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./PaymentSuccess";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import useCart from "../hooks/useCart";
import { AuthContext } from "../providers/AuthProviders";

const CheckoutForm = () => {
  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState();
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);

  const totalPrice = parseFloat(
    cart.reduce((total, item) => total + item.productPrice, 0).toFixed(2)
  );

  useEffect(() => {
    // Fetch client secret
    if (totalPrice && totalPrice > 1) {
      getClientSecret({ price: totalPrice });
    }
  }, [totalPrice]);

  // Get client secret
  const getClientSecret = async (price) => {
    const { data } = await axios.post(
      `https://organic-grocery-shop-backend.vercel.app/create-payment-intent`,
      price
    );
    console.log("clientSecret from server--->", data.clientSecret);
    setClientSecret(data.clientSecret);
  };

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
      setProcessing(false);
      return;
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }

    // Confirm payment start
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            // name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      console.log(paymentIntent);
      // 1. Create payment info object
      const paymentInfo = {
        email: user?.email,
        price: totalPrice,
        transactionId: paymentIntent?.id,
        date: new Date(),
        cartId: cart?.map((item) => item?._id),
        productId: cart?.map((item) => item?.productId),
        status: "Succeeded",
      };
      console.log(paymentInfo);
      // 2. Save payment info in payment collection (db)
      try {
        const { data } = await axios.post(
          "https://organic-grocery-shop-backend.vercel.app/payment",
          paymentInfo
        );
        console.log(data);
        // 3. Delete Cart data
        if (data?.insertedId) {
          const items = paymentInfo?.cartId;
          // console.log('Items for delete===> ',items);
          const { data } = await axios.delete(
            "https://organic-grocery-shop-backend.vercel.app/carts-delete",
            { data: { id: items } }
          );
          console.log("Deleted count:", data);
          refetch();
        }
      } catch (err) {
        console.log(err);
      }
    }
    setProcessing(false);
    // Confirm payment end
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          <button className="btn btn-success text-white">
            <span className="loading loading-spinner"></span>
            Processing
          </button>
        ) : (
          <button
            type="submit"
            disabled={!stripe || !clientSecret || processing}
            className="btn btn-success text-white"
          >
            Pay Now
          </button>
        )}
      </form>
      {cardError && <p className="text-red-600 p-4">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
