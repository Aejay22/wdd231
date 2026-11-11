const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.62&units=metric&appid=c156c4c0d5ea661a3f3fa543543081f6";

const displayResults = (data)=>{
currentTemp.innerHTML = `${data.main.temp}&deg;C`;
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
