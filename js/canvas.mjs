let canvasWidth = 600;
let canvasHeight = 600;

let startingPointX = canvasWidth / 2;
let startingPointY = canvasHeight - 500;

let rootCircle = {
    size: 20,
    beginX: canvasWidth / 2,
    beginY: canvasHeight - 500
}
let cvs = document.getElementById('canvas');

let ctx = cvs.getContext("2d");

export const createRootArc = (xAxis, yAxis) => {
    console.log('xAxis ', xAxis, 'yAxis', yAxis)
    ctx.beginPath();
    ctx.arc(xAxis, yAxis, rootCircle.size, 0, Math.PI * 2);
    ctx.fillStyle = 'black'
    ctx.fill();
}

export const createLeftLine = (xAxis, yAxis, xDrawToLeft, yDrawToLeft) => {
    console.log('xAxis ', xAxis, 'yAxis', yAxis, ' xDrawToLeft ', xDrawToLeft, 'yDrawToLeft ', yDrawToLeft)
    ctx.beginPath()
    ctx.moveTo(xAxis, yAxis)
    ctx.lineTo(xDrawToLeft, yDrawToLeft)
    ctx.stroke()
}

export const createRightLine = (xAxis, yAxis, xDrawToRight, yDrawToRight) => {
    console.log('xAxis ', xAxis, 'yAxis', yAxis, ' xDrawToRight ', xDrawToRight, 'yDrawToRight ', yDrawToRight)
    ctx.beginPath()
    ctx.moveTo(xAxis, yAxis)
    ctx.lineTo(xDrawToRight, yDrawToRight)
    ctx.stroke()
}

export const childNode = () => {
    ctx.beginPath();
    ctx.arc(200, 200, rootCircle.size, 0, Math.PI * 2);
    ctx.fillStyle = 'black'
    ctx.fill();

}
