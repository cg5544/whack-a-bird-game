const holes = document.querySelectorAll('.hole')
const scoreBoard = document.querySelectorAll('.score')
const moles = document.querySelectorAll('.mole')

let lastHole

// generates random amount of time
function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + 10);
}

// get random hole at a time
function randHole(holes) {
  //choose a random index between 0 and holes.length and round down
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];

  // we do not want same hole twice in a role. If it's, we n
  if (hole === lastHole) {
    return randHole(holes);
  }

  lastHole = hole
  return hole;
}

function popUp() {
  const time = randTime(300, 1200);
  const hole = randHole(holes);

  hole.classList.add('up');
}
