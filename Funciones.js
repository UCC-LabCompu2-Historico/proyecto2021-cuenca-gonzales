
function DibujarFact()
{
    var canvas = document.getElementsById("canvasdibujar");
    var ctx = canvas.getContext("2d");

    ctx.font="30pt Verdana";
    ctx.fillStyle = "blue";
    ctx.fillText("fillText",10,60);
    ctx.font="25pt Verdana";
    ctx.strokeStyle="green";
    ctx.lineWidth = 2;
    ctx.strokeText("strokeText",10,120);

}
/**
 * Cambiar de pagina
 * @method cambiarPagina
 * @param {string} id- el id de la pagina que quiere abrir
 * @return Valor que retorna
 */
 function cambiarPagina(id){
    switch (id){
        case "Home":
            window.open("Index.HTML");
            break;
        case "Evo":
            window.open("Evo.HTML");
            break;
        case "Tratamiento":
            window.open("Tratamiento.HTML");
            break;
        case "RecupCapilar":
            window.open("RecupCap.HTML");
            break;
        case "Tecnol":
            window.open("Tecnol.HTML");
            break;
        case "Turnos":
            window.open("Calendario.HTML");
            break;
        case "Instagram":
            window.open("https://www.instagram.com/mateocuenca09/?hl=es-la");
            break;
    }


}
/**
 * Mostrar en pantalla el precio segun la opcion elegida
 * @method calcularPrecio
 * @param {string} id- el id de la opcion elegida
 * @return Valor que retorna
 */
function calcularPrecio(host){
    /*<option>Tratamiento Simple</option>
        <option>Tratamiento Medio</option>
        <option>Tratamiento Grande</option>
        <option>Recup Capilar</option>
        <option>Tecnol 1</option>
        <option>Tecnol 2</option>*/ 
    switch (host){
        case "Tratamiento_Simple":
            document.getElementsByName('precio')[0].innerHTML= "$300";
            break;
        case "Tratamiento_Medio":
            document.getElementsByName('precio')[0].innerHTML= "$450";
            break;
        case "Tratamiento_Grande":
            document.getElementsByName('precio')[0].innerHTML= "$500";
            break;
        case "Recup_Capilar":
            document.getElementsByName('precio')[0].innerHTML= "$420";
            break;
        case "Tecnol_1":
            document.getElementsByName('precio')[0].innerHTML= "$600";
            break;
        case "Tecnol_2":
            document.getElementsByName('precio')[0].innerHTML= "$650";
            break;

    }

}