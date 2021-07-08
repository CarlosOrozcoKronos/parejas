window.onload = function() 
{
    const cartasTotales= 4;
    let cartaVar1= undefined;
    let cartaVar2= undefined;
    let parejasTotales= cartasTotales / 2;
    let timer = 1000;

    let modal = document.getElementById("modal")
    let puntuacionHtml = document.getElementById("mensaje_puntuacion")

    let mis_cartas = Array.from(document.getElementsByClassName('cuadro'))

    if (typeof(Storage) !== "undefined")
    {
        if (localStorage.WonGames==undefined)
        {
            localStorage.setItem("WonGames", 0)
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

        let switch_click_off = mis_cartas.forEach((cuadro, i) => 
        {
            cuadro.onclick = function()
            {
                return false
            }
        })

        if (cartaVar1 == undefined)
        {
            cartaVar1 = element
            element.classList.remove("oculto");
        }
        else if (cartaVar2 == undefined && !(cartaVar1 === element))
        {
            cartaVar2 = element
            element.classList.remove("oculto");
        }
        
        
        setTimeout(() => {
            
        
    
            //si son pareja...
            if (!(cartaVar1 == undefined) && !(cartaVar2 == undefined) && !(cartaVar1===cartaVar2)){
                if (!(cartaVar1.classList.contains("done") || (cartaVar2.classList.contains("done"))))
                {
                    if (cartaVar1.classList.toLocaleString() == cartaVar2.classList.toLocaleString())
                    {
                        cartaVar1.classList.add("done")
                        cartaVar2.classList.add("done")
                        parejasTotales--;
                        if (parejasTotales <=0){
                            
                            localStorage.WonGames++;
                            var msg = "Has ganado " +localStorage.WonGames+ " partida"
                            if (localStorage.WonGames > 1) msg = msg + "s";
                            
                            puntuacionHtml.innerText = msg
                            modal.style.display = "flex"

                            console.log(msg)

                            sleep(1000).then(() => 
                            {               
                                reiniciar();
                            })
                            sleep(timer).then(() => 
                            {               
                                // modal.style.display = "none"
                            })
                        }
                    }
                    else{
                        ocultarCarta(cartaVar1);
                        ocultarCarta(cartaVar2);
                    }
                }

                cartaVar1 = undefined;
                cartaVar2 = undefined;
            }

        }, timer);

        let switch_click_on = mis_cartas.forEach((cuadro, i) => 
        {
            if (!cuadro.classList.contains("done"))
            cuadro.onclick = function()
            {
                girar()
            }
        })
    }

    function ocultarCarta(carta) 
    {
        carta.classList.add("oculto");
    }

    function reiniciar() 
    {

        parejasTotales= cartasTotales / 2;
        cartaVar1 = undefined
        cartaVar2 = undefined
        let lista = Array.from({length: cartasTotales}, (x,i) => i++ ); //[0, 1, 2, 3];
        aleatorios = Array.from({length: cartasTotales/2}, aleatorio => {
            aleatorioTemp = Math.floor(Math.random() * lista.length)
            return lista.splice(aleatorioTemp ,1)[0]
        })

        let cartas = mis_cartas.forEach((cuadro, i) => 
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
            cuadro.classList.remove("done")
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
