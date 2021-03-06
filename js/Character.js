class Character {
    constructor(tipe) {
        this.tipe = tipe;
        this.name = "character";
    }

//se agrega a si mismo al DOM dependiendo de los aprametros recibidos
    addMe() {

        let obs = document.createElement("div");
        obs.classList.add("character");

        let btn1= document.getElementById("avatar1");
         btn1.addEventListener('click',function(){
             if(obs.classList.contains("character2"))
             obs.classList.remove("character2");
            obs.classList.add("character");
           
         });


        let btn2 = document.getElementById("avatar2");
         btn2.addEventListener('click',function(){
            if(obs.classList.contains("character"))
            obs.classList.remove("character");
           obs.classList.add("character2");
           
         });

        
        obs.classList.add("pos2");
        obs.setAttribute("id", "character");
        let containGame = document.getElementById("stars");
        containGame.appendChild(obs);
    }
    //metodo q recibe un parametro y realiza un movimiento a partir de este
    move(key) {
        let character = document.getElementById("character");
        switch (key) {
            case ("KeyW"):
                if (character.classList.contains("pos3")) {
                    character.classList.remove("pos3")
                    character.classList.add("pos2")
                    
                } else if (character.classList.contains("pos2")) {
                    character.classList.remove("pos2")
                    character.classList.add("pos1")
                }
                break;
            case ("KeyS"):
                if (character.classList.contains("pos1")) {
                    character.classList.remove("pos1");
                    character.classList.add("pos2");
                } else if (character.classList.contains("pos2")) {
                    character.classList.remove("pos2");
                    character.classList.add("pos3");
                }
                break;
        }
    }
    //devuelve un objeto con sus pocicion actual
    getPos() {
        let me = document.getElementById(this.name);
        let posMe = me.getBoundingClientRect();
        return posMe;
    }
//se elimina as i mismo del DOM
    deleteMe(){
        let me=document.getElementById("character");
        let parent=me.parentNode;
        parent.removeChild(me);
    }
    //metodo q otorga animaciones a partir de einteraccion con otros elementos
    takeMoney(){
        let me=document.getElementById("character");
        if(me.classList.contains("character")){
            me.classList.remove("character");
            me.classList.add("characterMoney");
            setTimeout(this.remplaceClass,500,"characterMoney","character");
        }else {
            me.classList.remove("character2");
            me.classList.add("character2Money");
            setTimeout(this.remplaceClass,500,"character2Money","character2");
        }
    }
    //metodo q otorga animaciones a partir de einteraccion con otros elementos
    collision(){
        let me=document.getElementById("character");
        if(me.classList.contains("character")){
            me.classList.remove("character");
            me.classList.add("collision");
            setTimeout(this.remplaceClass,500,"collision","character");
        }else {
            me.classList.remove("character2");
            me.classList.add("collision");
            setTimeout(this.remplaceClass,500,"collision","character2");
        }
    }
    
    remplaceClass(ab,aa){
        let me=document.getElementById("character");
        me.classList.remove(ab);
        me.classList.add(aa);
    }
}