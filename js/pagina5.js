var url_string = window.location.href
 var url = new URL(url_string);
 var id_de_pelicula = url.searchParams.get("id");
 console.log(id_de_pelicula);
 var key = '14227022544b0f4bb15b6a738161d32f'
 var urlDetalle = "pagina5.html"
 var genero = url.searchParams.get("id");
 //var id = searchParams.get("idGenero")
 //var genders = information.genres[0]

window.onload = function (){
  console.log(sessionStorage);
 if (window.sessionStorage.getItem("nombre")!="" && window.sessionStorage.getItem("nombre")!=null) {
  document.querySelector(".estrellita").style.display = "block"
  document.querySelector('a button.login').innerHTML = window.sessionStorage.getItem("nombre")
 }
//     onload.addEventListener('load',function(){
//
//     //console.log(sessionStorage);
//     if (window.sessionStorage.getItem("nombre")!="" && window.sessionStorage.getItem("nombre")!=null) {
//       window.addEventListener("load", function() {
//         idPelicula = new URLSearchParams(location.search).get("idPelicula")
//           var jsonFavoritas = localStorage.getItem("peliculasFavoritas")
//           if (jsonFavoritas == null) {
//             var favoritas = []
//           } else {
//             var objLit = JSON.parse(jsonFavoritas)
//             var favoritas = objLit.caracteristica;
//           }
// fetch("https://api.themoviedb.org/3/movie/"+id_de_pelicula+"?api_key="+key+"&language=en-US")
//           .then(function(data) {
//             return data.json()
//           })
//           .then(function(dataPeli) {
//             console.log(information);
//           var pelicula = information
//        })
//        // .catch(function(error){
//        //   console.log("There was na error: " + error);
//        // })
//             if (favoritas.indexOf(idPelicula) >= 0) {
//               document.querySelector(".estrellita").style.display="block"
//             }
//           document.querySelector("ESTRELLA").onclick = function() {
//             if (favoritas.indexOf(idPelicula) >= 0){
//               var pos = favoritas.indexOf(idPelicula)
//               favoritas.splice(pos,1)
//               document.querySelector(".estrellita").style.color= "gold"
//             } else {
//               favoritas.push(idPelicula)
//             }
//               var objLit = {
//                 caracteristica: favoritas
//               }
//               var json = JSON.stringify(objLit)
//               localStorage.setItem("peliculasFavoritas", json)
//           }
//       })
//   }
// })
   fetch("https://api.themoviedb.org/3/movie/"+id_de_pelicula+"?api_key="+key+"&language=en-US")
   .then (function(response) {
     return response.json();
   })
   .then (function(information){
     console.log(information);
     var pelicula = information
     var urlImg = "https://image.tmdb.org/t/p/original"
     var ul = document.querySelector("div.detalles section ul")

     var detalles = pelicula.overview
     var title = pelicula.title
     var poster = pelicula.poster_path
     var detalle = pelicula.overview
    // var genero = pelicula.genres
     var fecha = pelicula.release_date
     var idioma = pelicula.original_language
     var li

     var arrayDeGeneros = pelicula.genres
     var genero = arrayDeGeneros[0]
     console.log(genero.name);

     li = '<li>'
     li += '<h2>'+ title +'</h2>'
     li += '<img src='+ urlImg + poster + '>'
     li += '<p>'+ detalles +'</p>'
     li += '<p>'+ "genero:" + genero.name +'</p>'
     li += '<p>'+ "Estreno:" + fecha +'</p>'
     li += '<p>'+ "Idioma:" + idioma +'</p>'
    // li += '<span class="estrellita">' + "&#9733;" + '</span>'
     li += '</li>'
     ul.innerHTML += li

     })
     .catch(function(error){
       console.log("There was na error: " + error);
     })
//trailer
//else cierre
//}
     fetch("https://api.themoviedb.org/3/movie/" + id_de_pelicula + "/videos?api_key=" + key + "&language=en-US")

     .then (function(response) {
       return response.json();
     })
     .then (function(information){
       console.log(information.results);
       var arrayDePeliculas = information.results
       var key = arrayDePeliculas[0].key
       console.log(key);
       document.querySelector("div.trailer iframe").src += key

   })
   .catch(function(error){
     console.log("There was na error: " + error);
   })


fetch("https://api.themoviedb.org/3/movie/"+ id_de_pelicula+ "/recommendations?api_key="+key+"&language=en-US&page=1")
.then (function(response) {
  return response.json();
})
.then (function(information){
  console.log(information);
  console.log(information.results);
  var arrayDePeliculas = information.results
  console.log(arrayDePeliculas);
  var urlImg = "https://image.tmdb.org/t/p/original"
  var poster
  var title
  var genero
  var li
  var ul = document.querySelector("section.recomendadas ul")

  for (var i = 0; i < 5; i++) {
    genero = arrayDePeliculas[i].genres
     poster = arrayDePeliculas[i].poster_path
     title = arrayDePeliculas[i].title
     video = arrayDePeliculas[i].video
     console.log(arrayDePeliculas[i].title)
//carrusel
     li += "<li class='mySlides1'>"
     li += "<a href='"+urlDetalle+"?id="+arrayDePeliculas[i].id+"'>"
     li += "<h1>"+ title +"</h1>"
     li += '<img src='+ urlImg + poster + '>'
     li += "</a>"
     li += "</li>"
     ul.innerHTML += li
    //console.log(poster);
  }

  showSlides(1, 0);

  })
   .catch(function(error){
      console.log("There was na error: " + error);
    })


}
