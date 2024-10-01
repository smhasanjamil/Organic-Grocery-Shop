import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChart = () => {
    const userExpensesData = [
        {
          date: "2024-09-01",
          totalExpenses: 7.98, // Total amount spent on that day
        },
        {
          date: "2024-09-02",
          totalExpenses: 3.49,
        },
        {
          date: "2024-09-03",
          totalExpenses: 11.49,
        },
        {
          date: "2024-09-04",
          totalExpenses: 11.97,
        },
        {
          date: "2024-09-05",
          totalExpenses: 15.50,
        },
      ];
      
    return (
        <div className='h-96 w-full'>
           <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={userExpensesData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalExpenses" stackId="a" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
        </div>
    );
};

export default LineChart;