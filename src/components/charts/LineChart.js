import React from "react";
import ReactApexChart from "react-apexcharts";

import {
  lineChartDataCharts2,
  lineChartOptionsCharts2,
} from "../Variable/ChartData";

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: lineChartDataCharts2,
      chartOptions: lineChartOptionsCharts2,
    });
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="area"
        width="100%"
        height="100%"
      />
    );
  }
}

export default LineChart;
