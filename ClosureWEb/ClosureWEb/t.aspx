<!DOCTYPE html>
<html>
  <body  bgcolor="#000000">
 <script type="text/javascript" src="swfobject/swfobject.js"></script>

<div id="ytapiplayer">
You need Flash player 8+ and JavaScript enabled to view this video.
</div>

<script type="text/javascript">

var params = { allowScriptAccess: "always" };
var atts = { id: "myytplayer" };
swfobject.embedSWF("http://www.youtube.com/v/vj36BKls3pQ?autohide=1&showinfo=0&controls=0&enablejsapi=1&playerapiid=ytplayer&autoplay=1",
"ytapiplayer", "425", "356", "8", null, null, params, atts);


function onYouTubePlayerReady(playerId) {
ytplayer = document.getElementById("myytplayer");
ytplayer.mute();
}


</script>
  </body>
</html>