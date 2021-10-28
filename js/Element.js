class Element{
    constructor(pos,tipe,name){
        this.pos=pos;
        this.tipe=tipe;
        this.name=name.toString();
    }

    addMe(){
        let obj=document.createElement("div");
        obj.classList.add(this.tipe);
        obj.classList.add(this.pos);
        obj.setAttribute("id",this.nombre.toString());
        let containGame=document.getElementById("stars");
        containGame.appendChild(obj);
    }
    getPos(){
        let me=document.getElementById(this.nombre);
        let posMe=me.getBoundingClientRect();
        
        return posMe;
    }
}