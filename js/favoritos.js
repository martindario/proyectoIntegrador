//cuando me logueo debo inicializar el array donde voy a guardar las pelis favoritas

var arrayDePelisFavoritas = []

function agregarFavoritos(id){
  alert("Agregado a favoritos!!")

  if(arrayDePelisFavoritas.idexOf(id)===-1){
   sessionStorage.setItem("favorita",id)
   var favorita=""
   //en este caso no es favorita

   //pusheo el id dentro del array
   arrayDePelisFavoritas.push(id)
   // guardo en session el array como es un obj debo transformarlo en string
   window.sessionStorage.serItem("favorita",JSON.stringify(arrayDePelisFavoritas))



//  sessionStorage("favorita",id)
  console.log(id);
  console.log(JSON.parse(window.sessionStorage.getItem("favorita")));
}
  else {
//la peli ya es fav
//la saco del array
arrayDePelisFavoritas.splice(arrayDePelisFavoritas.idesOf(id),1,id)
// reemplazo el array que tenia la peli como fav, por el array que ya no la tiene

window.sessionStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
  }
}

// 
// // CUANDO INGRESO; DEBO INICIALIZAR EL ARRAY DONDE VOY A GUARDAR LAS PELIS FAVORITAS
// var arrayDePelisFavoritas = [] // ESTO IRIA LUEGO DE HACER LOG IN
//
//
// function agregarFavoritos(id) {
//  alert("me clickearon!!!")
//  // PRIMERO, reviso si hay alguna peli FAVORITA (en el array)
//  if (arrayDePelisFavoritas.indexOf(id)===-1) {
//      // EN ESTE CASO NO ES FAVORITA
//      // pusheo el id dentro del array
//      arrayDePelisFavoritas.push(id)
//      // guardo en session el array, como es un objeto debo transformarlo a STRING
//      window.sessionStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
//  } else {
//    // ESTA PELI YA ES FAVORITA
//    console.log(arrayDePelisFavoritas.indexOf(id));
//    // la saco del array
//    arrayDePelisFavoritas.splice(arrayDePelisFavoritas.indexOf(id),1)
//    console.log(arrayDePelisFavoritas);
//    // reemplazo el array que tenia la peli como favorita, por el array que ya no la tiene
//    window.sessionStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
//  }
//
//  console.log(id);
//  console.log(JSON.parse(window.sessionStorage.getItem("favorita")));
// }
