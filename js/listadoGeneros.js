window.onload = function(){
  var queryString = location.search
  var searchParams = new URLSearchParams(queryString);
  var id = searchParams.get("idGenero")
  var key = '14227022544b0f4bb15b6a738161d32f'
  var url
  var urlGenero = "pagina4.html"


    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key="+key+"&language=en-US")

        .then(function(respuesta) {
         return respuesta.json()
       })
        .then(function(informacion) {
         var peliculas = informacion.results
         console.log(informacion)

         for (var i = 0; i < 10 ; i++) { //informacion.results.length
          var genero = peliculas[i].genres
          var li;
          
          li = '<li>'
          li += '<h1>' + genero + '</h1>'
          li += '</li>'

          console.log(li);

          document.querySelector("section").innerHTML += li
         }
        })


}
