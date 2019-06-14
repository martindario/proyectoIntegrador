window.addEventListener('load',function(){

  var url_string = window.location.href
   var url = new URL(url_string);
   var id_de_pelicula = url.searchParams.get("id");
   console.log(id_de_pelicula);


   var key = '14227022544b0f4bb15b6a738161d32f'

   fetch("https://api.themoviedb.org/3/movie/"+id_de_pelicula+"?api_key="+key+"&language=en-US")
   .then (function(response) {
     return response.json();
   })
   .then (function(information){
     console.log(information);
     var arrayDePeliculas = information.results
     var urlImg = "https://image.tmdb.org/t/p/original"
     var detalles = information.overview
     var ul1 = document.querySelector("section ul")

     li += '<h1>'+ title +'</h1>'
     li += '<img src='+ urlImg + poster + '>'
     li += '<p>'+ urlDetalle +'</p>'
     li += '</li>'
     ul1.innerHTML += li
     })
     .catch(function(error){
       console.log("There was na error: " + error);
     })
   }) 
