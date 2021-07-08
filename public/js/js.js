window.onload = function() 
{
    const xhttp = new XMLHttpRequest(); 
    
    document.getElementById("parejas").onclick = seleccionParejas
    document.getElementById("piedraPapel").onclick = seleccionPiedra
    document.getElementById("3enRaya").onclick = seleccionRaya

    function seleccionParejas() {
        xhttp.open("GET", "parejas.html",true)
        xhttp.send()
    }
    
    function seleccionPiedra() {
        xhttp.open("GET", "parejas.html",true)
        xhttp.send()
    }
    
    function seleccionRaya() {
        xhttp.open("GET", "parejas.html",true)
        xhttp.send()
    }
}
