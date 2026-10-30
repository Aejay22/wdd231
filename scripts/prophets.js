const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";
const cards = document.querySelector("#cards");

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    const card = document.createElement('section');
    const fullName = document.createElement('h2'); // fill in the blank
    const portrait = document.createElement('img');
    const dateOfBirth = document.createElement("p");
    const placeOfBirth = document.createElement("p"); 

    // Build the h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank
    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
    placeOfBirth.textContent = `Place of birth: ${prophet.birthplace}`;


    // Append the section(card) with the created elements
    card.appendChild(fullName); // fill in the blank
    card.appendChild(dateOfBirth);
    card.appendChild(placeOfBirth);
    card.appendChild(portrait);


    cards.appendChild(card);
  }); // end of arrow function and forEach loop
}

const getProphetsData = async ()=>{
    try{
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        // console.table(data.prophets);
        displayProphets(data.prophets);

    }
    catch (error){
        console.error(error);

    }
    

}
getProphetsData();