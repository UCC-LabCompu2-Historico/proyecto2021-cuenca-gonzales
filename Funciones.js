/**
 * Dibujar en Canvas la factura
 * @method DibujarFact
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

    const value = document.getElementById('input_Tratamiento').value;
    let option = document.getElementById('input_Tratamiento').querySelector(`option[value="${value}"]`);
    option.disabled = true;
    document.getElementById('input_Tratamiento').value = "";

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
    }

    ctx.fillText(total, 555, 403);
    document.getElementById('input_Tratamiento').option.setAttribute("disabled", "disabled");


}


/**
 * Cargar fondo del Canvas
 * @method cargarCanvas
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
    let canvas2 = document.getElementById('canvasanima');
    let ctx2 = canvas2.getContext("2d");

    ctx2.fillStyle = "#ffffff";
    ctx2.fillRect(0, 0, 666, 50);
    fondo2.onload = function () {
        ctx2.drawImage(fondo2, 0, 0)
    };

}


/**
 * Cambiar de pagina
 * @method cambiarPagina
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
        case "Electro":
            window.open("Electro.HTML", "_self");
            break;
        case "Spa":
            window.open("Spa.HTML", "_self");
            break;
    }
}

/**
 * Mostrar en pantalla el precio segun la opcion elegida
 * @method calcularPrecio
 * @return Precio
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

/**
 * Verificador de datos completados
 * @method pedirTurno
 * @return void
 */
function pedirTurno() {
    let nom = document.getElementById('input_nombre').value;
    let ape = document.getElementById('input_apellido').value;
    let email = document.getElementById('input_email').value;
    let cel = document.getElementById('input_cell'.value);
    if (nom === "" || ape === "" || email === "" || cel === "") {
        alert("Por favor completar todo el formulario antes de pedir el turno");
    } else {
        animar();
        document.getElementById('input_nombre').value = "";
        document.getElementById('input_apellido').value = "";
        document.getElementById('input_email').value = "";
        document.getElementById('input_cell').value = "";
    }
}

/**
 * Comprueba que el nombre, apellido y mail sean validos
 * @method check
 * @return Precio
 * @param e
 */
function check(e) {
    const patronL = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const patronD = patronL + "+-_.0123456789@";

    let auxN = 0;
    let auxA = 0;
    let auxAr = 0;
    let auxD = 0;
    let auxP = 0;
    switch (e) {
        case "input_nombre":
            let nombre = document.getElementById('input_nombre').value;
            let sizen = document.getElementById('input_nombre').value.length;
            for (let i = 0; i < sizen; i++) {
                for (let j = 0; j < patronL.length; j++) {
                    if (nombre[i] === patronL[j]) {
                        auxN++;
                    }
                }
            }
            if (auxN !== nombre.length) {
                alert("Ingrese un nombre valido");
                document.getElementById('input_nombre').value = "";
            }
            break;
        case "input_apellido":
            let size = document.getElementById('input_apellido').value.length;
            let ape = document.getElementById('input_apellido').value;
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < patronL.length; j++) {
                    if (ape[i] === patronL[j]) {
                        auxA++;
                    }
                }
            }
            if (auxA !== ape.length) {
                alert("Ingrese un apellido valido");
                document.getElementById('input_apellido').value = "";
            }
            break;
        case "input_email":
            let email = document.getElementById('input_email').value;
            let sizee = document.getElementById('input_email').value.length;
            for (let i = 0; i < sizee; i++) {
                for (let j = 0; j < patronD.length; j++) {
                    if (email[i] === patronD[j]) {
                        auxD++;
                    }
                }
                if (email[i] === "@") {
                    auxAr++;
                }
                if (email[i] === ".") {
                    auxP++;
                }

            }
            if (auxD !== email.length || auxAr !== 1 || auxP < 1) {
                alert("Ingrese un email valido");
                document.getElementById('input_email').value = "";
            }
            break;

    }
}

/**
 * Setea el intervalo de tiempo llamando a la funcion canvascargando
 * @method animar
 * @return void
 * @param onload
 */
var posicionX = 5;

function animar() {
    setInterval("canvascargando(),100")
}

/**
 * Dibuja una linea que simula la carga de datos
 * @method canvascargando
 * @return void
 */
function canvascargando() {
    let contexto = document.getElementById('canvasanima').getContext("2d");
    contexto.fillStyle = "#ca7702";
    contexto.fillRect(posicionX, 5, 40, 40);
    if (posicionX > 655) {
        contexto.fillStyle = "#ffffff";
        contexto.fillRect(0, 0, 666, 50);
        contexto.font = "24pt Sin Serif";
        contexto.fillStyle = 'black';
        var string = "Se ha pedido el turno!"
        contexto.fillText(string, 200, 35)
    }
    if (posicionX > 755) {
        window.location.reload();
        alert("Se ha solicitado el turno");


    }
    posicionX = 10 + posicionX;


}