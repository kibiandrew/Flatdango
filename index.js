/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  //
const films = [
  {
    "id": "1",
    "title": "The Giant Gila Monster",
    "runtime": "108",
    "capacity": 30,
    "showtime": "04:00PM",
    "tickets_sold": 0,
    "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
  },
  {
    "id": "2",
    "title": "Manos: The Hands Of Fate",
    "runtime": "118",
    "capacity": 50,
    "showtime": "06:45PM",
    "tickets_sold": 0,
    "description": "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg"
  }
];

const filmLinks = document.querySelectorAll('.sidebar a');
const filmDetails = document.querySelector('.moviecard');
const purchaseButton = document.querySelector('#purchase');

filmLinks.forEach(link => {
  link.addEventListener('click', event => {
    // get the film title from the link
    const filmTitle = event.target.textContent;
    // find the film object in the films array
    const film = films.find(film => film.title === filmTitle);
    // update the film details on the page
    filmDetails.querySelector('#filmTitle').textContent = film.title;
    filmDetails.querySelector('#poster').src = film.poster;
    filmDetails.querySelector('#movieDescription').textContent = film.description;
    filmDetails.querySelector('#runtime').textContent = `Runtime: ${film.runtime} minutes`;
    filmDetails.querySelector('#capacity').textContent = `Capacity: ${film.capacity}`;
    filmDetails.querySelector('#showtime').textContent = `Showtime: ${film.showtime}`;
    filmDetails.querySelector('#soldtickets').textContent = `Tickets sold: ${film.tickets_sold}`;
  });
});
