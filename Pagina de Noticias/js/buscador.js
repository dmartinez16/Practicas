
document.getElementById("buscador").addEventListener("click",mostrar_buscador);
document.getElementById("ctn-bus").addEventListener("click",mostrar_contenedor);
document.getElementById("cover-ctn-search").addEventListener("click",ocultar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click",ocultar_contenedor);

contenedor_barra = document.getElementById("ctn-bus");
cover_ctn_search = document.getElementById("cover-ctn-search");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");

function mostrar_buscador(){
    contenedor_barra.style.top = "70px";
    cover_ctn_search.style.display="block";
    inputSearch.focus();
}
function ocultar_buscador(){
    contenedor_barra.style.top = "-100px";
    cover_ctn_search.style.display= "none";
    inputSearch.value="";
}
function mostrar_contenedor(){
    box_search.style.top = "99px";
}
function ocultar_contenedor(){
    box_search.style.top = "-500px";
    cover_ctn_search.style.display= "none";
}

//Filtrado de busqueda
function buscador_inteerno(){
    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //recorriendo elementos a filtrar mediante los li
    for (i = 0; 1 < li.length; i++){
        a = 
    }
}
