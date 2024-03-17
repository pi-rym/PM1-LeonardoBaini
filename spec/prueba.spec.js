/*describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
});*/

const {Repository,Activity} = require("../scripts/index");

describe("Pruebas de clase Repository",()=>{

  let repository;
  beforeEach(() => {
    repository = new Repository();
    repository.createActivity ("title1","description1","imgUrl1");
    repository.createActivity ("title2","description2","imgUrl2");
    repository.createActivity ("title3","description3","imgUrl3");
    repository.createActivity ("title4","description4","imgUrl4");
    repository.createActivity ("title5","description5","imgUrl5");
  });

      it("Agregar elemento al Repository",() => {        
       
        expect(repository.getAllActivities()).toHaveSize(5);

      });

      it("Verificar parametros de activity",() =>{
       
        
        let allActivities = repository.getAllActivities();
       
        expect(allActivities[0].id).toBe(0);
        expect(allActivities[0].title).toBe("title1");
        expect(allActivities[0].description).toBe("description1");
        expect(allActivities[0].imgUrl).toBe("imgUrl1");    

      });

      it("Borrar activity, debe verificar que borre lo correcto",() =>{

        
        let repository2 = new Repository();
       
        repository.deleteActivity(1);
        repository.deleteActivity(3);
        repository.deleteActivity(4);

        expect(repository.getAllActivities()).toHaveSize(2);
        let activity0 = repository.getAllActivities()[0];
        let activity2 = repository.getAllActivities()[1];
        
        expect(activity0.id).toBe(0);
        expect(activity2.id).toBe(2);
       


      });

      describe("Pruebas Activity",() => {

        it("Verifica que es una clase (object)",()=>{

         expect(typeof(Activity.prototype)).toBe("object");

        
        });


      });





});
