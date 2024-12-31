import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Chart = () => {
  const [state] = useState({
    series: [
      {
        name: "Profit an Loss",
        data: [0, 200, 180, 400, 260,  390,400,360,400, 360, 460,500],
      },
    ],
    options: {
      chart: {
        height: 222,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        colors: ["#C1F338"],
        width: 2.5, 
      },
    //   title: {
    //     text: "Product Trends by Month",
    //     align: "left",
    //   },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0,
        },
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",],
        tickAmount: 12,
         tickPlacement: "between",
         

      },
      
      
    },
  });


  return (
    <div>
      <div id="chart">
        {/* ReactApexChart کا صحیح استعمال */}
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={214}
        />
      </div>
    </div>
  );
};

export default Chart;
