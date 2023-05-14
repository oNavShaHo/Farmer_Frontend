import React, { useState } from 'react';
import { ApexChart } from 'react-apexcharts';

const Pie = () => {
  const [series, setSeries] = useState([44, 55, 13, 43, 22]);
  const [options, setOptions] = useState({
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  });

  return (
    <div id="chart">
      <ApexChart options={options} series={series} type="pie" width={380} />
    </div>
  );
};

export default Pie;
