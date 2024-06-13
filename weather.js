const inputbox=document.querySelector('.input-box');
const searchbtn=document.getElementById('searchbtn');
const weatherimg=document.querySelector('.weather-img');
const temp=document.querySelector('.temperature');
const desc=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const windspeed=document.getElementById('wind-speed');
const locationnotfound=document.querySelector('.location-not-found');
const weatherbody=document.querySelector('.weather-body');

 async function checkweather(city){
    const apikey="ac40cd1e284b2efbc5f2bf59393d0799";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    const weather_data= await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);

    if(weather_data.cod==='404'){
      locationnotfound.style.display = "flex";
      weatherbody.style.display="none";
        return;
    }
    locationnotfound.style.display = "none";
    weatherbody.style.display="flex";

    temp.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;

    desc.innerHTML=`${weather_data.weather[0].description}`;

    humidity.innerHTML=`${weather_data.main.humidity}%`;

    windspeed.innerHTML=`${weather_data.wind.speed}KM/h`;

    switch(weather_data.weather[0].main){
        
        case 'Clouds':
            weatherimg.src="cloud.png";
            break;
            case 'Clear':
                weatherimg.src="clear.png";
                break;
                case 'Rain':
                    weatherimg.src="rain.png";
                    break;
                    case 'Mist':
                        weatherimg.src="mist.png";
                        break;
                        case 'Snow':
                            weatherimg.src="snow.png";
                            break;
    }
}
searchbtn.addEventListener('click',()=>{
    checkweather(inputbox.value);
})