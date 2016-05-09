// Setup Leap loop with frame callback function
var controllerOptions = { /*port: 3000,*/ enableGestures: true };

var width = 960,
    height = 500;

var canvas = d3.select('div#canvas')
            .append('canvas')
            .attr('width', width)
            .attr('height', height).node(),
    ctx = canvas.getContext('2d');

var svg = d3.select('div#container')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + [width/2, height/2] + ')')
    .append('circle')
    .attr('r', 10)
    .attr('fill', '#abcdef');;

var finger, prevPosition,
    color = d3.scale.category20c();

function drawIndexFinger() {
    svg.attr('transform', 'translate(' + [-finger.tipPosition[0], finger.tipPosition[1]] + ')');

    if (prevPosition) {
        ctx.strokeStyle = color('#123456');
        ctx.moveTo(prevPosition.tipPosition[0], +prevPosition.tipPosition[1]);
        ctx.lineTo(finger.tipPosition[0], +finger.tipPosition[1]);
        ctx.stroke();
        ctx.beginPath();
    }
    prevPosition = finger;
}

Leap.loop(controllerOptions, function(frame) {
    finger = frame.pointables[1]; //passing index finger only
    if(finger) drawIndexFinger();
});
