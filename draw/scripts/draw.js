// Setup Leap loop with frame callback function
var controllerOptions = { enableGestures: true },
    width = 960,
    height = 500,
    canvas = d3.select('div#container')
        .append('canvas')
        .attr('width', width)
        .attr('height', height).node(),
    ctx = canvas.getContext('2d'),
    before = {},
    after = {},
    color = d3.scale.category20();

ctx.lineWidth = 5;
ctx.translate(width/2, height/2);

function draw() {
    var a, b;
    for (var id in after) {
        b = before[id],
        a = after[id];
        if (!b) {
            console.log('empty b');
            continue;
        } else {
            console.log('non empty b', b);
        }

        ctx.strokeStyle = color(id);
        ctx.moveTo(b.tipPosition[0], -b.tipPosition[1]);
        ctx.lineTo(a.tipPosition[0], -a.tipPosition[1]);
        ctx.stroke();
        ctx.beginPath();
    }

    before = after;
}

Leap.loop(controllerOptions, function(frame) {
    after = {};
    for (var i = 0; i < frame.pointables.length; i++) {
        after[frame.pointables[i].id] = frame.pointables[i];
    }
    draw();
});
