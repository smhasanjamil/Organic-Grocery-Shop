import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
// import { MdSpaceDashboard } from "react-icons/md";

const DashboardHeader = ({ toggleSidebar }) => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={toggleSidebar}>
              <HiOutlineMenuAlt2 className="text-2xl" />
            </button>
            {/* <Link to="#" className="flex ms-2 md:me-24">
              <MdSpaceDashboard className="h-8 me-3 text-xl text-green-600" />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                Dashboard
              </span>
            </Link> */}
            <Link to="/dashboard" className="p-1">
              {" "}
              <img
                src="https://i.ibb.co.com/j3ZzVGQ/organic-high-resolution-logo-transparent.png"
                width={120}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="p-2">
            <button>Click Me</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
