import { FaChartBar, FaListAlt } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";

const DashboardSidebar = ({ isSidebarOpen }) => {
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
      href: "/login",
      icon: CiLogout,
      text: "Logout",
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
                <Link to={link?.href} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                  <span>
                    <link.icon className="mr-3" />
                  </span>
                  <span className="flex-1 me-3">{link?.text}</span>
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
