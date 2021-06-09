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