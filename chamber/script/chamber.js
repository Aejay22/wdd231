let currentYear = document.querySelector(".currentyear");
let lastModified = document.querySelector(".lastModified");

let date = new Date();
currentYear.textContent = date.getFullYear();
lastModified.textContent = document.lastModified;


let cards = document.querySelector("#cards")
const url = "https://aejay22.github.io/wdd231/chamber/chamber.js";

function displayMembers(members){
    members.forEach(member => {
        let section = document.createElement("section");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");

        let h2 = document.createElement("h2");
        let tagLine = document.createElement("p");
        let hr = document .createElement("hr");

        let image = document.createElement("img");
        image.setAttribute("src", members.image);
        image.setAttribute("alt", `image of ${member.name}`);
        image.setAttribute("loading", "lazy");
        // image.setAttribute("width", "50");
        // image.setAttribute("height", "50");
        
        
        let email = document.createElement("p");
        let phone  = document.createElement("p");
        let url = document.createElement("p");

        h2.textContent = member.name;
        tagLine.textContent = "Business Tag Line"
        email.innerHTML = `<em>EMAIL:</em> ${member.email}`;
        phone.innerHTML = `<em>PHONE:</em> ${member.phone}`;
        url.innerHTML = `<em>URL:</em> ${member.website}`;

        section.appendChild(h2);
        section.appendChild(tagLine);
        section.appendChild(hr);

        div1.appendChild(image);
        div2.appendChild(email);
        div2.appendChild(phone);
        div2.appendChild(url);

        section.appendChild(div1);
        section.appendChild(div2);

        cards.appendChild(section);




    });
}


const getMembersCards = async (url)=>{
        try{
            const response = await fetch(url);
            if (!response.ok){
                throw new Error(`Response failed with status ${response.status}`);
            }
            const data = await response.json();
            displayMembers(data);
        }catch(error){
            console.error(error);
        }
} 

getMembersCards(url);