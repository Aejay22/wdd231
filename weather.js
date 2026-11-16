const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const name = document.querySelector("#name");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=6.59&lon=3.38&units=metric&appid=c156c4c0d5ea661a3f3fa543543081f6";

const displayResults = (data)=>{
currentTemp.innerHTML = `${data.main.temp}&deg;C`;
name.innerHTML = data.name + " " + data.sys.country;
const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
const desc = data.weather[0].description;
weatherIcon.setAttribute('src', iconsrc);
weatherIcon.setAttribute('alt', desc);
captionDesc.textContent = desc;
}

const  apiFetch = async()=>{
    try{ 
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }else{
            throw new Error(await response.text());
        }

    }catch(error){
        console.error(error);
    }
}
apiFetch();
