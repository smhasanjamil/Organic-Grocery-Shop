import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import avatar from "../../../assets/images/user.png";
import { AuthContext } from "../../../providers/AuthProviders";
import toast from "react-hot-toast";
import useCart from "../../../hooks/useCart";

const Header = () => {

  

  const { user, logOut } = useContext(AuthContext);

  const [cart]=useCart();
  const totalPrice = parseFloat(cart.reduce((total, item) => total + item.productPrice, 0).toFixed(2));

  // console.log(user);

  const [state, setState] = useState(false);

  let location = useLocation();

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop" },
    { title: "Blog", path: "/blog" },
  ];

  // Handle Logout
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Sign-out successful.");
        toast.success(' Logged out successfully!')

      })
      .catch((error) => {
        console.log("An error happened.", error);
      });
  };

  return (
    <>
      <nav className="bg-white w-full border-b md:border-0 md:static">
        <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <img
                src="https://i.ibb.co.com/jLQNvjb/organic.png"
                width={120}
                height={50}
                alt="Float UI logo"
              />
              {/* <h1 className="text-green-600 font-extrabold text-2xl">
                ORGANIC
              </h1> */}
            </Link>
            <div className="md:hidden">
              <button
                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      className={`${
                        location?.pathname === item.path
                          ? "text-green-600 font-bold"
                          : "text-gray-600 hover:text-green-600"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="hidden md:inline-block">
            {/* <a href="javascript:void(0)" className="py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow">
                    Get Started
                </a> */}
            {/* Right menu start */}
            <div className="flex flex-row items-center gap-2">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">{cart? cart?.length : 0}</span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">{cart? cart?.length : 0} Items</span>
                    <span className="text-green-600">Subtotal: {totalPrice} <span className="font-extrabold">&#2547;</span></span>
                    <div className="card-actions">
                      <Link to='/cart' className="btn bg-green-600 hover:bg-green-700 text-white btn-block">
                        View cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src={avatar} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  {user && (
                    <>
                      <li>
                        <Link to="/dashboard" className="justify-between">
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <button onClick={handleLogout}>Logout</button>
                      </li>
                    </>
                  )}
                  {!user && (
                    <li>
                      <Link to="/login">Log in</Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            {/* Right menu end */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
