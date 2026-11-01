let currentYear = document.querySelector(".currentyear");
let lastModified = document.querySelector(".lastModified");

let date = new Date();
currentYear.textContent = date.getFullYear();
lastModified.textContent = document.lastModified;


let cards = document.querySelector("#cards")
const url = "https://aejay22.github.io/wdd231/chamber/data/members.json";

function displayMembers(members){
    members.forEach(member => {
        let section = document.createElement("section");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        div3.className = "divThree";

        let h2 = document.createElement("h2");
        let tagLine = document.createElement("p");
        let hr = document .createElement("hr");

        let image = document.createElement("img");
        image.setAttribute("src", member.image);
        image.setAttribute("alt", `image of ${member.name}`);
        image.setAttribute("loading", "lazy");
        
        
        let email = document.createElement("a");
        let phone  = document.createElement("p");
        let url = document.createElement("p");
        let website = document.createElement("a");

        h2.textContent = member.name;
        tagLine.textContent = "Business Tag Line"
        email.innerHTML = `<strong>EMAIL:</strong> ${member.email}`;
        phone.innerHTML = `<strong>PHONE:</strong> ${member.phone}`;
        website.href = `https://${member.website}`;
        website.textContent = member.website;
        url.innerHTML = `<strong>URL:</strong> `;
        url.appendChild(website);

        website.href = `https://${member.url}`;

        section.appendChild(h2);
        section.appendChild(tagLine);
        section.appendChild(hr);

        div1.appendChild(image);
        div1.className = "divOne";
        div2.appendChild(email);
        div2.appendChild(phone);
        div2.appendChild(url);
        div2.className = "divTwo";

        div3.appendChild(div1);
        div3.appendChild(div2);

        section.appendChild(div3);

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

let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("show");
    menu.classList.toggle("show");
});

const footer = document.querySelector("footer");
const grid = document.querySelector("#grid");
const list = document.querySelector("#list");

grid.addEventListener("click", () => {
    footer.classList.remove("list-view");
    footer.classList.add("grid-view");
    cards.classList.remove("list-view");
    cards.classList.add("grid-view");
});

list.addEventListener("click", () => {
    footer.classList.remove("grid-view");
    footer.classList.add("list-view");
    cards.classList.remove("grid-view");
    cards.classList.add("list-view");
});