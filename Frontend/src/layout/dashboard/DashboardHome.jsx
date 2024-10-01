import LineChart from "./chart/LineChart";
import PieChart from "./chart/LineChartTwo";

const DashboardHome = () => {
  return (
    <div className="flex gap-2 lg:flex-row flex-col">
      <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <h1 className="text-center py-1 text-xl font-semibold">Expenses Over Times</h1>
        <LineChart />
      </div>
      <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
        <h1 className="text-center py-2 text-xl font-semibold">Expense Analysis</h1>
        <PieChart />
      </div>
    </div>
  );
};

export default DashboardHome;
