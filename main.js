const API_URL = "https://api.covidtracking.com/v1/us/current.json";
const dataContainer = document.querySelector("#dataContainer");
const positiveCasesBtn = document.querySelector("#positiveCasesBtn");
const hospitalizedCurrentlyBtn = document.querySelector("#hospitalizedCurrentlyBtn");
const deathsBtn = document.querySelector("#deathsBtn");

positiveCasesBtn.addEventListener("click", () => {
  fetchData("positive");
});

hospitalizedCurrentlyBtn.addEventListener("click", () => {
  fetchData("hospitalizedCurrently");
});

deathsBtn.addEventListener("click", () => {
  fetchData("death");
});

function fetchData(dataType) {
  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      let output = "";
      data.forEach(datum => {
        output += `
          <p>${dataType}: ${datum[dataType]}</p>
        `;
      });
      dataContainer.innerHTML = output;
    })
    .catch(error => console.error(error));
}
