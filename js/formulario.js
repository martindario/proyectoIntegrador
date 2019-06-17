// function valida(){
// var usuario = document.getElementById('email').value;
// var pass = document.getElementById("contraseña").value;
// var apellido = document.getElementById("apellido").value;
// var nombre = document.getElementById("nombre").value;
//
// if((usuario.value == "")||(pass.value == "")||(apellido.value == "")||(nombre.value == "")){
// window.alert("Los campos no pueden estar vacios");
// }else{
// envia('login');
// }
// }

var getData = function(){
  var usuario = document.getElementById('email').value;
  var pass = document.getElementById("contraseña").value;
  var apellido = document.getElementById("apellido").value;
  var nombre = document.getElementById("nombre").value;
console.log(usuario+""+pass+""+apellido+""+nombre+"");
}
