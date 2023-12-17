import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2021", 111000, 40000, 71000],
  ["2022", 159921 , 49865, 110056],
  ["2023", 199863, 67920, 131300],
  ["2024", 43030, 18040, 24990],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2021-2024",
  },
  colors: ["rgb(29,29,91)", "rgb(30, 84, 141)", "rgb(33, 72, 211)" ] 
};

export function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
      className="chart"
    />
  );
}
