 var key = '14227022544b0f4bb15b6a738161d32f'
 var url_string = window.location.href
  var url = new URL(url_string);
  var id_de_pelicula = url.searchParams.get("id");
  console.log(id_de_pelicula);



window.addEventListener('load',function(){
if (window.sessionStorage.getItem("nombre")!="" && window.sessionStorage.getItem("nombre")!=null) {
  //  idPelicula = new URLSearchParams(location.search).get("idPelicula")
      var jsonFavoritas = localStorage.getItem("peliculasFavoritas")
      if (jsonFavoritas == null) {
        var favoritas = []
      } else {
        var objLit = JSON.parse(jsonFavoritas)
        var favoritas = objLit.caracteristica;
      }
fetch("https://api.themoviedb.org/3/movie/"+id_de_pelicula+"?api_key="+key+"&language=en-US")
      .then(function(data) {
        console.log(sessionStorage);
        return data.json()
      })
      .then(function(dataPeli) {
    //  var pelicula = information
        if (favoritas.indexOf(id_de_pelicula) >= 0) {
          document.querySelector(".estrellita").style.display="block"
        }
      document.querySelector(".estrellita").onclick = function() {
        if (favoritas.indexOf(id_de_pelicula) >= 0){
          var pos = favoritas.indexOf(id_de_pelicula)
          favoritas.splice(pos,1)
          document.querySelector(".estrellita").style.color= "gold"
        } else {
          favoritas.push(id_de_pelicula)
          document.querySelector(".estrellita").style.color= "white"
        }
          var objLit = {
            caracteristica: favoritas
          }
          var json = JSON.stringify(objLit)
          sessionStorage.setItem("peliculasFavoritas", json)
          console.log("peliculasFavoritas");
      }
    })
      .catch(function(error){
      console.log("There was na error: " + error);
        })
}
})
