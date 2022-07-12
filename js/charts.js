
  async function getChart() {
    const dataStream = await fetch("../json/data.json");
    const datas = await dataStream.json();
    console.log(datas);

    const labels = [
      2, 4, 5, 6, 7, 8, 11
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Angoucha',
          backgroundColor: '#1b37ff',
          borderColor: '#1b37ff',
          data: datas["2022"]["angoucha"]["july"]["entry"]
        },
        {
          label: 'Chetan',
          backgroundColor: '#faaa8d',
          borderColor: '#faaa8d',
          data: datas["2022"]["chetan"]["july"]["entry"]
        },
        {
          label: 'Kishan',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: datas["2022"]["kishan"]["july"]["entry"]
        },
        {
          label: 'Poukin',
          backgroundColor: '#e5d352',
          borderColor: '#e5d352',
          data: datas["2022"]["poukin"]["july"]["entry"]
        },
        {
          label: 'Rohel',
          backgroundColor: '#50b2c0',
          borderColor: '#50b2c0',
          data: datas["2022"]["rohel"]["july"]["entry"]
        }
      ]
    };
    const config = {
      type: 'line',
      data: data,
      options: {}
    };

    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );
    
    myChart();
  };

  getChart();


