﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="Closure._default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="apple-mobile-web-app-capable" content="yes"/>
 <%--   <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no,minimum-scale=1.0,maximum-scale=1.0" />--%>
 <link href="closure.css" rel="stylesheet" />
    <title>Closure</title>
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
            createjs.Touch.enable(stage);
            createjs.Ticker.setFPS(25);
            createjs.Ticker.addListener(stage);

            $(document).ready(function () {
               setsize();
            });
            $(window).resize(function () {
                setsize()
            });
            var title = new createjs.Text("Closure", "40px verdana", "#FFF");
            stage.addChild(title);
        }
        function setsize()
        {
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
                canvas.width = $(window).innerWidth();
                canvas.height = $(window).innerHeight();
        }
    </script>
    <link href="closure.css" rel="stylesheet" />
</head>
<body onload="init();" style="margin:0">

    <canvas id="canvas" runat="server"></canvas>
    <form id="form1" runat="server">
        SID:
	        <input id="sid" type="text" runat="server" />
        CID:
	        <input id="cid" type="text" runat="server" />
        <input id="count" type="text" />
    </form>
    <img id="noise1" src="images/noise1.jpg" />
    <img id="noise2" src="images/noise2.jpg" />
    <img id="noise3" src="images/noise3.jpg" />
    <img id="Img0" src="images/0-31.jpg" />
    <img id="Img1" src="images/holiday-drone1.jpg" />
    <img id="Img2" src="images/130319-hawthorne-army-depot-9a.jpg" />
    <img id="Img3" src="images/20090207tomcatsoceana.jpg" />
    <img id="Img4" src="images/20090619baercs.jpg" />
    <img id="Img5" src="images/base1.jpg" />
    <img id="Img6" src="images/google2.jpg" />
    <img id="Img7" src="images/google3.jpg" />
    <img id="Img8" src="images/google1.jpg" />
    <img id="Img9" src="images/halifaxcitadel.jpg" />
    <img id="Img10" src="images/DalienNavalShipyards.jpg" />
    <img id="Img11" src="images/planes-big_1583925a.jpg" />
    <img id="Img12" src="images/scale1.jpg" />
    <img id="Img13" src="images/starthm4.jpg" />
    <img id="Img14" src="images/UFO.jpg" />
    <div id="tts"></div>
     <audio id="audio1" src="" controls="controls" />
     <audio id="audio2" src="" controls="controls" />
     <audio id="audio3" src="sound/beep.mp3" controls="controls" />
     <audio id="audio4" src="" controls="controls" />
     <audio id="audio5" src="" controls="controls" />
     <audio id="audio6" src="sound/beep.mp3" controls="controls" />
     <audio id="audio7" src="" controls="controls" />
     <audio id="audio8" src="" controls="controls" />
     <audio id="audio9" src="" controls="controls" />
     <audio id="audio10" src="sound/beep.mp3" controls="controls" />
     <audio id="audio11" src="" controls="controls" />
     <audio id="audio12" src="" controls="controls" />
     <audio id="audio13" src="" controls="controls" />
     <audio id="audio14" src="" controls="controls" />
     <audio id="audio15" src="sound/beep.mp3" controls="controls" />

</body>
</html>
