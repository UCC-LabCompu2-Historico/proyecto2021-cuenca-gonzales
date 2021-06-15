/**
 * Dibujar en Canvas la factura
 * @method DibujarFact
 * @param {string} id- el id de la pagina que quiere abrir
 * @return voidFunction
 */
let total = 0;

function DibujarFact() {
    let i = document.getElementsByName("geTurno")[0].value;
    let cont = document.getElementsByName("geTurno")[0].value = Number(i) + 1;
    let canvas = document.getElementById('canvasdibujar');
    let ser = canvas.getContext("2d");
    let ctx = canvas.getContext("2d");

    let x = document.getElementById('input_Tratamiento').value;
    let precio = calcularPrecio(x);
    let hora = document.getElementById('input_horario').value;
    let fecha = document.getElementById("input_dia").value;

    total += precio;
    ser.fillStyle = "#ffffff";
    ser.fillRect(555, 390, 100, 18);

    ser.fillStyle = "#ffffff";
    ser.fillRect(10, 413, 648, 45);

    ctx.font = "12pt Sin Serif";
    ctx.fillStyle = "black";

    let nombre = document.getElementById("input_nombre").value;
    let apellido = document.getElementById("input_apellido").value;
    let mail = document.getElementById("input_email").value;
    let cel = document.getElementById("input_cell").value;
    ctx.fillText(nombre, 12, 430);
    ctx.fillText(apellido, 12, 450);
    ctx.fillText(cel, 220, 430);
    ctx.fillText(mail, 220, 450);

    ctx.font = "13pt Sin Serif";
    ctx.fillStyle = "black";

    switch (cont) {
        case 1:

            ctx.fillText(x, 12, 100);
            ctx.fillText(precio, 555, 100);
            ctx.fillText(hora, 342, 100);
            ctx.fillText(fecha, 400, 100);

            break;
        case 2:
            ctx.fillText(x, 12, 120);
            ctx.fillText(precio, 555, 120);
            ctx.fillText(hora, 342, 120);
            ctx.fillText(fecha, 400, 120);
            break;
        case 3:
            ctx.fillText(x, 12, 140);
            ctx.fillText(precio, 555, 140);
            ctx.fillText(hora, 342, 140);
            ctx.fillText(fecha, 400, 140);
            break;
        default:
            alert("No hay mas Tratamientos");
            total = total - precio;

    }

    if ((precio === undefined) || (hora === "")) {
        canvas.width = canvas.width;
        cargarCan();
        alert("Faltan datos!");
        cont = document.getElementsByName("peTurno")[0].value = cont - 1;
        z
    }

    ctx.fillText(total, 555, 403);


}


/**
 * Cargar fondo del Canvas
 * @method cargarCanvas
 * @param {canvasdibujar} id-
 * @return VoidFunction
 */
function cargarCan() {
    let canvas = document.getElementById('canvasdibujar');
    let ctx = canvas.getContext("2d");
    let fondo = new Image();
    fondo.src = "Imagenes/factura.png";
    ctx.drawImage(fondo, 0, 0);
    fondo.onload = function () {
        ctx.drawImage(fondo, 0, 0)
    };
}


/**
 * Cambiar de pagina
 * @method cambiarPagina
 * @param {string} id- el id de la pagina que quiere abrir
 * @return Valor que retorna
 */
function cambiarPagina(id) {
    switch (id) {
        case "Home":
            window.open("Index.HTML", "_self");
            break;
        case "Evo":
            window.open("Evo.HTML", "_self");
            break;
        case "Tratamiento":
            window.open("Tratamiento.HTML", "_self");
            break;
        case "RecupCapilar":
            window.open("RecupCap.HTML", "_self");
            break;
        case "Tecnol":
            window.open("Tecnol.HTML", "_self");
            break;
        case "Turnos":
            window.open("Calendario.HTML", "_self");
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
function calcularPrecio(host) {
    switch (host) {
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
function pedirTurno() {
    let nom = document.getElementById('input_nombre').value;
    let ape = document.getElementById('input_apellido').value;
    let email = document.getElementById('input_email').value;
    let cel = document.getElementById('input_cell'.value);
    if (nom === "" || ape === "" || email === "" || cel === "") {
        alert("Porfavor Completar todo el formulario antes de pedir el turno");
    }

}