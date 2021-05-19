/* requerir módulo autos */
const { filter } = require('./autos');
let autos = require('./autos');

const concesionaria = {
    /* completar */
   autos : autos,
 
   buscarAuto: function(patente){
      for (let i=0; i<autos.length;i++){
         if(autos[i].patente == patente){
            return autos[i]
         }
      }
   },

   venderAuto: function(patente){
      this.buscarAuto(patente).vendido = true;
      return this.buscarAuto(patente)
   },
   autosParaLaVenta : function(){
     let aLaVenta =this.autos.filter(function(auto){
      return (auto.vendido === false);
   }
   );
  return aLaVenta;
   } ,

   autosNuevos : function (){
       let kilometraje = this.autosParaLaVenta()
       let filtro = kilometraje.filter(function(auto){
           return (auto.km < 100);
       });
       return filtro;
   }
}

console.log(concesionaria.venderAuto('JJK116'))
console.log(concesionaria.autosNuevos())