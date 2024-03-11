document.getElementById("title").addEventListener("click", function () {
  document.getElementById("title").style.backgroundColor = "#f6f6f6";
  document.getElementById("description").style.backgroundColor = "#fff";
  document.getElementById("boton").style.backgroundColor = "#0366b6";
});

document.getElementById("description").addEventListener("click", function () {
  document.getElementById("description").style.backgroundColor = "#f6f6f6";
  document.getElementById("title").style.backgroundColor = "#fff";
  document.getElementById("boton").style.backgroundColor = "#0366b6";
});

document.getElementById("fecha").addEventListener("click", function () {
  document.getElementById("fecha").style.color = "#000";
  document.getElementById("title").style.backgroundColor = "#fff";
  document.getElementById("description").style.backgroundColor = "#fff";
});

function tiempos() {
  document.getElementById("fecha").style.color = "#fff";
    
}
setInterval(tiempos, 6000);

document.getElementById("boton").addEventListener("click", function () {
  document.getElementById("boton").style.backgroundColor = "#003349";
  document.getElementById("description").style.backgroundColor = "#fff";
});


 