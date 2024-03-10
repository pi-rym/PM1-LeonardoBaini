/*function agregarActividad() {
    // Obtener los valores de los input
    const actividad1 = document.getElementById('actividad1').value;
    const actividad2 = document.getElementById('actividad2').value;
    const actividad3 = document.getElementById('actividad3').value;

    const envuelveNuevoContenedor = document.createElement('div');
    
    // Crear un nuevo contenedor de actividad
    const nuevoContenedor = document.createElement('div');
    nuevoContenedor.classList.add('actividad-contenedor');

    // Agregar el fondo con la URL de la imagen
    nuevoContenedor.style.backgroundImage = `url(${actividad3})`;

    // Agregar contenido al nuevo contenedor
    envuelveNuevoContenedor.innerHTML = `<p>${actividad1}</p><p>${actividad2}</p>`;
    
    // Agregar el nuevo contenedor a la sección de contenedores de actividades
    document.getElementById('contenedoresActividades').appendChild(nuevoContenedor);
    document.getElementById('contenedoresActividades').appendChild(envuelveNuevoContenedor);

    // Limpiar los campos de input y textarea
    document.getElementById('actividad1').value = '';
    document.getElementById('actividad2').value = '';
    document.getElementById('actividad3').value = '';
}

*/
class Activity{
    constructor(id,title,description,imgUrl){// constructor es palabra reservada
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository{

    constructor(activities = []){// por sugerencia de chatgpt para que por default se inicialice vacío si no se 
                                // coloca un arreglo
        /*Propiedad activities => Un arreglo para almacenar las actividades.*/ 
        this.activities = activities;
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
    createActivity (id,title,description,imgUrl){
        /*
        chatgpt sugiere:
        Gestión de duplicados en createActivity:
        En el método createActivity, podría ser útil verificar si ya existe una actividad con el mismo ID antes de agregarla al arreglo. 
        Si tu aplicación permite IDs duplicados, entonces está bien tal como está.
        */
    const activity = new Activity(id,title,description,imgUrl);
    this.activities.push(activity);

    }

    /*EXTRA CREDIT. Método deleteActivity => Debe recibir un id y filtrar el arreglo para eliminar la actividad correspondiente.*/ 
    deleteActivity(id){
    const activities1 = this.activities;
    const activitiesFiltered = activities1.filter(activity => activity.id != id);
    this.activities = activitiesFiltered;
   
    }
    /*
    chatgpt sugiere 
    deleteActivity(id) {
    this.activities = this.activities.filter(activity => activity.id !== id);
    //Esto evita la necesidad de crear variables adicionales y simplifica el código.
}
    */

  
}
//let activity = new Activity(1,"Correr","Trotar por el parque","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fes%2Fsearch%2Fcorrer&psig=AOvVaw3lKXXpPcybfqXvtAUPWi_h&ust=1710193440755000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJDBspbV6oQDFQAAAAAdAAAAABAE");

//console.log(activity);
/*
let repository = new Repository([]);
repository.createActivity(1,"Correr","Trotar por el parque","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fes%2Fsearch%2Fcorrer&psig=AOvVaw3lKXXpPcybfqXvtAUPWi_h&ust=1710193440755000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJDBspbV6oQDFQAAAAAdAAAAABAE");
repository.createActivity(2,"Jugar Tennis","Es divertido para pasar tiempo con amigos","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.asics.com%2Fes%2Fes-es%2Ftennis-advice%2Fwhat-to-wear-to-play-tennis%2F&psig=AOvVaw2FuvarrY3OzfArQTAfVyDs&ust=1710193763599000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMjLibDW6oQDFQAAAAAdAAAAABAE");
repository.createActivity(3,"Bicicleta","Haces ejercicio mientras te diviertes","https://okdiario.com/img/2019/01/21/como-organizar-un-paseo-en-bicicleta-655x368.jpg");
*/
/*
repository.deleteActivity(2);
repository.deleteActivity(1);
repository.deleteActivity(3);
*/

//console.log(repository.getAllActivities());