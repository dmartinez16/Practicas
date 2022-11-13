document.getElementById("buscador").addEventListener("click",mostrar_buscador);
document.getElementById("ctn-bus").addEventListener("keyup",mostrar_contenedor);
document.getElementById("cover-ctn-search").addEventListener("click",ocultar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click",ocultar_contenedor);

contenedor_barra = document.getElementById("ctn-bus");
cover_ctn_search = document.getElementById("cover-ctn-search");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");

window.onload = () => {
    let links = document.querySelectorAll('.menu')
    
    let primero = links[0]
    primero.addEventListener('click', () => {
      scrollSuave('#buscador', 400, 20)
    })
  }
  
  
  const scrollSuave = (objetivo, duracion, compensacion) => {
    let elemObj = document.querySelector(objetivo)
    let elemPos = elemObj.getBoundingClientRect().top - compensacion
    let posInicial = window.pageYOffset
    let tiempoInicial = null
  
    const animacion = tiempoAhora => {
      if (tiempoInicial === null) tiempoInicial = tiempoAhora
      tiempoPasado = tiempoAhora - tiempoInicial
      let auxAnimacion = easeInOutQuad(tiempoPasado, posInicial, elemPos, duracion)
      window.scrollTo(0, auxAnimacion)
      if (tiempoPasado < duracion) requestAnimationFrame(animacion)
    }
    requestAnimationFrame(animacion)
  }
  
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return - c / 2 * (t * (t - 2) - 1) + b
  }
function mostrar_buscador(){
    contenedor_barra.style.top = "70px";
    cover_ctn_search.style.display="block";
    inputSearch.focus();

    if (inputSearch.value === ""){
      box_search.style.display = "none";
    }
}
function ocultar_buscador(){
    contenedor_barra.style.top = "-100px";
    cover_ctn_search.style.display= "none";
    inputSearch.value="";
    box_search.style.display= "none";
}
function mostrar_contenedor(){
    box_search.style.top = "114px";

}
function ocultar_contenedor(){
    box_search.style.top = "-500px";
    cover_ctn_search.style.display= "none";
}

//Filtrado de busqueda
document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);
function buscador_interno(){

    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //recorriendo elementos a filtrar mediante los li
   for (i = 0; i < li.length; i++){
       
      a = li[i].getElementsByTagName("a")[0];
      textValue = a.textContent || a.innerText;

      if(textValue.toUpperCase().indexOf(filter) > -1){

        li[i].style.display = "";
        box_search.style.display = "block";

        if (inputSearch.value === ""){
          box_search.style.display = "none";
        }

      }else{
        li[i].style.display = "none";
      }
   }
}