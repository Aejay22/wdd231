let currentYear = document.querySelector(".currentyear");
let lastModified = document.querySelector(".lastModified");

let date = new Date();
currentYear.textContent = date.getFullYear();
lastModified.textContent = document.lastModified;


let cards = document.querySelector("#cards")
const url = "https://aejay22.github.io/wdd231/chamber/chamber.js";

function displayMembers(members){
    members.forEach(member => {
                
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