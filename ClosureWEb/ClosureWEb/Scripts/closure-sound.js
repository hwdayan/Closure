 ﻿function soundplay(topic, vol,r1)
     {
     var sound;   
     //var au = new Audio();
     //au.onpause = function () { $(au).remove(); }
     //au.onended = function () { $(au).remove(); }

         if (searchStringInArray("sonar", topic) != - 1) {
                 var s = Math.round(Math.random() * 3);
                 //if (s ==1)
                 //    sound = createjs.Sound.play("/sound/Sonar1.mp3");
                 if (s == 2) {
                   //  sound = createjs.Sound.play("/sound/Sonar2.mp3");
                     var au = document.getElementById("audio3");
                     au.src="/sound/Sonar2.mp3";
                     au.play();
                     au.volume = vol;
                 }
                 //if(sound)
                 //sound.setVolume(vol);
             }
         if (searchStringInArray("beep", topic) != - 1 ) {
             var s = Math.round(Math.random() * 7);
             var au = document.getElementById("audio6");
                 if (s == 1)  //  sound = createjs.Sound.play("/sound/beep2.mp3");    
                    au.src = "/sound/beep2.mp3";
                 if (s == 2) // sound = createjs.Sound.play("/sound/beep3.mp3");           
                    au.src = "/sound/beep3.mp3";
                 //if (sound)
                 // sound.setVolume(vol);
                 au.play();
                 au.volume = vol;
             }
         if (searchStringInArray("apollo", topic) != - 1 ) {
             var s = Math.round(Math.random() * 8);
             var au = document.getElementById("audio10");
                 if (s == 1)  //  sound = createjs.Sound.play("/sound/Apollo1.mp3");
                     au.src = "/sound/Apollo1.mp3";
                     if (s == 2) //sound = createjs.Sound.play("/sound/Apollo2.mp3");     
                     au.src = "/sound/Apollo2.mp3"; 
                     if (s == 3)//sound = createjs.Sound.play("/sound/Apollo3.mp3");      
                     au.src = "/sound/Apollo3.mp3"; 
             //    if (sound) {
             //        sound.setVolume(vol);
             //        sound.setPosition(Math.random() * sound.getDuration());
             //        setTimeout(function () { sound.stop(); }, 5500);
             //} 
                 if (au.src != "") {

                     au.addEventListener('loadedmetadata', function () {
                      au.currentTime = Math.random() * au.duration;
                      au.play();
                      au.volume = vol;
                      setTimeout(function () { au.pause(); }, 5500);
                     });          
                 }
             }
        if (searchStringInArray("static", topic) != -1&&r1<0.1) {
            var s = Math.round(Math.random() * 9);
            var au = document.getElementById("audio15");
                 if (s == 1)//sound = createjs.Sound.play("/sound/static1.mp3");
                     au.src = "/sound/static1.mp3"; //
                 if (s == 2)//sound = createjs.Sound.play("/sound/static2.mp3");
                     au.src = "/sound/static2.mp3";//
                 if (s == 3)//sound = createjs.Sound.play("/sound/static3.mp3");
                     au.src = "/sound/static3.mp3";//
                 if (s == 4)//sound = createjs.Sound.play("/sound/static4.mp3");
                     au.src = "/sound/static4.mp3";//
                 if (s == 5)//sound = createjs.Sound.play("/sound/static5.mp3");
                     au.src = "/sound/static5.mp3";//
                 if (s == 6)//sound = createjs.Sound.play("/sound/static6.mp3");
                     au.src = "/sound/static6.mp3";//
                 if (s == 7)//sound = createjs.Sound.play("/sound/static7.mp3");
                     au.src = "/sound/static7.mp3";//
            //     if (sound) 
            //setTimeout(function () { sound.stop(); }, 950);
                 au.play();
                 au.volume = vol;
                 setTimeout(function () { au.pause(); }, 950);
             }
     }
 
 function searchStringInArray(str, strArray) {
         for (var j = 0; j < strArray.length; j++) {
                 if (strArray[j].match(str)) return j;
             }
       return -1;
    }
