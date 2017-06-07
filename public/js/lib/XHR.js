var XHR = (function(){
  var _post = function(url, objeto){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4 && xhr.status === 200){
        console.log(objeto);
        console.log(http.responseText);
      }
    }
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(objeto);
  };

  return{
    "post" : _post
  };

})();
