
class Activity{
    constructor(id,title,description,imgUrl){// constructor es palabra reservada
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository{

    constructor(){
       this.id = 0;
       this.activities = []; // code review
    };

    /*
    Método getAllActivities => Debe retornar un arreglo con todas las actividades.
    */
    getAllActivities () {
        return this.activities;
    }

    /*
    Método createActivity => Debe instanciar una actividad con los datos correspondientes y almacenarla en su arreglo.
    */
    createActivity (title,description,imgUrl){
    const id = this.id ++;  
    const activity = new Activity(id,title,description,imgUrl);
    this.activities.push(activity);

    }

    /*EXTRA CREDIT. Método deleteActivity => Debe recibir un id y filtrar el arreglo para eliminar la actividad correspondiente.*/ 
    deleteActivity(id){
    
    this.activities  = this.activities.filter(activity => activity.id != id);
       
    }
    

  
}
const body = document.getElementsByTagName("body")[0];

function agregarActividad(){
    const actividades = document.getElementById("contenedorActividadesFavoritas");
    const nombreActividad = document.getElementById("nombreActividad").value;
    const descripcionActividad = document.getElementById("descripcionActividad").value;
    const urlImagen = document.getElementById("urlImagen").value;
    const envuelveActividad = document.createElement("div");
    const actividad = document.createElement("div");
    envuelveActividad.appendChild(
        document.createTextNode(nombreActividad)
    );
    actividad.classList.add("actividad");
    actividad.style.backgroundImage = `url(${urlImagen})`;
    
    envuelveActividad.appendChild(actividad);
    envuelveActividad.appendChild(
        document.createTextNode(descripcionActividad)
    );
   /* console.log(nombreActividad);
    console.log(descripcionActividad);
    console.log(urlImagen);
    */
    actividades.appendChild(envuelveActividad);
    body.appendChild(actividades);
}

const botonAgregarActividad = document.getElementById("botonSubmit");
botonAgregarActividad.addEventListener("click",agregarActividad);


/*
//let activity = new Activity(1,"Correr","Trotar por el parque","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fes%2Fsearch%2Fcorrer&psig=AOvVaw3lKXXpPcybfqXvtAUPWi_h&ust=1710193440755000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJDBspbV6oQDFQAAAAAdAAAAABAE");
//console.log(activity);

let repository = new Repository([]);
repository.createActivity("Correr","Trotar por el parque","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fes%2Fsearch%2Fcorrer&psig=AOvVaw3lKXXpPcybfqXvtAUPWi_h&ust=1710193440755000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJDBspbV6oQDFQAAAAAdAAAAABAE");
repository.createActivity("Jugar Tennis","Es divertido para pasar tiempo con amigos","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.asics.com%2Fes%2Fes-es%2Ftennis-advice%2Fwhat-to-wear-to-play-tennis%2F&psig=AOvVaw2FuvarrY3OzfArQTAfVyDs&ust=1710193763599000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMjLibDW6oQDFQAAAAAdAAAAABAE");
repository.createActivity("Bicicleta","Haces ejercicio mientras te diviertes","https://okdiario.com/img/2019/01/21/como-organizar-un-paseo-en-bicicleta-655x368.jpg");


repository.deleteActivity(2);
repository.deleteActivity(1);
//repository.deleteActivity(3);


console.log(repository.getAllActivities());
*/