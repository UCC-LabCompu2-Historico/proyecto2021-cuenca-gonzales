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