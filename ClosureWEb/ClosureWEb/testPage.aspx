<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="testPage.aspx.cs" Inherits="Closure.testPage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <script src="http://vjs.zencdn.net/c/video.js"></script>
    <script src="Scripts/jquery-1.6.4.min.js"></script>
</head>

<body onload="resizeCanvas();" style="margin: 0">
    <form id="form1" runat="server">
        <div>
        
            <div id="player"> </div> 
<video id="movie" src="http://www.w3schools.com/tags/movie.mp4"/>
                <canvas id ="myCanvas" style="background-color:green;display:block" />
            <script>
                function resizeCanvas() {
                    var canvas = document.getElementById("myCanvas");
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
                var tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";
                var firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                var player;
                function onYouTubeIframeAPIReady() {
                    player = new YT.Player('player', {
                        height: '390',
                        width: '640',
                        videoId: 'M7lc1UVf-VE',
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });
                }
                function onPlayerReady(event) {
                    //$("#player").trigger('click');
                    //$("#player").trigger('touchstart');
      
                }

                var done = false;
                function onPlayerStateChange(event) {
                    if (event.data == YT.PlayerState.PLAYING && !done) {
                        setTimeout(stopVideo, 15000);
                        done = true;
                    }
                }
                function stopVideo() {
                    player.stopVideo();
                }
                function play() {
                    player.playVideo();
                }
                function play2() {
                   var movie= document.getElementById("movie");
                   movie.play();
                }
            </script>
            <script>       
                document.addEventListener('touchstart', play, false);
                document.addEventListener('click', play, false);
                document.addEventListener('touchstart', play2, false);
                document.addEventListener('click', play2, false);
            </script>

        </div>
    </form>
</body>
</html>
