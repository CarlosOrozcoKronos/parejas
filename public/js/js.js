window.onload = function() 
{
    const cartasTotales= 4;
    var carta1= undefined;
    var carta2= undefined;
    var parejasTotales= cartasTotales / 2;

    var modal = document.getElementById("modal")
    var puntuacionHtml = document.getElementById("mensaje_puntuacion")

    if (typeof(Storage) !== "undefined")
    {
        if (localStorage.WonGames==undefined)
        {
            localStorage.setItem("WonGames", 0)
            // locaStorage.WonGames = 0
        }
    }
    else
    {
        alert("version del navegador no compatible con la aplicacion")
    }
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
        // sleep(1000).then(() => 
        // {

    
            //si son pareja...
            if (!(carta1 == undefined) && !(carta2 == undefined) && !(carta1===carta2)){
                // if ((carta1.classList.contains("rojo") && carta2.classList.contains("rojo"))
                // ||
                // (carta1.classList.contains("verde") && carta2.classList.contains("verde"))){
                if (carta1.classList.toLocaleString() == carta2.classList.toLocaleString())
                {
                    parejasTotales--;
                    if (parejasTotales <=0){
                        
                        localStorage.WonGames++;
                        var msg = "Has ganado " +localStorage.WonGames+ " partida"
                        if (localStorage.WonGames > 1) msg = msg + "s";
                        
                        puntuacionHtml.innerText = msg
                        modal.style.display = "block"

                        sleep(1000).then(() => 
                        {               
                            reiniciar();
                        })
                    }
                }
                else{
                    ocultarCarta(carta1);
                    ocultarCarta(carta2);
                }

                carta1 = undefined;
                carta2 = undefined;
                
            }

        // });
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

    function reiniciarPuntos()
    {
        localStorage.WonGames = 0
    }

    //copia pega-->

    // sleep time expects milliseconds
    function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

  //<-- fin copia pega

    reiniciar()
    document.getElementById("rest_button").onclick = reiniciar
    document.getElementById("rest_points").onclick = reiniciarPuntos
    modal.onclick = function () {
        modal.style.display = "none"
    }
}
