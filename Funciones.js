let total=0;
function DibujarFact()
{
    let i = document.getElementsByName("peTurno")[0].value;
    let cont = document.getElementsByName("peTurno")[0].value = Number(i)+1;
    let canvas = document.getElementById('canvasdibujar');
    let ser = canvas.getContext("2d");
    let ctx = canvas.getContext("2d");

    let x = document.getElementById('input_Tratamiento').value;
    let precio = calcularPrecio(x);
    let hora = document.getElementById('input_horario').value;
    total+=precio;

    ser.fillStyle = "#ffffff";
    ser.fillRect(555,390,100,18);

    ctx.font="13pt Sin Serif";
    ctx.fillStyle = "black";


    switch (cont) {
        case 1:

            ctx.fillText(x,12,100);
            ctx.fillText(precio,555,100);
            ctx.fillText(hora,342,100);

            break;
        case 2:
            ctx.fillText(x,12,120);
            ctx.fillText(precio,555,120);
            ctx.fillText(hora,342,120);
            break;
        case 3:
            ctx.fillText(x,12,140);
            ctx.fillText(precio,555,140);
            ctx.fillText(hora,342,140);
            break;
        default:
            alert("No hay mas Tratamientos");

    }

    ctx.fillText(total,555,403);


    if ((precio===undefined)||(hora==="")){
        canvas.width= canvas.width;
        cargarCan();
        alert("Faltan datos!");
        cont = document.getElementsByName("peTurno")[0].value = cont-1;
    }

    //const yMax = canvas.height;
    //const xMax = canvas.width;




    //ctx.fillRect(0, 0, xMax, yMax);
    //*ctx.clearRect(0, 0, yMay, xMax);
    //ctx.strokeRect(0, 0, xMax, yMax);


    /*switch (cantPedir){
        case 1:

            break;
        case 2:
            ser.fillText(x,12,115);
            ser.fillText(precio,555,115);
            ser.fillText(hora,342,115);
            break;
        case 3:
            ser.fillText(x,12,115);
            ser.fillText(precio,555,115);
            ser.fillText(hora,342,115);
            break;
        case 4:
            ser.fillText(x,12,115);
            ser.fillText(precio,555,115);
            ser.fillText(hora,342,115);
            break;
        case 5:
            ser.fillText(x,12,115);
            ser.fillText(precio,555,115);
            ser.fillText(hora,342,115);
            break;

    }*/


    //ctx.strokeRect(xMax/3, 15, 277, 50);

    //ctx.font="25pt Verdana";
    //ctx.strokeStyle="green";
    //ctx.lineWidth = 2;
    //ctx.strokeText("strokeText",10,120);

}
function cargarCan(){
    let canvas = document.getElementById('canvasdibujar');
    let ctx = canvas.getContext("2d");
    let fondo = new Image();
    fondo.src = "Imagenes/factura.png";
    ctx.drawImage(fondo,0,0);
    fondo.onload= function (){ctx.drawImage(fondo,0,0)};
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
            window.open("Index.HTML","_self");
            break;
        case "Evo":
            window.open("Evo.HTML","_self");
            break;
        case "Tratamiento":
            window.open("Tratamiento.HTML","_self");
            break;
        case "RecupCapilar":
            window.open("RecupCap.HTML","_self");
            break;
        case "Tecnol":
            window.open("Tecnol.HTML","_self");
            break;
        case "Turnos":
            window.open("Calendario.HTML","_self");
            break;
        case "Instagram":
            window.open("https://www.instagram.com/mateocuenca09/?hl=es-la");
            break;
    }


}
/**
 * Mostrar en pantalla el precio segun la opcion elegida
 * @method calcularPrecio
 * @return Valor que retorna
 * @param host
 */
function calcularPrecio(host){
    switch (host){
        case "Tratamiento_Simple":
            return 300;
        case "Tratamiento_Medio":
            return 420;
        case "Tratamiento_Grande":
            return 450;
        case "Recup_Capilar":
            return 500;
        case "Tecnol_1":
            return 800;
        case "Tecnol_2":
            return 1200;

    }

}