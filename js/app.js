let person=document.getElementById("person");
let contain=document.getElementById("contain");



//let asteroidPos=asteroid.getBoundingClientRect();
let personPos=person.getBoundingClientRect();

function getPosObs(){
    console.log(personPos.bottom)
 }
 

let obs=new Obstacle(1,1,"uno");
obs.addMe();
let obs1=new Obstacle(2,1,"dos");
obs1.addMe();
let obs2=new Obstacle(3,1,"tres");
obs2.addMe();

let game=document.getElementById("game");

function mover(){
    let key=event.code;
    switch (key){
        case("KeyW"):
            if(person.classList.contains("pos3")){
                person.classList.remove("pos3")
                person.classList.add("pos2")
            }else if(person.classList.contains("pos2")){
                person.classList.remove("pos2")
                person.classList.add("pos1")
            }
        break;
        case("KeyS"):
            if(person.classList.contains("pos1")){
                person.classList.remove("pos1");
                person.classList.add("pos2");
            }else if(person.classList.contains("pos2")){
                person.classList.remove("pos2");
                person.classList.add("pos3");
            }
        break;
    }
}

function colision(){
    let x=obs.getPos();
    if(x.left<=100){
        //alert("colisiono!!")
    }
    console.log(x.left);
}

//setInterval(colision,100);