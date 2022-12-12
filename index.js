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