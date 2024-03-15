import React from "react";
import { Line } from "react-chartjs-2";
import { format, parse } from "date-fns";

// Sample data for the chart
const data = {
  labels: [
    "2022-01-01",
    "2022-02-01",
    "2022-03-01",
    "2022-04-01",
    "2022-05-01",
  ],
  datasets: [
    {
      label: "Sales",
      data: [12, 19, 3, 5, 2],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

// Parse the date labels and format them for sorting
const formattedLabels = data.labels.map((label) =>
  format(parse(label, "yyyy-MM-dd", new Date()), "MMM yyyy")
);

// Create the chart component
const Chartnapod = () => {
  return (
    <div>
      <Line
        data={{
          ...data,
          labels: formattedLabels,
        }}
      />
    </div>
  );
};

export default Chartnapod;
