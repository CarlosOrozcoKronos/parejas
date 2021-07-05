const CARTASTOTALES = 4;

function girar() {
  let element = document.getElementById(event.target.id);
  //resetMe(element)
  element.classList.remove("oculto");
  element.classList.add("girada");
}

function resetMe(carta) {
  carta.classList.add("oculto");
  carta.classList.remove("girada");
}

function reiniciar() {

  let lista = Array.from({length: CARTASTOTALES}, (x,i) => 1+i); //[1, 2, 3, 4];
  let rojo;

  let aleatorio;

  for (let index = 0; index < CARTASTOTALES/2 ; index++) {
    aleatorio  = Math.floor(Math.random() * lista.length)
    rojo = lista.splice(aleatorio, 1) 
    let element = document.getElementById("carta"+rojo);
    element.classList.remove("verde");//.add("rojo")
    element.classList.add("rojo");
    resetMe(element)
  }

  lista.forEach(element => {
    let elemento = document.getElementById("carta"+element);
    elemento.classList.remove("rojo");
    elemento.classList.add("verde");
    resetMe(elemento)
  });

}