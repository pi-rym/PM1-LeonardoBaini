

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
  tarjeta.appendChild(img);
  tarjeta.appendChild(p);

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

       

   /*
   EXTRA CREDIT. Implementar la funcionalidad de eliminar tarjetas del contenedor al hacer click sobre ellas
    o sobre algún nuevo botón que podamos agregar a las mismas. Eres libre de encarar esta funcionalidad de 
    la manera que consideres adecuada.  Puedes apoyarte en la IA para ayudarte a realizar este punto. 
   */ 
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

/*
 Tuve que comentar el código que hace referencia a "document" porque npm test no encuentra referencias a document y genera error:
 ReferenceError: document is not defined
    at Object.<anonymous> (C:\Users\Outlet\Documents\HENRY\MODULO1\PM1-LeonardoBaini\scripts\index.js:193:33)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Module.require (node:internal/modules/cjs/loader:1235:19)
    at require (node:internal/modules/helpers:176:18)
    at Object.<anonymous> (C:\Users\Outlet\Documents\HENRY\MODULO1\PM1-LeonardoBaini\spec\prueba.spec.js:7:31)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)

  const botonAgregarActividad = document.getElementById("botonSubmit");     
  botonAgregarActividad.addEventListener("click",eventHandler);
*/
module.exports = {Repository,Activity};

/*
Observación enccontrada, si se deja el module.exports, entonces el navegador dá error
index.js:210 Uncaught ReferenceError: module is not defined
    at index.js:210:1
si de deja const botonAgregarActividad = document.getElementById("botonSubmit");     
  botonAgregarActividad.addEventListener("click",eventHandler);
  en el momento del npm test, entonces dá error de referencia al objeto Document. 
*/
const botonAgregarActividad = document.getElementById("botonSubmit");     
  botonAgregarActividad.addEventListener("click",eventHandler);


