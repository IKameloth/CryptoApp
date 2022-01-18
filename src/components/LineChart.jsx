import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";

const { Title: TitleType } = Typography;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: coinName,
      },
    },
  };

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <Row className="chart-header">
        <TitleType level={2} className="chart-TitleType">
          {coinName} Price Chart{" "}
        </TitleType>
        <Col className="price-container">
          <TitleType level={5} className="price-change">
            Change: {coinHistory?.data?.change}%
          </TitleType>
          <TitleType level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </TitleType>
        </Col>
      </Row>
      <Line options={options} data={data} />;
    </>
  );
};

export default LineChart;
