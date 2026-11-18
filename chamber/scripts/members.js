
const url = "https://aejay22.github.io/wdd231/chamber/data/members.json";

function GetRandomMembers(members){
    const results = members.filter(member=> member.membership > 1);
    if (results.length > 3){
        let i = 3;
        let member = [];
        while (i != 0){
            const random = Math.random();
            const number = Math.floor(random * results.length);
            if (!member.includes(results[number])){
                member.push(results[number]);
                i--;
            }
        }
        return(member);
    }
    return(results);

}


let spotlight = document.querySelector(".spotlight");
function displayMembers(getRandomMembers){
    getRandomMembers.forEach(member => {
        let container = document.createElement("div");
        container.setAttribute("class", "container");
        if (member.membership == 3){
            container.style.setProperty("background-color", "gold");
        }
        else{
            container.style.setProperty("background-color", "silver");
        }

        let icon = document.createElement("img");
        icon.classList.add("image");
        icon.setAttribute("src", member.image);
        icon.setAttribute("alt", member.name);
        
        let name = document.createElement("strong");
        name.classList.add("name");
        name.textContent = member.name;


        let phone = document.createElement("p");
        phone.classList.add("phone");
        phone.textContent = member.phone;
        /* "name": "Green Leaf Pharmacy",
    "address": "8 Health Street, Tkumbu",
    "phone": "555-123-4503",
    "email": "care@greenleafpharmacy.example.com",
    "website": "greenleafpharmacy.example.com",
    "image": "https://aejay22.github.io/wdd231/images/green-leaf-pharmacy.webp",
    "membership": 2,
    "description": "Trusted pharmacy with friendly advice and home delivery.",
    "founded": 2009 */
        let address = document.createElement("p");
        address.textContent = member.address;

        let website = document.createElement("a");
        website.textContent = member.website;
        website.href = `https://${member.website}`;

        let level = document.createElement("p");
        level.textContent = `Level ${member.membership}`;


        
        container.appendChild(icon);
        container.appendChild(name);
        container.appendChild(phone);
        container.appendChild(website);
        container.appendChild(address);
        container.appendChild(level);

        spotlight.appendChild(container);
    });
}

function displayWeather(weatherData){
    console.log(weatherData);
    let filterer = weatherData.list[0].dt_txt;
    let filter = filterer.split(" ");
    console.log(filter);
    const dailyForecast = weatherData.list.filter(item=>item.dt_txt.includes(filter[1]));
    console.log(dailyForecast);
    const firstThreeDays = dailyForecast.slice(0,4);
    console.log(firstThreeDays);
    let weatherSection = document.querySelector(".weather");
   
    // first part      
    let currentWeather = document.createElement("div");
    currentWeather.setAttribute("class", "current");

    let image0 = document.createElement("img");
    image0.setAttribute("src", `https://openweathermap.org/img/wn/${firstThreeDays[0].weather[0].icon}@2x.png`);
    image0.setAttribute("alt", `An image of ${firstThreeDays[0].weather[0].description}`);
    currentWeather.appendChild(image0);

    let weatherCondition = document.createElement("div");
    let temp = document.createElement("strong");
    temp.innerHTML = `${firstThreeDays[0].main.temp}&deg;C`;

    let desc = document.createElement("p");
    desc.textContent = firstThreeDays[0].weather[0].description;

    weatherCondition.appendChild(temp);
    weatherCondition.appendChild(desc);

    currentWeather.appendChild(weatherCondition);

    weatherSection.appendChild(currentWeather);

    // second part
    let notCurrentWeather = document.createElement("div");
    notCurrentWeather.setAttribute("class", "notCurrentWeather");
    let t = 1;
    while(t != 4){
        let div = document.createElement("div");
        const date = new Date(firstThreeDays[t].dt_txt);
        const dayName = date.toLocaleDateString("en-US", {
            weekday: "short"
        });
        let dayname = document.createElement("strong");
        dayname.textContent = dayName;
        div.appendChild(dayname);

        let temperetete = document.createElement("p");
        temperetete.innerHTML = `${firstThreeDays[t].main.temp}&deg;C`;
        div.appendChild(temperetete);
        notCurrentWeather.appendChild(div);

        t++;
    }
    weatherSection.appendChild(notCurrentWeather);







}


const getMembers = async() =>{
    try{
        const response = await fetch(url);  
        if(!response.ok){
            throw new Error(`Response failed with status ${response.status}`);
        }
        const data = await response.json();
        displayMembers(GetRandomMembers(data));

    }catch(error){
        console.error(error);
    }
}


const urlWeather = "https://api.openweathermap.org/data/2.5/forecast?lat=6.59&lon=3.38&units=metric&appid=c156c4c0d5ea661a3f3fa543543081f6";

async function  getWeather (){
    try{
        const response = await fetch (urlWeather);
        if(!response.ok){
            throw new Error(`Response failed with status ${response.status}`);
        }
        else{
            const data = await response.json();
            displayWeather(data);
        }
    }catch(error){
        console.error(error);
    }
}


getMembers();
getWeather();