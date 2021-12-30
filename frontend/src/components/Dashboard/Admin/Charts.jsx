/** @format */

import React, { Fragment } from "react";
import ReactApexChart from "react-apexcharts";
// import NumberFormat from "react-number-format";

export const Charts = () => {
  return <div></div>;
};

export const LineChart2 = () => {
  const options = {
    series: [
      {
        data: [2334, 1780, 122, 234],
      },
    ],
    chart: {
      type: "bar",
      height: 380,
    },
    options: {
      plotOptions: {
        bar: {
          barHeight: "20%",
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: "bottom",
          },
        },
      },
    },
    colors: ["#33b2df", "#546E7A", "#d4526e", "#13d8aa"],

    stroke: {
      width: 1,
      colors: ["#33b2df", "#546E7A", "#d4526e", "#13d8aa"],
    },
    xaxis: {
      categories: ["Zoom ", "Phone", "Cancled", "Rescheduled"],
    },
    yaxis: {
      labels: {
        show: true,
      },
    },
    title: {
      text: "Appointment",
      align: "right",
      floating: true,
    },
  };

  return (
    <Fragment>
      <ReactApexChart
        options={options.options}
        series={options.series}
        height="200"
        type="bar"
      />
    </Fragment>
  );
};
export const LineChart = () => {
  const config = {
    series: [
      {
        name: "Google",
        data: [10, 51, 35, 41, 29, 62, 99, 41, 18],
      },
      {
        name: "Youtube",
        data: [10, 80, 35, 41, 99, 62, 79, 21, 68],
      },
      {
        name: "Website",
        data: [60, 21, 45, 41, 89, 62, 59, 71, 98],
      },
    ],
    options: {
      chart: {
        height: 250,
        toolbar: {
          show: false,
        },
      },

      legend: {
        position: "top",
        horizontalAlign: "right",
        onItemHover: {
          highlightDataSeries: true,
        },
        labels: {
          colors: "#dddddd",
          useSeriesColors: true,
        },
      },

      dataLabels: {
        enabled: false,
      },

      stroke: {
        curve: "smooth",
        width: 2,
      },

      title: {
        text: "Marketing",
        align: "left",
      },
      colors: ["#0000FF", "#E91E63", "#FFAE42"],
      xaxis: {
        categories: [
          "31/01",
          "01/02",
          "02/03",
          "03/04",
          "31/05",
          "04/06",
          "06/07",
          "02/08",
          "09/09",
        ],
      },

      yaxis: {},
    },
  };
  return (
    <Fragment>
      <ReactApexChart
        options={config.options}
        series={config.series}
        height="250"
        type="line"
      />
    </Fragment>
  );
};
export const RadialBarChart = () => {
  const state = {
    series: [73, 83, 93],
    options: {
      chart: {
        height: 250,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              show: true,
              lable: "Total ",
            },
            value: {
              show: true,
            },
            total: {
              show: true,
            },
          },
        },
      },
      title: {
        text: "Calls",
        fontSize: "auto",
      },
      colors: ["#0000FF", "#E91E63", "#FFAE42"],
      labels: ["Inbound", "Outbound", "Sales"],
      legend: {
        show: true,
        floating: true,
        fontSize: "auto",
        position: "right",
        offsetX: -30,
        offsetY: 50,
        labels: {
          useSeriesColors: true,
        },
        onItemClick: {
          toggleDataSeries: true,
        },
        formatter: function (seriesName, opts) {
          return (
            seriesName +
            ":  <NumberFormat value={" +
            opts.w.globals.series[opts.seriesIndex] +
            "} displayType={'text'} thousandSeparator={true}/>"
          );
        },
      },
    },
  };
  return (
    <Fragment>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="radialBar"
        height="200"
      />
    </Fragment>
  );
};

export const RadialBarChart2 = () => {
  const state = {
    series: [73, 83, 93],
    options: {
      chart: {
        height: 250,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              show: true,
              lable: "Total Emails",
            },
            value: {
              show: true,
            },
            total: {
              show: true,
            },
          },
        },
      },
      title: {
        text: "Email",
        fontSize: "auto",
      },
      colors: ["#0000FF", "#E91E63", "#FFAE42"],
      labels: ["Send", "Open", "Delete"],
      legend: {
        show: true,
        floating: true,
        fontSize: "auto",
        position: "right",
        offsetX: 0,
        offsetY: 50,
        labels: {
          useSeriesColors: true,
        },
        onItemClick: {
          toggleDataSeries: true,
        },
        formatter: function (seriesName, opts) {
          return (
            seriesName +
            ":  <NumberFormat value={" +
            opts.w.globals.series[opts.seriesIndex] +
            "} displayType={'text'} thousandSeparator={true}/>"
          );
        },
      },
    },
  };
  return (
    <Fragment>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="radialBar"
        height="200"
      />
    </Fragment>
  );
};
