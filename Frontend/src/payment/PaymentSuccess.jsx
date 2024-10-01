import { Link } from "react-router-dom";

const PaymentSuccess = ({ successData }) => {
  return (
    <>
      <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
          <div className="my-4 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-green-600 mx-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <h4 className="text-gray-800 text-lg font-semibold mt-4">
              Payment Successful!
            </h4>
            <p className="text-gray-800 text-xs font-medium mt-2">
              Thank you for your purchase!
            </p>
            {/* Card start */}
            <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
              <div className="p-6">
                <h3 className="text-lg font-semibold">Order Summary</h3>
                <div className="mt-2 text-sm text-gray-500 leading-relaxed flex flex-row justify-between">
                  <p>Txn ID: </p>
                  <p>{successData?.transactionId}</p>
                </div>
                <div className="mt-2 text-sm text-gray-500 leading-relaxed flex flex-row justify-between">
                  <p>Total</p>
                  <p>&#36;{successData?.price}</p>
                </div>
                <div className="mt-2 text-sm text-gray-500 leading-relaxed flex flex-row justify-between">
                  <p>Payment Method</p>
                  <p>
                    {successData?.paymentType} | {successData?.paymentBrand}
                  </p>
                </div>
              </div>
            </div>
            {/* Card end */}

            <div className="text-center space-x-4 mt-8">
              <Link to="/dashboard/my-order">            
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg text-gray-800 text-sm bg-gray-50 hover:bg-gray-100 border-2 border-slate-500/50"
                >
                  View Order
                </button>
              </Link>
              <Link to="/shop">
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg text-white text-sm bg-slate-600 hover:bg-slate-700 border-2 border-slate-500/50"
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
