let ctx = document.getElementById("MiGrafico").getContext("2d");
let MiGrafico = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "Simulación lanzamiento de dados",
        data: [0, 0, 0, 0, 0, 0],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

function lanzar_dado() {
  var numero = [0, 0, 0, 0, 0, 0];
  valores = document.getElementById("valores").value;
  for (let i = 0; i < parseInt(valores); i++) {
    let num = Math.random() * 6;
    let dado = Math.ceil(num);
    switch (dado) {
      case 1:
        numero[0]++;
        break;
      case 2:
        numero[1]++;
        break;
      case 3:
        numero[2]++;
        break;
      case 4:
        numero[3]++;
        break;
      case 5:
        numero[4]++;
        break;
      case 6:
        numero[5]++;
        break;
    }
  }
  dado[0].innerHTML = numero[0];
  dado[1].innerHTML = numero[1];
  dado[2].innerHTML = numero[2];
  dado[3].innerHTML = numero[3];
  dado[4].innerHTML = numero[4];
  dado[5].innerHTML = numero[5];
  fr[0].innerHTML = (numero[0] * 100) / valores + "%";
  fr[1].innerHTML = (numero[1] * 100) / valores + "%";
  fr[2].innerHTML = (numero[2] * 100) / valores + "%";
  fr[3].innerHTML = (numero[3] * 100) / valores + "%";
  fr[4].innerHTML = (numero[4] * 100) / valores + "%";
  fr[5].innerHTML = (numero[5] * 100) / valores + "%";
  MiGrafico.data.datasets[0].data = [
    numero[0],
    numero[1],
    numero[2],
    numero[3],
    numero[4],
    numero[5],
  ];
  MiGrafico.update();
}
