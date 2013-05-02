 ﻿function soundplay(topic, vol,r1)
     {
             var sound;
         if (searchStringInArray("sonar", topic) != - 1) {
                 var s = Math.round(Math.random() * 6);
                 if (s ==1)
                     sound = createjs.Sound.play("/sound/Sonar1.mp3");
                 if (s ==2)
                     sound = createjs.Sound.play("/sound/Sonar2.mp3");
                 if(sound)
                 sound.setVolume(vol);
             }
         if (searchStringInArray("beep", topic) != - 1 ) {
                 var s = Math.round(Math.random() * 7);
                 if (s == 1)
                     sound = createjs.Sound.play("/sound/beep2.mp3");
                 if (s == 2)
                     sound = createjs.Sound.play("/sound/beep3.mp3");
                 if (sound)
                 sound.setVolume(vol);
             }
         if (searchStringInArray("apollo", topic) != - 1 ) {
                 var s = Math.round(Math.random() * 8);
                 if (s == 1)
                     sound = createjs.Sound.play("/sound/Apollo1.mp3");
                 if (s == 2)
                     sound = createjs.Sound.play("/sound/Apollo2.mp3");
                 if (s == 3)
                     sound = createjs.Sound.play("/sound/Apollo3.mp3");
                 if (sound)
                 sound.setVolume(vol);
                 sound.setPosition(Math.random() * sound.getDuration());
                 setTimeout(function () { sound.stop(); }, 5500);
             }
        if (searchStringInArray("static", topic) != -1&&r1<0.1) {
                var s = Math.round(Math.random() * 9);
                 if (s == 1)
                     sound = createjs.Sound.play("/sound/static1.mp3");
                 if (s == 2)
                     sound = createjs.Sound.play("/sound/static2.mp3");
                 if (s == 3)
                     sound = createjs.Sound.play("/sound/static3.mp3");
                 if (s == 4)
                     sound = createjs.Sound.play("/sound/static4.mp3");
                 if (s == 5)
                     sound = createjs.Sound.play("/sound/static5.mp3");
                 if (s == 6)
                     sound = createjs.Sound.play("/sound/static6.mp3");
                 if (s == 7)
                     sound = createjs.Sound.play("/sound/static7.mp3");
                 setTimeout(function () { sound.stop(); }, 950);
             }
     }
 
 function searchStringInArray(str, strArray) {
         for (var j = 0; j < strArray.length; j++) {
                 if (strArray[j].match(str)) return j;
             }
       return -1;
    }
