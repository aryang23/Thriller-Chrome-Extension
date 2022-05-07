// const e = require("express");

const weatherApi={
    key:"Your-API-Key",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let searchInputBox=document.getElementById("input-box");
let weatherBtn = document.querySelector(".show-weather");
let weatherContainer = document.querySelector(".weather");

// if(!districtData)
// {
//     console.log(districtData);
//     searchInputBox.value = districtData;
// }
//Event Listener Function on KeyPress
searchInputBox.addEventListener("keypress",(event)=>{

    if(event.keyCode===13)
    {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector(".weather-body").style.display="block";
    }
});

let clicked=false;
weatherBtn.addEventListener("click",function(){
    clicked=!clicked;
    if(clicked)
    {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector(".weather-body").style.display="block";
    }
    else
    {
        document.querySelector(".weather-body").style.display="none";
    }
})


//Get Weather Report

function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(showWeatherReport);
}
//Show Weather Report
function showWeatherReport(weather){
    console.log(weather);

    let city=document.getElementById('city');
    city.innerText=`${weather.name}, ${weather.sys.country}`;

    let temperature=document.getElementById('temp');
    temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp=document.getElementById('min-max');
    minMaxTemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C(min)/${Math.ceil(weather.main.temp_max)}&deg;C(max)`;

    let weatherType=document.getElementById('weather');
    weatherType.innerText=`${weather.weather[0].main}`;

    let date=document.getElementById('date');
    let todayDate=new Date();
    date.innerText=dateManage(todayDate);

    console.log(weatherContainer);
    // if(weatherType.textContent=="Clear"){
    //     weatherContainer.style.backgroundImage="url('Images/clear.jpg')";
    // } else if(weatherType.textContent=="Clouds"){
    //     weatherContainer.style.backgroundImage="url('Images/cloud.jpg')";
    // } else if(weatherType.textContent=="Rain"){
    //     weatherContainer.style.backgroundImage="url('Images/rain.jpg')";
    // } else if(weatherType.textContent=="Snow"){
    //     document.body.style.backgroundImage="url('Images/snow.jpg')";
    // } else if(weatherType.textContent=="Thunderstorm"){
    //     document.body.style.backgroundImage="url('Images/thunderstorm.jpg')";
    // } else if(weatherType.textContent=="Haze"){
    //     weatherContainer.style.backgroundImage="url('Images/cloud.jpg')";
    // }



}

//Date manage
function dateManage(dateArg){
    let days=["Sunday","Monday","Tueday","Wednesday","Thrusday","Friday","Saturday"];
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];

    let year=dateArg.getFullYear();
    let month=months[dateArg.getMonth()];
    let date=dateArg.getDate();
    let day=days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}
