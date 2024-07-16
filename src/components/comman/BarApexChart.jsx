import dynamic from "next/dynamic";
import React from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const BarApexChart = () => {
  const series = [
    {
      data: [21, 22, 10, 28, 16, 21, 13],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
    },
    colors: [
      "#b5e5ca",
      "#ffbc9a",
      "#2a85ff",
      "#b5e5ca",
      "#b5e5ca",
      "#ffbc9a",
      "#b5e5ca",
    ],
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
        borderRadius: 5,
        enableMouseTracking: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      categories: [
        ["John", "Doe"],
        ["Joe", "Smith"],
        ["Jake", "Williams"],
        "Amber",
        ["Peter", "Brown"],
        ["Mary", "Evans"],
        ["David", "Wilson"],
      ],
      labels: {
        style: {
          colors: [
            "#b5e5ca",
            "#ffbc9a",
            "#2a85ff",
            "#b5e5ca",
            "#b5e5ca",
            "#ffbc9a",
            "#b5e5ca",
          ],
          fontSize: "12px",
        },
      },
    },
  };

  return (
    <div>
      <h2>Distributed Column Chart</h2>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height="350"
        width="100%"
      />
    </div>
  );
};

export default BarApexChart;
