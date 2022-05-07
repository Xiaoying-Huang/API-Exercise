let searchBtn=document.querySelector("button");
let searchResult=document.querySelector("#search-result");


// API request 

let search = (e) => {
  const apiKey=`5d08d180c3412d7f84b0178e59c9d5e8`;
  const loc=document.querySelector("#location").value;
  const stringPassIn = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
  
console.log(stringPassIn);
  const getData = () => {
    fetch(stringPassIn)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const temperature = Math.trunc(data.main.temp) - 273;
        const description = data.weather[0].description;
        searchResult.innerHTML = `<p>temperature <b>${temperature} °C</b><br>${description}</p>`;
      })
      .catch((err) => console.log(err));
  };
  getData();
  e.preventDefault();
};

searchBtn.addEventListener('click', search);
