//PEGANDO O BOTAO 
let btn = document.querySelector(".btn-topo");

//ATRELANDO A FUNCAO SUBIR NO WINDOW
window.onscroll = function(){
    btnSubir();
}

//CRIANDO A FUNCAO DO BOTAO SCROLL
function btnSubir(){
    if(document.querySelector("body").scrollTop > 220 || document.documentElement.scrollTop > 220){
        btn.style.display = "flex";
    }
    else{
        btn.style.display = "none";
    }
}

//EVENTO PRELOADER
const loader = document.querySelector(".preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
});

//MENU HAMBURGUER
document.querySelector(".menu-hamburguer").addEventListener("click", function(){
    this.classList.toggle("click");
    document.querySelector("nav").classList.toggle("mostrar-menu");
});