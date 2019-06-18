var url_string = window.location.href
 var url = new URL(url_string);
 var id_de_pelicula = url.searchParams.get("id");
 console.log(id_de_pelicula);
 var key = '14227022544b0f4bb15b6a738161d32f'
 var urlDetalle = "pagina5.html"
 var genero = url.searchParams.get("id");
 //var id = searchParams.get("idGenero")
 //var genders = information.genres[0]

window.addEventListener('load',function(){


   fetch("https://api.themoviedb.org/3/movie/"+id_de_pelicula+"?api_key="+key+"&language=en-US")
   .then (function(response) {
     return response.json();
   })
   .then (function(information){
     console.log(information);
     var pelicula = information
     var urlImg = "https://image.tmdb.org/t/p/original"
     var ul1 = document.querySelector("div.detalles section ul")

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
     li += '</li>'
     ul1.innerHTML += li

     })
     .catch(function(error){
       console.log("There was na error: " + error);
     })
//trailer


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
     li = "<li class='mySlides1'>"
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


})
