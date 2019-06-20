//window.addEventListener('load',function(){

//console.log(sessionStorage);
if (window.sessionStorage.getItem("nombre")!="" && window.sessionStorage.getItem("nombre")!=null) {
  window.addEventListener("load", function() {
    idPelicula = new URLSearchParams(location.search).get("idPelicula")
      var jsonFavoritas = localStorage.getItem("peliculasFavoritas")
      if (jsonFavoritas == null) {
        var favoritas = []
      } else {
        var objLit = JSON.parse(jsonFavoritas)
        var favoritas = objLit.caracteristica;
      }
fetch("https://api.themoviedb.org/3/movie/"+id_de_pelicula+"?api_key="+key+"&language=en-US")
      .then(function(data) {
        return data.json()
      })
      .then(function(dataPeli) {
    //  var pelicula = information
      //console.log(information);
        if (favoritas.indexOf(idPelicula) >= 0) {
          document.querySelector(".estrellita").style.display="block"
        }
      document.querySelector(".estrellita").onclick = function() {
        if (favoritas.indexOf(idPelicula) >= 0){
          var pos = favoritas.indexOf(idPelicula)
          favoritas.splice(pos,1)
        } else {
          favoritas.push(idPelicula)
          document.querySelector(".estrellita").style.color= "black"
        }
          var objLit = {
            caracteristica: favoritas
          }
          var json = JSON.stringify(objLit)
          localStorage.setItem("peliculasFavoritas", json)
      }
    })
      .catch(function(error){
      console.log("There was na error: " + error);
        })
})
}
//})
