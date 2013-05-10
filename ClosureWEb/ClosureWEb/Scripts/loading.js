var xlines = Math.round(3 + Math.random() * 5);
var ylines = 7;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var gg = document.getElementById("noise");
var W = canvas.width;
var H = canvas.height;
var naturalWidth = gg.width == 0 ? gg.naturalWidth : gg.width;
var naturalHeight = gg.height == 0 ? gg.naturalHeight : gg.height;
function drawNoise(){
    for (var i = 0; i < xlines ; i++) {
        for (var j = 0; j < ylines; j++) {
            var sx, sy, sw, sh, x, y, w, h;
            sx = Math.random() * naturalWidth;
            sy = Math.random() * naturalHeight;
            sw = naturalWidth / xlines * Math.random();
            sh = naturalHeight / ylines * Math.random();
            x = i * W / xlines;
            y = j * H / ylines;
            w = W / xlines * Math.random();
            h = H / ylines * Math.random();
            ctx.drawImage(gg, sx, sy, sw, sh, x, y, w, h);
        }
    }
}
function soundPlay() {
    soundplay(["static", "apollo"], 1, Math.random());
}

var load1 = setInterval(function () { drawNoise() }, 275);
var load2 = setInterval(function () { soundPlay() }, 2200);

function stoploading()
{
    clearInterval(load1);
    clearInterval(load2);
}