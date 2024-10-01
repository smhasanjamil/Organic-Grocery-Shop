import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
// import { MdSpaceDashboard } from "react-icons/md";

const DashboardHeader = ({ toggleSidebar }) => {
  const { user } = useContext(AuthContext);
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={toggleSidebar}
            >
              <HiOutlineMenuAlt2 className="text-2xl" />
            </button>
            {/* <Link to="#" className="flex ms-2 md:me-24">
              <MdSpaceDashboard className="h-8 me-3 text-xl text-green-600" />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                Dashboard
              </span>
            </Link> */}
            <Link to="/dashboard" className="p-1">
              <img
                src="https://i.ibb.co.com/j3ZzVGQ/organic-high-resolution-logo-transparent.png"
                width={120}
                alt="Logo"
              />
            </Link>
          </div>
          {/* <div className="p-2"> */}
          <div>
            {/* Top right button start */}
            <div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://i.ibb.co.com/y8LCjwv/user.png"
                      className="h-2 w-2"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a>{user?.email}</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Top right button end */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
