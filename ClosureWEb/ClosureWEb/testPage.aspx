<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="testPage.aspx.cs" Inherits="Closure.testPage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
</head>
<body onload="resizeCanvas();" style="margin: 0">
    <form id="form1" runat="server">
        <div>
            <div id="holder"></div>
            <div id="player" style="display: none"></div>
            <%--   <canvas id ="myCanvas" style="background-color:green;display:block" />--%>
            <video width="320" height="240" controls>
                <source src="/sound/video.mp4" type="video/mp4"/>          
                Your browser does not support the video tag.
            </video>
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
                    document.getElementById("video").play();
                }
            </script>
            <script>
                document.addEventListener('touchstart', initVideo, false);
                document.addEventListener('click', initVideo, false);
                document.addEventListener('touchstart', play, false);
                document.addEventListener('click', play, false);

                var vid = document.createElement('video');
                vid.src = '/sound/video.mp4';
                document.getElementById('holder').appendChild(vid);

                //this function should be called on a click event handler otherwise video won't start loading
                function initVideo() {
                    vid.play(); //start loading, didn't used `vid.load()` since it causes problems with the `ended` event

                    if (vid.readyState !== 4) { //HAVE_ENOUGH_DATA
                        vid.addEventListener('canplaythrough', onCanPlay, false);
                        vid.addEventListener('load', onCanPlay, false); //add load event as well to avoid errors, sometimes 'canplaythrough' won't dispatch.
                        setTimeout(function () {
                            vid.pause(); //block play so it buffers before playing
                        }, 1); //it needs to be after a delay otherwise it doesn't work properly.
                    } else {
                        //video is ready
                    }
                }

                function onCanPlay() {
                    vid.removeEventListener('canplaythrough', onCanPlay, false);
                    vid.removeEventListener('load', onCanPlay, false);
                    //video is ready
                    vid.play();
                }
            </script>

        </div>
    </form>
</body>
</html>
