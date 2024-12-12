import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import isEmpty from "lodash/isEmpty";

const BarChartComponent = ({ data }) => {
  if (isEmpty(data)) {
    return <p>No data available</p>; // or return a loading spinner or a message
  }
  return (
    <ResponsiveContainer width="100%" height="80%">
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="Projections" stackId={"a"} fill="#A8C5DA" barSize={20} />
        <Bar dataKey="Actuals" stackId={"a"} fill="#cbe2f2" barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;

/**
 * Challenges with recharts
 */
