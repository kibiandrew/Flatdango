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
  let movie;
document.addEventListener("DOMContentLoaded", () =>{
  getFilm()
  
  })
  //link to connect to the json db
const getFilm =()=>{
  fetch("http://localhost:3000/characters")
  .then(response => response.json())
  .then(getMovie)
}
const infodiv = document.querySelector("filmTitle");
  infodiv.innerHTML = character.name
  const moviePoster =document.querySelector ("img#poster");
  moviePoster.src =film.image;
  const movieDescription=document.querySelector("#movieDescription")
  film.innerHTML=film.movieDescription;
  const runtime=document.querySelector("#runtime")
  film.innerHTML=film.runtime;
  const capacity=document.querySelector("#capacity")
  film.innerHTML=film.capacity;
  const showtime=document.querySelector("#showtime")
  film.innerHTML=film.showtime;
  const soldtickets=document.querySelector("#soldticket")
  film.innerHTML=film.soldtickets;

  //calculate available tickets
  const capacity = document.getElementById("capacity")
  let tickets =Number(movie.capacity -Movie.tickets_sold)
 while (tickets >=1 && tickets <=30)=>{
  capacity-tickets;
  
 }
