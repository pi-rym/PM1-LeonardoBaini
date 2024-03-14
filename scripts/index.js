

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

const repository = new Repository();
const activity = new Activity();

//Recibir por parámetro un objeto instancia de Activity.

const activityToHtml = (activity) =>{

    //Extraer sus propiedades en variables utilizando destructuring.
    const{id,title,description,imgUrl} = activity;
 //  Crear los elementos HTML que formarán parte de la tarjeta.
  //   Ej: <h3> para el título, <p> para la descripción, <img> para la imagen.
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const img = document.createElement("img");
  img.src = imgUrl;
  /*
  Asignar los valores a las propiedades correspondientes a cada uno de los
  elementos. Ej: a la propiedad innerHTML del elemento del título, asignar 
  el valor correspondiente. A la propiedad src del elemento de la imagen, 
  asignar el valor correspondiente.
  */ 
  h3.innerHTML = title;
  p.innerHTML = description;
  
  img.innerHTML = imgUrl;
  /*
  Agregar a los elementos las clases CSS correspondientes que hayas
  implementado para darles estilos.
  */ 
  h3.classList.add("h3");
  p.classList.add("p");
  img.classList.add("img");
  

  /*
  Crear un elemento <div> que será la tarjeta donde incluiremos
  todos los demás elementos.
  */
  const tarjeta = document.createElement("div");
  /*
  “Appendear” al nuevo <div> los elementos creados anteriormente .
  */
  tarjeta.appendChild(h3);
  tarjeta.appendChild(p);
  tarjeta.appendChild(img);

  /*
  Asignar al <div> la clase CSS que tengas implementada para darle estilos.
  */
  tarjeta.classList.add("actividad");
  tarjeta.id = id;

  

  
  /*
  Retornar el <div> finalizado con todos los elementos correspondientes dentro.
  */
  return tarjeta;

}


const convertInstancesFromActivityToHtml = (repository) =>{
    
/*Seleccionar el contenedor donde queremos agregar las actividades.*/
const contenedorActividadesFavoritas = document.getElementById("contenedorActividadesFavoritas");
/*
Vaciar el contenido actual del contenedor. Se puede hacer manipulando la
propiedad innerHTML.
*/
contenedorActividadesFavoritas.innerHTML = "";
/*
Obtener el listado completo de actividades mediante el método correspondiente
de una instancia de Repository.
*/
const activities = repository.getAllActivities();
/*“Mapear” el listado de actividades para convertirlos todos en elementos HTML.
Para ello utilizar el método “map”, aprovechando como callback la función que 
hicimos en el punto anterior. Guardar el resultado del mapeo en una nueva variable.*/


// Nota mental: activityToHtml se ejecutará por cada elemento del array
// no es necesario colocarle el parámetro en la funcion, al parecer es implicito
const mapedActivities = activities.map(activityToHtml);
/*
“Appendear” todos los elementos HTML del nuevo array dentro del contenedor seleccionado.
 Para ello puedes utilizar el método forEach.
*/



mapedActivities.forEach(element => {
    contenedorActividadesFavoritas.appendChild(element);

    //Extracredit
    element.addEventListener("click",()=>{
        repository.deleteActivity(element.id);// a cada elemento le asigno un eventlistener con su id
        convertInstancesFromActivityToHtml(repository);//una vez borrado hago recursion y que renderice
        
    });


});
}




const eventHandler = () =>{
    //Seleccionar los inputs de title, description e imgUrl.
    //Tomar los valores ingresados en los inputs y guardarlos en variables.
    const title = document.getElementById("nombreActividad").value;
    const description = document.getElementById("descripcionActividad").value;
    const imgUrl = document.getElementById("urlImagen").value;

    /*
    Validar que estos valores estén completos. De lo contrario deberá
    cortar el proceso y mostrar un mensaje avisando al usuario de que hay datos incompletos.
    */ 
   
    if(title.length === 0 || description.length === 0 || imgUrl.length === 0){
        alert("Por favor complete todos los campos");
        return;
   }else{
    /*
    Llamar al método correspondiente de la instancia de Repository para crear una nueva actividad.
    */ 
    repository.createActivity(title,description,imgUrl);

    /*
    Invocar la función que implementamos en el punto anterior para “refrescar” el contenedor de actividades.
    */
    convertInstancesFromActivityToHtml(repository);

   
   }
}


   

   const botonAgregarActividad = document.getElementById("botonSubmit");
     
   botonAgregarActividad.addEventListener("click",eventHandler);

   /*const imagenesTecnologiasFavoritas=document.getElementById("imagenesTecnologiasFavoritas");
   imagenesTecnologiasFavoritas.addEventListener("click",function(){
    alert("hola!!!");
   });*/
   
   //mapedActivities.forEach(element =>{
   // element.addEventListener("click",alert("AAAAAhhhhhh!!!"));

   

   /*
   EXTRA CREDIT. Implementar la funcionalidad de eliminar tarjetas del contenedor al hacer click sobre ellas
    o sobre algún nuevo botón que podamos agregar a las mismas. Eres libre de encarar esta funcionalidad de 
    la manera que consideres adecuada.  Puedes apoyarte en la IA para ayudarte a realizar este punto. 
   */ 



























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