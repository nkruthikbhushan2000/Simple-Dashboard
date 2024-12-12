import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import isEmpty from "lodash/isEmpty";
// Colors for each segment
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChartComponent = ({ data }) => {
  if (isEmpty(data)) {
    return <p>No data available.</p>; // Show a message when no data is available.
  }
  return (
    <>
      <ResponsiveContainer width="100%" height="50%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={40} // Inner radius to make it a donut
            outerRadius={60}
            fill="#8884d8"
            paddingAngle={5}
            // label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          {/* <Legend /> */}
        </PieChart>
      </ResponsiveContainer>
      <div className="pie-chart-sales-data">
        {data.map((item, index) => {
          return (
            <div key={item.name} className="pie-chart-sales-data-item">
              <div style={{display:"flex", gap:"4px", alignItems:"center"}}>
                <div className="pie-chart-indicator" style={{backgroundColor:COLORS[index]}}></div>
                <div>{item.name}</div>
              </div>
              <div>${item.value}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PieChartComponent;
