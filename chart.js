const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Ariel', 'Benhard', 'Felix', 'Oscar', 'Wiggie', 'Nelson'],
    datasets: [{
      label: '# of Votes for MVP',
      
      data: [22, 15, 8, 13, 17, 4],
      
      borderWidth: 5
    


       
    }]
  
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});