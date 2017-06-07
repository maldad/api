var boton = document.getElementById("subEstudio");
var inputEstudio = document.getElementById("nombreEstudio");
var inputIdEstudio = document.getElementById("idEstudio");
var url = "http://localhost:3000/estudios";
var objeto = "";

boton.addEventListener("click", function(event){
  var nombreEstudio = inputEstudio.value;
  var idEstudio = inputIdEstudio.value;
  objeto = "{\"nombre\" : \"" + nombreEstudio + "\", \"id\" : " + idEstudio + "}";
  console.log(objeto);
  XHR.post(url, objeto);
});
