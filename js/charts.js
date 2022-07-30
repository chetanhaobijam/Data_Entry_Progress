
  async function getChart() {
    const dataStream = await fetch("./json/data.json");
    const datas = await dataStream.json();
    console.log(datas);

    const labels = [
      2, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Angoucha',
          backgroundColor: '#1b37ff',
          borderColor: '#1b37ff',
          data: datas["2022"]["angoucha"]["july"]["scan"]
        },
        {
          label: 'Chetan',
          backgroundColor: '#faaa8d',
          borderColor: '#faaa8d',
          data: datas["2022"]["chetan"]["july"]["scan"]
        },
        {
          label: 'Kishan',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: datas["2022"]["kishan"]["july"]["scan"]
        },
        {
          label: 'Poukin',
          backgroundColor: '#e5d352',
          borderColor: '#e5d352',
          data: datas["2022"]["poukin"]["july"]["scan"]
        },
        {
          label: 'Rohel',
          backgroundColor: '#50b2c0',
          borderColor: '#50b2c0',
          data: datas["2022"]["rohel"]["july"]["scan"]
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
  };

  getChart();


