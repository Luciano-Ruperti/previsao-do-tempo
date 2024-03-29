const key = "2c05fd6a358523a5f5c753bc81ec4718";

function dataOnScreen(data) {
  console.log(data);
  if (data.name === undefined) {
    document.querySelector(".city").innerHTML = "Cidade não encontrada";
    document.querySelector(".temp").innerHTML = "";
    document.querySelector(".txt-forecast").innerHTML = "";
    document.querySelector(".humidity").innerHTML = "";
    document.querySelector(".img-forecast").style.display = "none";
  } else {
    document.querySelector(".city").innerHTML = "Tempo em " + data.name;
    document.querySelector(".temp").innerHTML =
      Math.floor(data.main.temp) + "°C";
    document.querySelector(".txt-forecast").innerHTML =
      data.weather[0].description;
    document.querySelector(".humidity").innerHTML =
      "Umidade: " + data.main.humidity + "%";
    document.querySelector(".img-forecast").style.display = "block";
    document.querySelector(
      ".img-forecast"
    ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  }
}

async function consultApi(city) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json());
  dataOnScreen(data);
}

function btnClicked() {
  const city = document.querySelector(".input-city").value;
  document.querySelector(".input-city").value = "";
  document.querySelector(".input-city").focus();
  consultApi(city);
}
