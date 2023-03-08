function abrirMenu() {
    let BarraMenuAberto = document.getElementById("barraMenu");
    
    if (BarraMenuAberto.style.width == "0px"){
        BarraMenuAberto.style.width = "300px";
    } else{
        BarraMenuAberto.style.width = "0px";
    }
} 

const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', function() {
  const searchText = document.querySelector('input[type="text"]').value.toLowerCase();
  const pageContent = document.body.innerHTML.toLowerCase();

  if (pageContent.indexOf(searchText) !== -1) {
    alert(`O texto "${searchText}" foi encontrado na página!`);
  } else {
    alert(`O texto "${searchText}" não foi encontrado na página.`);
  }
});