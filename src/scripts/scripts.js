// import interact from 'interact';

/*
  TODO:
    2. others disappear when a terrarium is clicked
*/

const terrariums = Array.from(document.querySelectorAll('.terrarium'));
let selectedTerrarium = [];


terrariums.map((terrarium) => {
  terrarium.onclick = () => { 
    terrarium.classList.toggle("selected")
  }
}).filter((terrarium) => {
  return terrarium.classList.contains("selected");
})








