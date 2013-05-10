﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="Closure._default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <%--   <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no,minimum-scale=1.0,maximum-scale=1.0" />--%>
    <link href="closure.css" rel="stylesheet" />
    <title>Closure</title>
    <script src="Scripts/loading.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <%--    <script src="Scripts/jquery-1.6.4.js"></script>--%>
    <script src="Scripts/jquery.signalR-1.0.1.js"></script>
    <script src="/signalr/hubs"></script>

    <script src="http://code.createjs.com/easeljs-0.6.0.min.js"></script>
    <script src="http://code.createjs.com/tweenjs-0.4.0.min.js"></script>
    <script src="http://code.createjs.com/movieclip-0.5.0.min.js"></script>
    <script src="http://code.createjs.com/soundjs-0.4.0.min.js"></script>
    <script src="Scripts/testHTML.js"></script>
    <script src="Scripts/closure.js"></script>
    <script src="Scripts/closure-sound.js"></script>
    <script>
        var canvas, stage, exportRoot;
        function init() {
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

            $(document).ready(function () {
                setsize();
            });
            $(window).resize(function () {
                setsize()
            });
            var cross = new createjs.Shape();
            var W = canvas.width;
            var H = canvas.height;
            for (var i = 0; i < 2; i++) {
                for (var j = 0; j < 2; j++) {
                    drawCross(cross, i * W / 2 + W / 4, j * H / 2 + H / 4, 60);
                }
            }
            stage.addChild(cross);
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
            stoploading();

        }
    </script>
    <link href="closure.css" rel="stylesheet" />
</head>
<body onload="init();" style="margin: 0">
  
    <canvas id="canvas" width="3000" height="2000"> </canvas>

    <form id="form1" runat="server">
        SID:
	        <input id="sid" type="text" runat="server" />
        CID:
	        <input id="cid" type="text" runat="server" />
        <input id="count" type="text" />

    </form>
     <img id="noise" src="images/noise.jpg" />
    <img id="Img0" src="images/img0.jpg" />
    <img id="Img1" src="images/img1.jpg" />
    <img id="Img2" src="images/img2.jpg" />
    <img id="Img3" src="images/img3.jpg" />
    <img id="Img4" src="images/img4.jpg" />
    <img id="Img5" src="images/img5.jpg" />
    <img id="Img6" src="images/img6.jpg" />
    <img id="Img7" src="images/img7.jpg" />
    <img id="Img8" src="images/img8.jpg" />
    <img id="Img9" src="images/img9.jpg" />
    <img id="Img10" src="images/img10.jpg" />
    <img id="Img11" src="images/img11.jpg" />
    <img id="Img12" src="images/img12.jpg" />
    <img id="Img13" src="images/img13.jpg" />
    <img id="Img14" src="images/img14.jpg" />
    <div id="tts" class="tts"></div>
</body>
</html>
