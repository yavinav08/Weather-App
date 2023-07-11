const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'bbc1a8fd7fmsh1be64261e3a4d4dp196befjsne50f49ef161e',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const getWeather=(city)=>{
  cityname.innerHTML=city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
  .then(response => response.json())
  .then(response => {

    console.log(response)

    cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_degrees.innerHTML = response.wind_degrees
    wind_speed.innerHTML = response.wind_speed
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset

  })
  .catch(err => console.log(err));
}
submit.addEventListener("click",(e)=>{
  e.preventDefault();
  getWeather(city.value)
})

getWeather("Delhi");
const fillweather=()=>{
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
  .then(response => response.json())
  .then(response => {

    console.log(response)

    b1.innerHTML = response.cloud_pct
    b2.innerHTML = response.feels_like
    b3.innerHTML = response.humidity
    b4.innerHTML = response.max_temp
    b5.innerHTML = response.min_temp
    b6.innerHTML = response.wind_degrees
    b7.innerHTML = response.wind_speed

  })
  .catch(err => console.log(err));
}
const fillweather2=()=>{
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shangai', options)
  .then(response => response.json())
  .then(response => {

    console.log(response)

    s1.innerHTML = response.cloud_pct
    s2.innerHTML = response.feels_like
    s3.innerHTML = response.humidity
    s4.innerHTML = response.max_temp
    s5.innerHTML = response.min_temp
    s6.innerHTML = response.wind_degrees
    s7.innerHTML = response.wind_speed

  })
  .catch(err => console.log(err));
}
const fillweather3=()=>{
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
  .then(response => response.json())
  .then(response => {

    console.log(response)

    l1.innerHTML = response.cloud_pct
    l2.innerHTML = response.feels_like
    l3.innerHTML = response.humidity
    l4.innerHTML = response.max_temp
    l5.innerHTML = response.min_temp
    l6.innerHTML = response.wind_degrees
    l7.innerHTML = response.wind_speed

  })
  .catch(err => console.log(err));
}
const fillweather4=()=>{
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
  .then(response => response.json())
  .then(response => {

    console.log(response)

    k1.innerHTML = response.cloud_pct
    k2.innerHTML = response.feels_like
    k3.innerHTML = response.humidity
    k4.innerHTML = response.max_temp
    k5.innerHTML = response.min_temp
    k6.innerHTML = response.wind_degrees
    k7.innerHTML = response.wind_speed

  })
  .catch(err => console.log(err));
}
fillweather();
fillweather2();
fillweather3();
fillweather4();
