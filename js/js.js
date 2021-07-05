const CARTASTOTALES = 4;
var carta1, carta2;

function girar() {
  let element = document.getElementById(event.target.id);
  if (carta1 == undefined){
    carta1 = element
  }
  else if (carta2 == undefined){
    carta2 = element
  }
  //resetMe(element)
  element.classList.remove("oculto");
  element.classList.add("girada");

  if (!(carta1 == undefined) && !(carta2 == undefined)){
    //si son pareja...
    if ((carta1.classList.contains("rojo") && carta2.classList.contains("rojo"))
    ||
    (carta1.classList.contains("verde") && carta2.classList.contains("verde"))){
      console.log("una pareja");
    }
    else{
      resetMe(carta1);
      resetMe(carta2);
    }

    carta1 = undefined;
    carta2 = undefined;
    
  }
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