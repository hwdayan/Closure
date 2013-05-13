var radio = [1,10,12,13,14,15,16,17,20,21,22,29,30,31,32,33,34,35,36,37,38,39,40,41,56,57,79,93,97,98];
function soundplay(topic, vol, r1)
     {
     var sound;

         if (searchStringInArray("sonar", topic) ) {
                 var s = Math.round(Math.random() * 3);
             
                 if (s == 2) {
                   sound = createjs.Sound.play("/sound/Sonar2.mp3");   
                 }
                 if(sound)
                 sound.setVolume(vol);
             }
         if (searchStringInArray("beep", topic) ) {
             var s = Math.round(Math.random() * 10);
        
                 if (s == 1)    sound = createjs.Sound.play("/sound/beep2.mp3");    
                
                 if (s == 2)    sound = createjs.Sound.play("/sound/beep3.mp3");           
                   
                 if (sound)
                  sound.setVolume(vol);
         
             }
 
         if (searchStringInArray("pdgls", topic)) {
             var s = Math.random() * 10;
             if (s < 5&&s>2.5)
                 communications(player1);
             if (s<2.5)
                 communications(player2);

             function communications(player) {
                 var state = player.getPlayerState();
                 if (state == 2 || state == 5 || state == 0) {
                     player == player1 ? p1sameCH = false : p2sameCH = false;
                     if (r1 < 0.035)//change to random channel 
                     {
                         player.playVideoAt(Math.round(Math.random() * 97));
                     }
                     if (r1 > 0.035 && r1 < 0.3) //change to radio communications  
                         player.playVideoAt(Math.round(Math.random() *radio.length-1)-1);
                     else//change start time 
                     {
                         var dur = player.getDuration();
                         var rndsec = Math.round(Math.random() * dur);
                         player.playVideo();
                         player.seekTo(rndsec, true);
                     }
                 }
             }
         }
      
        if (searchStringInArray("static", topic)&&r1<0.1) {
                var s = Math.round(Math.random() * 9);
                var url = "/sound/static" + s + ".mp3";
                sound = createjs.Sound.play(url);
                if(sound)
                     sound.setVolume(vol); 
             }           
     }
 
 function searchStringInArray(str, strArray) {
         for (var j = 0; j < strArray.length; j++) {
                 if (strArray[j].match(str)) return true;
             }
       return false;
    }
