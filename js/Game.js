let elements = [];
let countObstacles = 0;
let character;
let containGame;
let intervalVerify, intervalCreateElem;

function createObstacle() {
  let obs;
  if (Math.floor(Math.random() * (101 - 1)) >= 80) {
    let row = Math.floor(Math.random() * (4 - 1)) + 1; //asigna una fila entre 1 y 3
    countObstacles++;

    obs = new Bonus(row, 1, countObstacles);
    obs.addMe();
    elements.push(obs); //agrega el obstaculo a la lista de elementos
  } else {
    let row = Math.floor(Math.random() * (4 - 1)) + 1; //asigna una fila entre 1 y 3
    let tipe = Math.floor(Math.random() * (3 - 1)) + 1; //asigna un modelo de obs entre 1 y 2
    countObstacles++;
    obs = new Obstacle(row, tipe, countObstacles);
    obs.addMe();
    elements.push(obs); //agrega el obstaculo a la lista de elementos
  }
}

function verifyCollision() {
  let characPos = character.getPos();
  for (let i = 0; i < elements.length; i++) {
    //recorre todos los elemtos y revisa colicion
    let elemPos = elements[i].getPos();

    if (elemPos.left <= 0) {
      elements[i].deleteMe();
      elements.splice(i, 1);
    } else if (
      collicionX(elemPos, characPos) &&
      collicionY(elemPos, characPos)
    ) {
      if(elements[i].iAmABonus()){
      character.takeMoney();
      }
      else{
        character.collision();
      }
      elements[i].onCollicion();
      elements[i].deleteMe();
      elements.splice(i, 1);
    }
  }
}
function collicionY(objet, characPos) {
  let cPosTop = characPos.top;
  let cPosBottom = characPos.top + characPos.height;
  let oPosTop = objet.top;
  let oPosBottom = objet.top + objet.height;
  //si la parte superior del personaje esta entre el borde superior y el inferior del obstaculo
  //o si
  //si la parte inferior del personaje esta entre el borde superior y el inferior del obstaculo
  if (
    (cPosTop >= oPosTop && cPosTop <= oPosBottom) ||
    (cPosBottom >= oPosTop && cPosBottom <= oPosBottom)
  ) {
    return true;
  } else return false;
}

function collicionX(objet, characPos) {
  let cPosLeft = characPos.left;
  let cPosRight = characPos.left + characPos.width;
  let oPosLeft = objet.left;
  let oPosRight = objet.left + objet.width;
  //si la parte superior del personaje esta entre el borde superior y el inferior del obstaculo
  //o si
  //si la parte inferior del personaje esta entre el borde superior y el inferior del obstaculo
  if (
    (cPosLeft >= oPosLeft && cPosLeft <= oPosRight) ||
    (cPosRight >= oPosLeft && cPosRight <= oPosRight)
  ) {
    return true;
  } else return false;
}

function createGame() {
  //creo el espacio
  let space = createContainsGame("space");
  //creo los planetas y los agrego dentro del espacio
  let planets = createContainsGame("planets");
  space.appendChild(planets);
  //creo las estrellas y los agrego dentro del planetas
  let stars = createContainsGame("stars");
  planets.appendChild(stars);
  //agrego todas las reaciones al DOM;
  let body = document.getElementById("body");
  body.appendChild(space);
  containGame = document.getElementById("stars");
  character = new Character();
  character.addMe();
  intervalVerify = setInterval(verifyCollision, 10);
  intervalCreateElem = setInterval(createObstacle, 1400);
}

//crea elementos html con la clase containsgamer
function createContainsGame(elemName) {
  let elem = document.createElement("div");
  elem.classList.add(elemName);
  elem.classList.add("containsGame");
  elem.setAttribute("id", elemName);
  return elem;
}

function removeMe(id) {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].name == id) {
      elements[i].deleteMe();
      elements.splice(i);
    }
  }
}
//llama al metodo mover del personaje con el codigo de tecla para q este actue.
function moveCharacter() {
  character.move(event.code);
}
window.onload = createGame();

function deleteCharacter() {
  character.deleteMe();
  clearInterval(intervalVerify);
  clearInterval(intervalCreateElem);
}
