"use strict";

class Obstacle extends Element{
    constructor(pos,tipe,name){
        super(pos,tipe,name);
    }
    //se agrega a si mismo al DOM dependiendo de los aprametros recibidos
    addMe(){
        let bHclass;
        let obs=document.createElement("div");
        if(this.tipe==1){
            bHclass="blackhole";
        }else{
            bHclass="blackhole2";
        }
        obs.classList.add(bHclass);
        obs.classList.add("elementPos"+this.pos);
        obs.setAttribute("id",this.name);
        obs.setAttribute("onanimationend","removeMe("+ this.name +")");
        let containGame=document.getElementById("stars");
        containGame.appendChild(obs);

    }
    //devuelve un objeto con sus pocicion actual
    getPos(){
        let me=document.getElementById(this.name);
        let posMe=me.getBoundingClientRect();
        return posMe;
    }
    //se elimina as i mismo del DOM
    deleteMe(){
        
        let me= document.getElementById(this.name);
        me.classList.remove("blackhole");
        let parent = me.parentNode;
		parent.removeChild(me);
    }
    //este motodo saca 10 puntos al marcador de puntaje
    onCollicion(){
        let scoreBox=document.getElementById("score");
        let score=parseInt(scoreBox.innerHTML)
        scoreBox.innerHTML= score - 10;
        
    }
    //responde si es un bonus o no
    iAmABonus(){
        return false;
    }
   
}
