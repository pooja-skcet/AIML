import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

// Registering additional features (Tooltips and Legend)
Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const SalesChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true, // Fill the area under the line
        backgroundColor: 'rgba(75, 192, 192, 0.3)', // Semi-transparent fill
        borderColor: 'rgba(75, 192, 192, 0.8)', // Darker line color
        borderWidth: 2, // Thicker line
        pointBackgroundColor: 'rgba(255, 99, 132, 1)', // Color for points
        pointHoverRadius: 8, // Increase point size on hover
        pointRadius: 5, // Standard point size
        tension: 0.3, // Smooth curve for the line
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: 'index', // Tooltip shows for all datasets
      intersect: false, // Tooltip will show even if you don't hover exactly over the point
    },
    plugins: {
      legend: {
        display: true,
        position: 'top', // Legend at the top
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `Sales: $${tooltipItem.raw}`; // Custom tooltip text
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20, // Steps of 20 for Y-axis
        },
      },
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
      },
    },
  };

  return (
    <div className="sales-chart">
      <h3>Interactive Sales Chart</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesChart;
