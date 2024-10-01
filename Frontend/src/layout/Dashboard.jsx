import { useState } from "react";
import DashboardHeader from "./dashboard/DashboardHeader";
import DashboardSidebar from "./dashboard/DashboardSidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, SetIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    SetIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <DashboardHeader toggleSidebar={toggleSidebar} />
      <DashboardSidebar isSidebarOpen={isSidebarOpen} />
      <div className="sm:ms-44 px-4 sm:px-2 pt-16">
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
