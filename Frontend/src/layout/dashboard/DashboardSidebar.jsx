import { FaChartBar, FaListAlt, FaHome } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import toast from "react-hot-toast";

const DashboardSidebar = ({ isSidebarOpen }) => {
  const { logOut } = useContext(AuthContext);

  // Handle Logout
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Sign-out successful.");
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        console.log("An error happened.", error);
      });
  };

  const links = [
    {
      href: "/dashboard",
      icon: FaChartBar,
      text: "Dashboard",
    },
    {
      href: "/dashboard/my-order",
      icon: FaListAlt,
      text: "My Order",
    },
    {
      href: "/",
      icon: FaHome,
      text: "Back Home",
    },
  ];
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-44 h-screen pt-20 bg-white border-r border-gray-200 sm:translate-x-0 transition-transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full px-3 pb-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {links?.map((link, index) => (
            <div key={index}>
              <li>
                <Link
                  to={link?.href}
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <span>
                    <link.icon className="mr-3" />
                  </span>
                  <span className="flex-1 me-3">{link?.text}</span>
                </Link>
              </li>
            </div>
          ))}
          <li className="font-medium text-gray-900 rounded-lg hover:bg-gray-100">
            <button className="flex items-center p-2" onClick={handleLogout}>
              <span className="mr-3">
                <CiLogout />
              </span>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
