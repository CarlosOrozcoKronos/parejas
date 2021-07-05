window.onload = function() 
{
    const cartasTotales= 4;
    var carta1= undefined;
    var carta2= undefined;
    var parejasTotales= cartasTotales / 2;

    //gira las cartas y comprueba si son pareja
    function girar() 
    {
        let element = document.getElementById(event.target.id);

        if (carta1 == undefined)
        {
            carta1 = element
        }
        else if (carta2 == undefined)
        {
            carta2 = element
        }
        element.classList.remove("oculto");

        //si son pareja...
        if (!(carta1 == undefined) && !(carta2 == undefined) && !(carta1===carta2)){
            // if ((carta1.classList.contains("rojo") && carta2.classList.contains("rojo"))
            // ||
            // (carta1.classList.contains("verde") && carta2.classList.contains("verde"))){
            if (carta1.classList.toLocaleString() == carta2.classList.toLocaleString())
            {
                parejasTotales--;
                if (parejasTotales <=0){
                    alert("Has ganado");
                    reiniciar();
                }
            }
            else{
                alert("holas")
                ocultarCarta(carta1);
                ocultarCarta(carta2);
            }

            carta1 = undefined;
            carta2 = undefined;
            
        }
    }

    function ocultarCarta(carta) 
    {
        carta.classList.add("oculto");
    }

    function reiniciar() 
    {

        parejasTotales= cartasTotales / 2;
        let lista = Array.from({length: cartasTotales}, (x,i) => i++ ); //[1, 2, 3, 4];
        aleatorios = Array.from({length: cartasTotales/2}, aleatorio => {
            aleatorioTemp = Math.floor(Math.random() * lista.length)
            return lista.splice(aleatorioTemp ,1)[0]
        })

        let cartas = Array.from(document.getElementsByClassName('cuadro')).forEach((cuadro, i) => 
        {
            if (aleatorios.includes(i))
            {
                cuadro.classList.add("rojo")
                cuadro.classList.remove("verde")
            }
            else
            {
                cuadro.classList.add("verde")
                cuadro.classList.remove("rojo")
            }
            cuadro.classList.add("oculto")
            cuadro.onclick = function(){
                girar()
            }
        })
    }
    reiniciar()
    document.getElementById("rest_button").onclick = reiniciar
}
