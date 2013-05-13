﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="Closure._default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <%--   <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no,minimum-scale=1.0,maximum-scale=1.0" />--%>
    <link href="closure.css" rel="stylesheet" />
    <title>Closure</title>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <%--  90kb--%>
    <script src="Scripts/jquery.signalR-1.0.1.min.js"></script>
    <script src="/signalr/hubs"></script>

    <script src="http://code.createjs.com/easeljs-0.6.0.min.js"></script>
    <script src="http://code.createjs.com/tweenjs-0.4.0.min.js"></script>
    <script src="http://code.createjs.com/movieclip-0.5.0.min.js"></script>
    <script src="http://code.createjs.com/soundjs-0.4.0.min.js"></script>
    <%--  creatjs about 110kb--%>

    <script src="Scripts/testHTML.js"></script>
    <script src="Scripts/closure.js"></script>
    <script src="Scripts/closure-sound.js"></script>
    <%--  20kb--%>
    <script src="Scripts/init.js"></script>
</head>
<body onload="init();" style="margin: 0">
    <canvas id="canvas" width="3000" height="2000"> </canvas>
    <form id="form1" runat="server">
        SID:
	        <input id="sid" type="text" runat="server" />
        CID:
	        <input id="cid" type="text" runat="server" />
        <input id="count" type="text" />
        <div id="player1"></div>  
       <div id="player2"></div>  
      <video id="video" src ="\sound\video.mp4 "></video>
    </form>
     
     <div id="tts" class="tts"></div>
</body>
</html>
