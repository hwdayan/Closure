var canvas, stage, exportRoot;
var images = new Array();
window.onload = function () {
    setTimeout(function () {
        window.scrollTo(0, 1);
    }, 100);
}//隱藏網址列
function init() {
    loadALLimages();
    canvas = document.getElementById("canvas");
    exportRoot = new lib.testHTML();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();
    var title = new createjs.Text("Closure", "34px verdana", "#0c8");
    var title_ = new createjs.Text("Closure", "34px verdana", "#0cF");
    title_.setTransform(3, 3);
    title.alpha = 0.24; title_.alpha = 0.18;
    stage.addChild(title); stage.addChild(title_);
    createjs.Touch.enable(stage);
    createjs.Ticker.setFPS(25);
    createjs.Ticker.addListener(stage);
    var cross = new createjs.Shape();
    $(document).ready(function () {
        setsize();
        var W = canvas.width;
        var H = canvas.height;
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 2; j++) {
                drawCross(cross, i * W / 2 + W / 4, j * H / 2 + H / 4, 60);
            }
        }
        stage.addChild(cross);
    });
    $(window).resize(function () {
        setsize();
    });
}

function drawCross(shape, x, y, size) {
    shape.graphics.s("#222222").mt(x - size / 2, y).lt(x + size / 2, y).mt(x, y - size / 2).lt(x, y + size / 2);
}
function setsize() {

    if (document.body && document.body.offsetWidth) {
        canvas.width = document.body.offsetWidth;
        canvas.height = document.body.offsetHeight;
    }
    if (document.compatMode == 'CSS1Compat' &&
        document.documentElement &&
        document.documentElement.offsetWidth) {
        canvas.width = document.documentElement.clientWidth
        canvas.height = document.documentElement.clientHeight;
    }
    if ($(window).innerWidth() != 0) {
        canvas.width = $(window).innerWidth();
        canvas.height = $(window).innerHeight();
    }
}
function loadALLimages()
{
    for(var i=0;i<15;i++)
    {
        var img = document.createElement("img");
        img.src = "/images/img" + i + ".jpg";
        img.id = "Img" + i;
        images[i] = img;
    }
}
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player1,player2;
    function onYouTubeIframeAPIReady() {
        player1 = new YT.Player('player1', {
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
        player2 = new YT.Player('player2', {
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange2
            }
        });
        
    }
    function onPlayerReady(event) {

        event.target.cuePlaylist({ list: 'pdgls', listType: 'user_uploads' });
        var index = radio[Math.round(Math.random() * radio.length - 1)];
        event.target.playVideoAt(index - 1);

    }
    var p1sameCH = false;
    var p2sameCH = false;

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING &&!p1sameCH ) {
             p1sameCH = true;
             setTimeout(function () { event.target.pauseVideo()}
                       , Math.round(Math.random() * 3000 + 5500));
        }
       
   }
    function onPlayerStateChange2(event) {
        if (event.data == YT.PlayerState.PLAYING &&!p2sameCH) {
            p2sameCH = true;
            setTimeout(function () { event.target.pauseVideo()}
                       , Math.round(Math.random() * 3000 + 5500));
         }

    }
    