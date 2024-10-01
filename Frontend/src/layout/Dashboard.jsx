import { useState } from "react";
import DashboardHeader from "./dashboard/DashboardHeader";
import DashboardSidebar from "./dashboard/DashboardSidebar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
  const [isSidebarOpen, SetIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    SetIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <DashboardHeader toggleSidebar={toggleSidebar} />
      <DashboardSidebar isSidebarOpen={isSidebarOpen} />
      <div className="sm:ms-44 px-4 sm:px-2 pt-20">
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
