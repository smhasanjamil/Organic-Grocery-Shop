import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartTwo = () => {
  const categoryExpensesData = [
    { category: "Groceries", actual: 150.75, budget: 170 },
    { category: "Utilities", actual: 120.0, budget: 100 },
    { category: "Entertainment", actual: 65.5, budget: 80 },
    { category: "Transportation", actual: 55.2, budget: 70 },
    { category: "Other", actual: 70.0, budget: 50 },
  ];

  return (
    <div className='h-96 w-full'>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={categoryExpensesData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" /> {/* Use category as the X-axis */}
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="actual" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="budget" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartTwo;
