const key = "073f850a0360ee86df0c1524153a5e5e"


function showData(data) {
    console.log(data)
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".weather").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".text-weather").innerHTML = data.weather[0].description
    document.querySelector(".humi").innerHTML = "Humidity: " + data.main.humidity + "%"
    document.querySelector(".img-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.querySelector(".min-weather").innerHTML = "L:" + Math.floor(data.main.temp_min) + "°"
    document.querySelector(".max-weather").innerHTML = "H:" + Math.floor(data.main.temp_max) + "°"
}

async function searchCity(city) {


    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`).then(response => response.json())

    showData(data)
}
function clickButton() {
    const city = document.querySelector(".input-name").value

    searchCity(city)
}


