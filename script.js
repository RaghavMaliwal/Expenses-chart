function fetchJSONData() {
  let day1 = document.querySelector("#mon");
  let day2 = document.querySelector("#tue");
  let day3 = document.querySelector("#wed");
  let day4 = document.querySelector("#thu");
  let day5 = document.querySelector("#fri");
  let day6 = document.querySelector("#sat");
  let day7 = document.querySelector("#sun");

  let value1 = document.querySelector("#monv");
  let value2 = document.querySelector("#tuev");
  let value3 = document.querySelector("#wedv");
  let value4 = document.querySelector("#thuv");
  let value5 = document.querySelector("#friv");
  let value6 = document.querySelector("#satv");
  let value7 = document.querySelector("#sunv");

  fetch("./data.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      let day = data.map((item) => item.amount);

      value1.innerHTML = day[0] + "$";
      value2.innerHTML = day[1] + "$";
      value3.innerHTML = day[2] + "$";
      value4.innerHTML = day[3] + "$";
      value5.innerHTML = day[4] + "$";
      value6.innerHTML = day[5] + "$";
      value7.innerHTML = day[6] + "$";

      day1.style.height = 2 * day[0] + "px";
      day2.style.height = 2 * day[1] + "px";
      day3.style.height = 2 * day[2] + "px";
      day4.style.height = 2 * day[3] + "px";
      day5.style.height = 2 * day[4] + "px";
      day6.style.height = 2 * day[5] + "px";
      day7.style.height = 2 * day[6] + "px";

      console.log(value1);
    })
    .catch((error) => console.error("Unable to fetch data:", error));
}
fetchJSONData();
