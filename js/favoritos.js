var key = '14227022544b0f4bb15b6a738161d32f'
var urlDetalle = "pagina5.html"

window.addEventListener("load",  function(){

  if (window.sessionStorage.getItem("nombre")!="" && window.sessionStorage.getItem("nombre")!=null) {
  alert("Bienvenido "+ window.sessionStorage.getItem("nombre"))
  document.querySelector('a button.login').innerHTML = window.sessionStorage.getItem("nombre")
  }

// guardo el arrayDePelisFavoritas que esta en sessionStorage
arrayDePelisFavoritas = JSON.parse(window.sessionStorage.getItem("favorita"));

// checkeo que el array tenga por lo menos una peli favorita (un item)
if (arrayDePelisFavoritas.length>0) {
  // como arrayDePelisFavoritas es un array, necesito recorrerlo
  for (var i = 0; i < arrayDePelisFavoritas.length; i++) {
    // recorro el array para obtener cada ID y hago un fetch (AJAX) para obtener la data de cada peli
    var url = "https://api.themoviedb.org/3/movie/"+arrayDePelisFavoritas[i]+"?api_key="+key+"&language=en"
    var urlImg = "https://image.tmdb.org/t/p/original"
    fetch(url)
        .then(function(respuesta) {
         return respuesta.json()
       })
        .then(function(pelicula) {
          // guardo en pelicula el objeto literal que recibo como respuesta
         console.log(pelicula)
         // capturo el UL para insertar dentro de el, cada peli como LI
         var arrayDePeliculas = information.results
         var urlImg = "https://image.tmdb.org/t/p/original"
         var poster
         var title
         var ul = document.querySelector("section ul")
         poster = arrayDePeliculas[i].poster_path
         title = arrayDePeliculas[i].title
         console.log(arrayDePeliculas[i].title)
         // genero el LI
         var li;
         li = "<li>"
         li += "<a href='"+urlDetalle+"?id="+arrayDePeliculas[i].id+"'>"
         li += "<h1>"+ title +"</h1>"
         li += '<img src='+ urlImg + poster + '>'
         li += "</a>"
         li += "</li>"
         // modifico el HTML del UL
         ul.innerHTML += li

        })
        .catch(function(error) {
        console.log("error "+ error)
        })

  }

}


})


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
