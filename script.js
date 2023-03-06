function abrirMenu() {
    let BarraMenuAberto = document.getElementById("barraMenu");
    
    if (BarraMenuAberto.style.width == "0px"){
        BarraMenuAberto.style.width = "300px";
    } else{
        BarraMenuAberto.style.width = "0px";
    }
}

document.getElementById("search-button").addEventListener("click", function() {
    var searchTerm = document.querySelector(".search-container input[type=text]").value;
    alert("Você buscou por: " + searchTerm);
  });
  
