const input = document.getElementById("city")
const btn=document.getElementById("search")
const h2=document.getElementById("cityName")
const p = document.getElementsByTagName("p")

const apiKey = "4ac4471726364a656730474dd4e08740";
btn.addEventListener("click",show)
function show(){
    const city = input.value;
    input.value=""
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data.cod != 200) {
                h2.textContent = "City not found";
                return;
            }
            console.log(data)
            h2.textContent="City : " + data.name
            p[0].textContent="temp : "+ data.main.temp
            p[1].textContent="humidity : " + data.main.humidity
            p[2].textContent="wind : " +data.wind.speed
            p[3].textContent="Discription : "+ data.weather[0].description;


        })
            
    

}
