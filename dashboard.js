// dashboard.js
// This code assumes that you have a server that can return the data
// for the chart in JSON format

fetch('/data')
  .then((response) => response.json())
  .then((data) => {
    const ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Sales',
          data: data.sales,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  });
